<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-news"></i> 新闻
                </el-breadcrumb-item>
                <el-breadcrumb-item>新闻管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="query.name" placeholder="新闻标题" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="newsData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                :default-sort = "{prop: 'new_id', order: 'incending'}"
            >
                 <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="新闻标题">
                            <span>{{ props.row.new_name }}</span>
                        </el-form-item>
                        <el-form-item label="新闻记者">
                            <span>{{ props.row.new_reporter }}</span>
                        </el-form-item>
                        <el-form-item label="发布日期">
                            <span>{{ props.row.new_date }}</span>
                        </el-form-item>
                        <el-form-item label="新闻来源">
                            <span>{{ props.row.new_source }}</span>
                        </el-form-item>
                        <el-form-item label="浏览次数">
                            <span>{{ props.row.new_sum }}</span>
                        </el-form-item>
                        <el-form-item label="新闻正文">
                            <span>{{ props.row.new_content }}</span>
                        </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column prop="new_id" sortable label="ID" width="90" align="center"></el-table-column>
                <el-table-column prop="new_name" label="新闻标题" width="450"></el-table-column>
                <el-table-column prop="new_reporter" label="新闻记者"></el-table-column>
                <el-table-column prop="new_source" label="新闻来源"></el-table-column>
                <el-table-column label="封面(查看大图)" align="center">
                    <template slot-scope="scope">
                        <el-image
                            class="table-td-thumb"
                            :src="scope.row.new_img"
                            :preview-src-list="[scope.row.new_img]"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="new_date" label="发布日期"></el-table-column>
                <el-table-column sortable prop="new_sum" label="浏览次数"></el-table-column>
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
                            @click="handleDelete(scope.$index, scope.row, scope.row.new_id)"
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
                    :total="newsPageTotal"
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
            newsData: [],
            newsPageTotal: 0,
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
                this.newsData = res.newsList;
                this.newsPageTotal = res.newsPageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            // this.$set(this.query, 'pageIndex', 1);
            // this.getData();

            var _this = this;
            _this.$axios.get('/api/class/getClass', {}).then(response => {
                console.log('前端');
                this.$message.success('提交成功！');
                console.log(response)
            });

        },
        // 删除操作
        handleDelete(index, row, id) {
            // 二次确认删除
            // id：传入的是要删除的新闻的new_id，以便在数据库中删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    this.$message.success('删除成功');
                    this.newsData.splice(index, 1);

                    console.log("传递要删除的新闻编号",id);
                    /***
                     * 在这里补充删除数据库新闻的代码
                     */

                })
                .catch(() => {});
        },
        // 编辑操作
        handleEdit(row) {
            console.log("管理课程页面传递的数据：",row);
            this.$router.push({
                path: '/NewsReleased',
                name: 'NewsReleased',
                params: {
                    new_id: row.new_id,
                    new_name: row.new_name,
                    new_reporter: row.new_reporter,
                    new_source: row.new_source,
                    new_date: row.new_date,
                    new_sum: row.new_sum,
                    new_img: row.new_img,
                    new_content: row.new_content,
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
