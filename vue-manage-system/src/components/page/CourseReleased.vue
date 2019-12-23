<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-read"></i> 课程
                </el-breadcrumb-item>
                <el-breadcrumb-item>发布课程</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="courseForm" :model="courseForm" :rules="rulesForm" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="课程标题" prop="cla_name">
                        <el-input v-model="courseForm.cla_name" maxlength="35" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="课程教师" prop="cla_teacher">
                        <el-input v-model="courseForm.cla_teacher" style="width:46%" maxlength="5" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="发布日期" prop="cla_date">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="courseForm.cla_date"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程类型" prop="cla_type">
                        <el-radio-group v-model="courseForm.cla_type">
                            <el-radio label="设计类"></el-radio>
                            <el-radio label="实践类"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="等级权限" prop="cla_grade">
                        <el-radio-group v-model="courseForm.cla_grade">
                            <el-radio label="普通会员"></el-radio>
                            <el-radio label="高级会员"></el-radio>
                            <el-radio label="特级会员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="积分奖励" prop="cla_value">
                        <el-input-number
                            v-model="courseForm.cla_value"
                            type="number"
                            style="width:46%"
                            controls-position="right"
                            placeholder="上限为999……"
                            :max="999"
                            :min="0"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="课程简介" prop="cla_content">
                        <el-input
                            type="textarea"
                            rows="7"
                            v-model="courseForm.cla_content"
                            placeholder="简要描述课程内容……"
                            maxlength="300"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="课程封面">
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="课程课件">
                        <el-upload
                            class="upload-demo"
                            show-file-list
                            drag
                            action="http://jsonplaceholder.typicode.com/api/posts/"
                            :beforeUpload="beforeAvatarUpload">
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传doc/docx文件，且不超过10M</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('courseForm')">课程发布</el-button>
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
            courseForm: {
                cla_id: '',
                cla_name: '',
                cla_content: '',
                cla_teacher: '',
                cla_iftest: 0,
                cla_date: '',
                cla_type: '',
                cla_value: 0,
                cla_video: '',
                cla_ppt: '',
                cla_grade: 0,
                cla_sum: 0
            },
            rulesForm: {
                cla_name: [
                    { required: true, message: '请输入课程标题', trigger: 'blur' },
                    { min: 3, max: 35, message: '长度在 3 到 35 个字符', trigger: 'blur' }
                ],
                cla_content: [
                    { required: true, message: '请输入课程简介', trigger: 'change' },
                    { min: 3, max: 300, message: '长度在 3 到 300 个字符', trigger: 'blur' }
                ],
                cla_teacher: [
                    { required: true, message: '请输入任课老师', trigger: 'change' }
                ],
                cla_date: [
                    { required: true, message: '请选择时间', trigger: 'change' }
                ],
                cla_type: [
                    { required: true, message: '请选择课程类别', trigger: 'change' }
                ],
                cla_value: [
                    { required: true, message: '请填写学习课程所获积分', trigger: 'change' },
                    { min: 0, max: 999, message: '数值在 0 ~ 999 之间', trigger: 'blur' }
                ],
                cla_grade: [
                    { required: true, message: '请选择课程权限', trigger: 'change' }
                ]
            },
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
        onSubmit(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$message.success('提交成功！');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
        },
        beforeAvatarUpload(file) {         
            //上传文件格式        
            var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)                
            const extension = testmsg === 'doc'
            const extension2 = testmsg === 'docx'
            const isLt2M = file.size / 1024 / 1024 < 10
            if(!extension && !extension2) {
                this.$message({
                    message: '上传文件只能是 doc、docx格式!',
                    type: 'warning'
                });
            }
            if(!isLt2M) {
                this.$message({
                    message: '上传文件大小不能超过 10MB!',
                    type: 'warning'
                });
            }
            return extension || extension2 && isLt2M
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