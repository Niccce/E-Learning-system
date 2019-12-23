<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-news"></i> 新闻
                </el-breadcrumb-item>
                <el-breadcrumb-item>发布新闻</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="newsForm" :model="newsForm" label-width="80px">
                    <el-form-item label="新闻标题">
                        <el-input v-model="newsForm.new_name" maxlength="35" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="新闻作者">
                        <el-input v-model="newsForm.new_reporter" style="width:46%" maxlength="10" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="新闻日期">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="newsForm.new_date"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="新闻封面">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :limit="1"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传一张jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="新闻内容">
                        <el-input type="textarea" rows="10" v-model="newsForm.new_content" maxlength="800" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="新闻来源">
                        <el-input v-model="newsForm.new_source"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">新闻发布</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            fileList: [],
            newsForm: {
                new_id: this.$route.params.new_id,
                new_name: this.$route.params.new_name,
                new_reporter: this.$route.params.new_reporter,
                new_date: this.$route.params.new_date,
                new_source: this.$route.params.new_source,
                new_content: this.$route.params.new_content,
                new_sum: this.$route.params.new_sum
            }
        };
    },
    methods: {
        onSubmit(                                                                                                                                                                           ) {
            this.$message.success('提交成功！');
            console.log(this.newsForm);
            /**
             * 先提交过去新闻编号，后台处理是否存在
             * 存在：则修改原本新闻信息
             * 不存在：则新增新闻信息
             */

            var _this = this;
            _this.$axios.get('/api/class/getClass', {}).then(response => {
                console.log('前端');
                this.$message.success('提交成功！');
                console.log(response)
            });


        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
};
</script>