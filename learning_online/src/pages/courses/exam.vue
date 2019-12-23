<template>
  <div class="container">
    <x-header>课程考试</x-header>
    <div class="item">
      <!-- <div
        v-for="(question, index) in questionItems"
        :key="index"
        class="qAndA"
      >
        <div class="question">{{ index + 1 }}.{{ question.question }}</div>
        <divider>选项</divider>
        <div class="option">
          <checker
            default-item-class="item"
            selected-item-class="item-selected"
            v-model="choice"
          >
            <div v-for="(item, index) in question.options" :key="index">
              <checker-item :value="item">{{ item.value }} </checker-item>
              <span>{{ item.option }}</span>
            </div>
            <span>{{ choice }}</span>
          </checker>
        </div>
      </div> -->
      <div class="question">1.{{ questionOne.question }}</div>
      <divider>选项</divider>
      <div class="option">
        <checker
          default-item-class="item"
          selected-item-class="item-selected"
          v-model="choiceOne"
        >
          <div v-for="(item, index) in questionOne.options" :key="index">
            <checker-item :value="item">{{ item.value }} </checker-item>
            <span>{{ item.option }}</span>
          </div>
          <!-- <span>{{ choiceOne.value }}</span> -->
        </checker>
      </div>
    </div>
    <div class="btn">
      <x-button type="primary" mini @click.native="submitAnswer">
        提交答案
      </x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, Checker, CheckerItem, Divider, XButton } from "vux";
export default {
  components: {
    XHeader,
    Checker,
    CheckerItem,
    Divider,
    XButton
  },
  data() {
    return {
      choiceOne: "",
      questionOne: {
        question: "题目题目题目题目题目题目题目题目题目题目题目题目",
        answer: "A",
        options: [
          {
            option: "HTML",
            key: "1",
            value: "A"
          },
          {
            option: "LF",
            key: "2",
            value: "B"
          },
          {
            option: "hhh",
            key: "3",
            value: "C"
          }
        ]
      }
    };
  },
  //   data() {
  //     return {
  //       choice: "",
  //       questionItems: [
  //         {
  //           question: "谁是演员？",
  //           options: [
  //             {
  //               option: "林峯",
  //               key: "1",
  //               value: "A"
  //             },
  //             {
  //               option: "许廷铿",
  //               key: "2",
  //               value: "B"
  //             },
  //             {
  //               option: "AGA",
  //               key: "3",
  //               value: "C"
  //             }
  //           ]
  //         },
  //         {
  //           question: "今天星期几？",
  //           options: [
  //             {
  //               option: "一",
  //               key: "1",
  //               value: "A"
  //             },
  //             {
  //               option: "二",
  //               key: "2",
  //               value: "B"
  //             },
  //             {
  //               option: "日",
  //               key: "3",
  //               value: "C"
  //             }
  //           ]
  //         }
  //       ]
  //     };
  //   },
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      // 接收函数
      console.log(this.$route);
    },

    submitAnswer() {
      let goal = 0;
      // if (this.choiceOne.value === this.questionOne.answer) {
      //   goal += 20
      // }
      console.log(goal);

      // 管理员发布课程
      // var _this = this
      // _this.$axios
      //   .post('/api/class/addclass', {
      //     cla_id: 'C001a2',
      //     cla_name: '123',
      //     cla_content: '12345',
      //     cla_teacher: '123456',
      //     cla_iftest: 1,
      //     cla_date: '2018-12-24T16:00:00.000Z',
      //     cla_type: '123456789',
      //     cla_value: 2,
      //     cla_video: null,
      //     cla_ppt: '123456789',
      //     cla_grade: 0
      //   })
      //   .then(response => {
      //     this.coursesList = response.data
      //     console.log('前端')
      //     // console.log(params)
      //     console.log(this.coursesList)
      //   })

      //会员添加课程
      // var _this = this;
      // _this.$axios
      //   .get("/api/menprogress/addinClass", {
      //     params: {
      //       mem_id: "M00004",
      //       cla_id: "C00002"
      //     }
      //   })
      //   .then(response => {
      //     console.log("success");
      //   });

      //职员删除课程
      // var _this = this;
      // _this.$axios
      //   .post("/api/class/deleteinclass", {
      //     cla_id: "C00001"
      //   })
      //   .then(response => {
      //     this.coursesList = response.data;
      //     console.log("职员删除课程");
      //     console.log(this.coursesList);
      //   });

      //会员删除课程
      // var _this = this;
      // _this.$axios
      //   .post("/api/menprogress/deleteclass", {
      //     mem_id: "M00002",
      //     cla_id: "C00001"
      //   })
      //   .then(response => {
      //     this.coursesList = response.data;
      //     console.log("会员删除课程");
      //     console.log(this.coursesList);
      //   });

      //会员等级课程列表
      // var _this = this;
      // _this.$axios
      //   .post("/api/class/vipClass", {
      //     cla_grade: "1"
      //   })
      //   .then(response => {
      //     this.coursesList = response.data;
      //     console.log("会员等级课程列表");
      //     console.log(this.coursesList);
      //   });
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
}
.qAndA {
  border-bottom: 1px solid black;
}
.question {
  padding: 1em;
  font-size: 1.2em;
}
.option {
  display: flex;
  flex-direction: column;
  padding: 1em;
  line-height: 2em;
}
.item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.item-selected {
  border: 1px solid green;
}
.btn {
  text-align: right;
  margin-right: 0.5em;
  margin-top: 1em;
}
</style>
