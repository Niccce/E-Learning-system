<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :data="staff">
                <el-card shadow="hover" class="mgb20" style="height:280px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        职员性别：
                        <span>{{staff.sex}}</span>
                    </div>
                    <div class="user-info-list">
                        职员编号：
                        <span>{{staff.id}}</span>
                    </div>
                    <div class="user-info-list">
                        职员邮箱：
                        <span>{{staff.email}}</span>
                    </div>
                </el-card>
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-1">
                        <i class="el-icon-s-platform grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">{{staff.newsNum}}条</div>
                            <div>已发布新闻数量</div>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-2">
                        <i class="el-icon-s-management grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">{{staff.courseNum}}门</div>
                            <div>已发布课程数量</div>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-3">
                        <i class="el-icon-s-claim grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">{{staff.testNum}}门</div>
                            <div>已考试课程数量</div>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="hover" :body-style="{padding: '0px'}">
                    <div class="grid-content grid-con-4">
                        <i class="el-icon-s-comment grid-con-icon"></i>
                        <div class="grid-cont-right">
                            <div class="grid-num">{{staff.messageNum}}条</div>
                            <div>消息与通知</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="18">
                <el-row :gutter="2" class="mgb2">
                    <el-col :span="12">
                        <router-link to='NewsReleased'>
                            <el-card shadow="hover" :body-style="{padding: '0px'}">
                                <div class="grid-content-0 grid-con-0">
                                    <div class="grid-cont-right">
                                        <div class="grid-num">发布新闻</div>
                                    </div>
                                </div>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="12">
                        <router-link to='CourseReleased'>
                            <el-card shadow="hover" :body-style="{padding: '0px'}">
                                <div class="grid-content-0 grid-con-0">
                                    <div class="grid-cont-right">
                                        <div class="grid-num">发布课程</div>
                                    </div>
                                </div>
                            </el-card>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="2">
                    <el-col :span="12">
                        <router-link to='TestManaged'>
                            <el-card shadow="hover" :body-style="{padding: '0px'}">
                                <div class="grid-content-0 grid-con-0">
                                    <div class="grid-cont-right">
                                        <div class="grid-num">发布考试</div>
                                    </div>
                                </div>
                            </el-card>
                        </router-link>
                    </el-col>
                    <el-col :span="12">
                        <router-link to='CertificateManaged'>
                            <el-card shadow="hover" :body-style="{padding: '0px'}">
                                <div class="grid-content-0 grid-con-0">
                                    <div class="grid-cont-right">
                                        <div class="grid-num">颁布证书</div>
                                    </div>
                                </div>
                            </el-card>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            name: localStorage.getItem('ms_username'),
            staff: {
                name: localStorage.getItem('ms_username'),
                id: 'S00001',
                sex: '男',
                email: 'zhangsan@163.com',
                newsNum: 3,
                courseNum: 3,
                testNum: 1,
                messageNum: 3
            }
        };
    },
    components: {
        Schart
    },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-content-0{
    display: flex;
    align-items: center;
    height: 352px;
    color: #6b6b6b;
}

.grid-content-0:hover{
    cursor: pointer;
    color: #3a3a3a;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: inherit;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-0 .grid-con-icon {
    background: #3a3a3a;
}

.grid-con-0 .grid-num {
    font-size: 50px;
    color: inherit;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-2 .grid-num {
    color: rgb(242, 94, 67);
}

.grid-con-3 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-3 .grid-num {
    color: rgb(100, 213, 114);
}

.grid-con-4 .grid-con-icon {
    background: rgb(242, 224, 67);
}

.grid-con-4 .grid-num {
    color: rgb(242, 224, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.mgb2{
    margin-bottom: 2px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
