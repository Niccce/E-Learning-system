<template>
  <div class="container">
    <x-header>课程信息</x-header>
    <img src="//7n.w3cschool.cn/attachments/knowledge/201912/4805.png" />
    <tab v-model="index" @on-index-change="indexChange">
      <tab-item>介绍</tab-item>
      <!-- <tab-item>目录</tab-item> -->
      <tab-item v-if="isJoin === false">评论</tab-item>
      <tab-item v-if="isJoin === true">进度</tab-item>
    </tab>
    <div id="intro" v-if="index === 0">
      <span>{{ courseInfo.cla_name }}</span>
      <p>课程老师：{{ courseInfo.cla_teacher }}</p>
      <p>课程类型：{{ courseInfo.cla_type }}</p>
      <p>课程简介：{{ courseInfo.cla_content }}</p>
    </div>
    <!-- <div id="catalogue" v-if="index === 1">2</div> -->
    <div id="comments" v-if="index === 1 && isJoin === false">
      <comment
        v-for="item in commentList"
        :key="item.cMes_id"
        :data="item"
      ></comment>
      <x-button class="btn" mini type="warn" @click.native="btnJoin">
        加入课程
      </x-button>
    </div>
    <div id="progress" v-if="index === 1 && isJoin === true">
      <div>
        <x-button class="learnBtn" type="primary" @click.native="btnToLearn">
          第一章：开始学习
        </x-button>
        <!-- <x-button class="learnBtn" type="primary" @click.native="btnToLearn">
          第二章：开始学习
        </x-button>
        <x-button class="learnBtn" type="primary" @click.native="btnToLearn">
          第三章：开始学习
        </x-button> -->
        <x-button
          type="primary"
          :disabled="cannotClick"
          @click.native="btnToExam"
        >
          进入考试
        </x-button>
      </div>
      <div id="comment">
        <group>
          <x-textarea
            :max="50"
            :placeholder="btnTitle"
            v-model="myComment"
          ></x-textarea>
          <div class="comBtn">
            <x-button type="primary" mini @click.native="submitComment">
              发表
            </x-button>
          </div>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, XHeader, XButton, XTextarea, Group } from "vux";
import comment from "./components/comment";
export default {
  components: {
    Tab,
    TabItem,
    XHeader,
    comment,
    XButton,
    XTextarea,
    Group
  },
  data() {
    return {
      index: 0,
      isJoin: false, //是否加入了本课程
      btnTitle: "可对该课程进行评价",
      myComment: "",
      courseInfo: [],
      progress: "0",
      cannotClick: true, //进度为100可点击考试按钮，false时可点击
      content: "",
      commentList: []
    };
  },
  methods: {
    indexChange(index) {
      this.index = index;
    },
    btnJoin() {
      var _this = this;
      // console.log(this.courseInfo)
      if (_this.$store.state.grade < _this.courseInfo.cla_grade) {
        _this.$vux.toast.show({
          text: "等级不足，无法加入课程哦",
          type: "cancel"
        });
      } else {
        this.isJoin = true; //改变组件显示
        _this.$vux.loading.show({
          text: "加入中.."
        });
        // console.log(_this.courseInfo.cla_id)
        _this.$axios
          .get("/api/menprogress/addinClass", {
            params: {
              mem_id: _this.$store.state.userId, //"M00014",//_this.$store.state.userId
              cla_id: _this.courseInfo.cla_id //"C0102"//_this.courseInfo.cla_id
            }
          })
          .then(response => {
            console.log("加入课程成功");
            // this.courseInfo = response.data;
            // console.log(this.courseInfo);
            this.$vux.loading.hide();
          });
      }
    },
    btnToLearn() {
      this.$router.push({
        name: "learn", //用path获取不到params参数，query用path和name都可以
        params: {
          content: this.courseInfo.cla_ppt,
          cla_id: this.courseInfo.cla_id
        }
      });
    },
    btnToExam() {
      this.$router.push({
        name: "exam", //用path获取不到params参数，query用path和name都可以
        params: { cla_id: this.courseInfo.cla_id }
      });
    },
    submitComment() {
      var _this = this;
      console.log(_this.myComment);
      console.log("submit");
      var myDate = new Date();
      var date = myDate.toLocaleDateString();
      _this.$axios
        .get("/api/cMessage/addComment", {
          params: {
            cla_id: _this.courseInfo.cla_id,
            cMes_date: date,
            cMes_userId: _this.$store.state.username,
            cMes_content: _this.myComment,
            cMes_userType: _this.$store.state.grade
          }
        })
        .then(response => {
          this.$vux.toast.text("评论成功");
        });
    },
    getCourseInfo() {
      //获取课程信息
      var _this = this;
      _this.$vux.loading.show({
        text: "加载中.."
      });
      var routerParams = _this.$route;
      console.log(routerParams.query);
      _this.$axios
        .post("/api/class/searchClassById", {
          cla_id: routerParams.query.cla_id
        })
        .then(response => {
          this.courseInfo = response.data[0];
          console.log(this.courseInfo);
        });

      // 获取课程评论
      _this.$axios
        .get("/api/cMessage/getComment", {
          params: {
            cla_id: routerParams.query.cla_id
          }
        })
        .then(response => {
          this.commentList = response.data;
          // console.log(response.data[0].progress);
          console.log(this.commentList);
        });

      // 获取会员学习进度
      // var _this = this;
      _this.$axios
        .get("/api/menprogress/getProgress", {
          params: {
            mem_id: this.$store.state.userId,
            cla_id: routerParams.query.cla_id
          }
        })
        .then(response => {
          // console.log(response.data[0].progress);
          // console.log(this.progress);
          if (response.data.length !== 0) {
            this.progress = response.data[0].progress;
            this.isJoin = true;
            if (this.progress === "100") {
              this.cannotClick = false;
            }
          }
          this.$vux.loading.hide();
        });
    }
  },
  created() {
    this.getCourseInfo(); //获取课程信息
  }
};
</script>

<style scoped>
.container {
  background-color: white;
}
.container img {
  width: 100%;
}
#intro {
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  line-height: 1.5em;
}
.btn {
  position: fixed;
  right: 1em;
  bottom: 1em;
}
/* .learnBtn { */
/* text-align: center; */
/* display: table-cell; */
/* vertical-align: middle; */
/* } */
.comBtn {
  text-align: right;
}
#progress {
  padding: 2em;
  /* height: 10em; */
}
</style>
