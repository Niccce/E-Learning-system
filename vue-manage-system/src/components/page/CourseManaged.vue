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
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >批量删除</el-button>
                <el-input v-model="query.title" placeholder="课程标题" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="courseData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
                :default-sort = "{prop: 'id', order: 'incending'}"
            >
                 <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="课程标题">
                            <span>{{ props.row.title }}</span>
                        </el-form-item>
                        <el-form-item label="任课老师">
                            <span>{{ props.row.teacher }}</span>
                        </el-form-item>
                        <el-form-item label="发布日期">
                            <span>{{ props.row.date }}</span>
                        </el-form-item>
                        <el-form-item label="报名人数">
                            <span>{{ props.row.sum }}</span>
                        </el-form-item>
                        <el-form-item label="课程权限">
                            <span>{{ props.row.grade===0?'普通会员':(props.row.grade===1?'高级会员':'特级会员' )}}</span>
                        </el-form-item>
                        <el-form-item label="课程积分">
                            <span>{{ props.row.reward }}</span>
                        </el-form-item>
                        <el-form-item label="课程类别">
                            <span>{{ props.row.type }}</span>
                        </el-form-item>
                        <el-form-item label="课程资源">
                            <span>{{ props.row.source }}</span>
                        </el-form-item>
                        <el-form-item label="课程简介">
                            <span>{{ props.row.content }}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column prop="title" label="课程标题" width="300"></el-table-column>
                <el-table-column prop="teacher" label="任课教师"></el-table-column>
                <el-table-column label="封面(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.thumb"
                            :preview-src-list="[scope.row.thumb]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="date" label="发布日期"></el-table-column>
                <el-table-column prop="sum" label="报名人数"></el-table-column>
                <el-table-column prop="grade" sortable label="权限" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            effect="dark"
                            :type="scope.row.grade===0?'info':(scope.row.grade===1?'':'danger')"
                        >{{scope.row.grade===0?'普通会员':(scope.row.grade===1?'高级会员':'特级会员')}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="iftest" sortable label="状态" align="center">
                    <template slot-scope="scope">
                        <el-tag
                            :type="scope.row.iftest===1?'success':(scope.row.state===0?'danger':'')"
                        >{{scope.row.iftest===1?'已考试':'未考试'}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
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

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            courseData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            coursePageTotal: 0,
            form: {},
            idx: -1,
            id: -1
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
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.courseData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.courseData, this.idx, this.form);
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
