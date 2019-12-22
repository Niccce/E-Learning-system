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
      <span>ES6微课</span>
      <p>课程简介：</p>
      <p>课程老师：</p>
      <p>课程类型：</p>
      <span
        >ES6微课介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</span
      >
    </div>
    <!-- <div id="catalogue" v-if="index === 1">2</div> -->
    <div id="comments" v-if="index === 1 && isJoin === false">
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <comment></comment>
      <x-button class="btn" mini type="warn" @click.native="btnJoin">
        加入课程
      </x-button>
    </div>
    <div id="progress" v-if="index === 1 && isJoin === true">
      <div>
        <x-button class="learnBtn" type="primary" @click.native="btnToLearn">
          第一章：开始学习
        </x-button>
        <x-button class="learnBtn" type="primary" @click.native="btnToLearn">
          第二章：开始学习
        </x-button>
        <x-button class="learnBtn" type="primary" @click.native="btnToLearn">
          第三章：开始学习
        </x-button>
        <x-button type="primary" @click.native="btnToExam">
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
            <x-button
              type="primary"
              mini
              @click.native="submitComment"
            >
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
      myComment: ""
    };
  },
  methods: {
    indexChange(index) {
      this.index = index;
    },
    btnJoin() {
      this.isJoin = true;
      console.log("join the course");
    },
    btnToLearn() {
      this.$router.push({
        name: "learn", //用path获取不到params参数，query用path和name都可以
        params: { aa: 123, bb: 456 }
      });
    },
    btnToExam() {
      this.$router.push({
        name: "exam", //用path获取不到params参数，query用path和name都可以
        params: { aa: 123, bb: 456 }
      });
    },
    submitComment() {
      console.log(this.myComment);
      console.log("submit");
    }
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
