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
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="课程标题">
                        <el-input 
                            v-model="form.title"
                            maxlength="20"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="课程教师">
                        <el-input
                            v-model="form.writer"
                            style="width:46%"
                            maxlength="5"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="课程日期">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择开始日期"
                                v-model="form.date1"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-date-picker
                                placeholder="选择结束日期"
                                v-model="form.date2"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程类型">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="听"></el-radio>
                            <el-radio label="说"></el-radio>
                            <el-radio label="读"></el-radio>
                            <el-radio label="写"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="等级权限">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="普通会员"></el-radio>
                            <el-radio label="高级会员"></el-radio>
                            <el-radio label="特级会员"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="积分奖励">
                        <el-input
                            v-model="form.reward"
                            type="number"
                            style="width:46%"
                            placeholder="上限为999……"
                            max="999"
                            min="0"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="课程简介">
                        <el-input
                            type="textarea"
                            rows="7"
                            v-model="form.introduction"
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
                        <el-button type="primary" @click="onSubmit">课程发布</el-button>
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
            fileList: [
                {
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            options: [
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            form: {
                title: '',
                introduction: '',
                writer: '',
                date1: '',
                date2: '',
                reward: '',
                source: '',
                content: ''
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
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