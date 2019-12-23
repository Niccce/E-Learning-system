<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-read"></i> 课程
                </el-breadcrumb-item>
                <el-breadcrumb-item>管理课程</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.title" placeholder="课程标题" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="courseData"
                border
                class="table"
                header-cell-class-name="table-header"
                :default-sort = "{prop: 'cla_id', order: 'incending'}"
            >
                 <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="课程标题">
                            <span>{{ props.row.cla_name }}</span>
                        </el-form-item>
                        <el-form-item label="任课老师">
                            <span>{{ props.row.cla_teacher }}</span>
                        </el-form-item>
                        <el-form-item label="发布日期">
                            <span>{{ props.row.cla_date }}</span>
                        </el-form-item>
                        <el-form-item label="报名人数">
                            <span>{{ props.row.cla_sum }}</span>
                        </el-form-item>
                        <el-form-item label="课程权限">
                            <span>{{ props.row.cla_grade===0?'普通会员':(props.row.cla_grade===1?'高级会员':'特级会员' )}}</span>
                        </el-form-item>
                        <el-form-item label="课程积分">
                            <span>{{ props.row.cla_value }}</span>
                        </el-form-item>
                        <el-form-item label="课程类别">
                            <span>{{ props.row.cla_type }}</span>
                        </el-form-item>
                        <el-form-item label="视频资源">
                            <span>{{ props.row.cla_video }}</span>
                        </el-form-item>
                        <el-form-item label="课件资源">
                            <span>{{ props.row.cla_ppt }}</span>
                        </el-form-item>
                        <el-form-item label="课程简介">
                            <span>{{ props.row.cla_content }}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column prop="cla_id" sortable label="ID" width="90" align="center"></el-table-column>
                <el-table-column prop="cla_name" label="课程标题" width="300"></el-table-column>
                <el-table-column prop="cla_teacher" label="任课教师"></el-table-column>
                <el-table-column label="封面(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.cla_img"
                            :preview-src-list="[scope.row.cla_img]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="cla_date" label="发布日期"></el-table-column>
                <el-table-column prop="cla_sum" label="报名人数"></el-table-column>
                <el-table-column prop="cla_grade" sortable label="权限" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            effect="dark"
                            :type="scope.row.cla_grade===0?'info':(scope.row.cla_grade===1?'':'danger')"
                        >{{scope.row.cla_grade===0?'普通会员':(scope.row.cla_grade===1?'高级会员':'特级会员')}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="cla_iftest" sortable label="状态" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.cla_iftest===1?'danger':(scope.row.cla_iftest===0?'info':'')"
                        >{{scope.row.cla_iftest===1?'已发布考试':'未发布考试'}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row, scope.row.cla_id)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page="query.pageIndex"
                    :page-size="query.pageSize"
                    :total="coursePageTotal"
                    @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            courseData: [],
            coursePageTotal: 0,
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                console.log(res);
                this.courseData = res.courseList;
                this.coursePageTotal = res.coursePageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row, id) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.courseData.splice(index, 1);

                    console.log("传递要删除的课程编号",id);
                    /***
                     * 在这里补充删除数据库新闻的代码
                     */

                })
                .catch(() => {});
        },
        // 编辑操作
        handleEdit(row) {
            console.log("管理新闻页面传递的数据：",row);
            this.$router.push({
                path: '/CourseReleased',
                name: 'CourseReleased',
                params: {
                    cla_id: row.cla_id,
                    cla_name: row.cla_name,
                    cla_teacher: row.cla_teacher,
                    cla_date: row.cla_date,
                    cla_type: row.cla_type,
                    cla_grade: row.cla_grade,
                    cla_iftest: row.cla_iftest,
                    cla_video: row.cla_video,
                    cla_ppt: row.cla_ppt,
                    cla_img: row.cla_img,
                    cla_content: row.cla_content
                }
            })
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style scoped>
.news-tips{
    color: #606266;
    font-size: 18px;
    height: 35px;
    margin-bottom: 20px;
}
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-left: 60px;
    margin-right: 0;
    margin-bottom: 0;
    width: 80%;
}
</style>
