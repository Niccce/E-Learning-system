<template>
  <div class="container">
    <x-header>课程考试</x-header>
    <div class="item">
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
    <div class="item">
      <div class="question">2.{{ questionTwo.question }}</div>
      <divider>选项</divider>
      <div class="option">
        <checker
          default-item-class="item"
          selected-item-class="item-selected"
          v-model="choiceTwo"
        >
          <div v-for="(item, index) in questionTwo.options" :key="index">
            <checker-item :value="item">{{ item.value }} </checker-item>
            <span>{{ item.option }}</span>
          </div>
          <!-- <span>{{ choiceOne.value }}</span> -->
        </checker>
      </div>
    </div>

    <div class="item">
      <div class="question">3.{{ questionThree.question }}</div>
      <divider>选项</divider>
      <div class="option">
        <checker
          default-item-class="item"
          selected-item-class="item-selected"
          v-model="choiceThree"
        >
          <div v-for="(item, index) in questionThree.options" :key="index">
            <checker-item :value="item">{{ item.value }} </checker-item>
            <span>{{ item.option }}</span>
          </div>
          <!-- <span>{{ choiceOne.value }}</span> -->
        </checker>
      </div>
    </div>

    <div class="item">
      <div class="question">4.{{ questionFour.question }}</div>
      <divider>选项</divider>
      <div class="option">
        <checker
          default-item-class="item"
          selected-item-class="item-selected"
          v-model="choiceFour"
        >
          <div v-for="(item, index) in questionFour.options" :key="index">
            <checker-item :value="item">{{ item.value }} </checker-item>
            <span>{{ item.option }}</span>
          </div>
          <!-- <span>{{ choiceOne.value }}</span> -->
        </checker>
      </div>
    </div>

    <div class="item">
      <div class="question">5.{{ questionFive.question }}</div>
      <divider>选项</divider>
      <div class="option">
        <checker
          default-item-class="item"
          selected-item-class="item-selected"
          v-model="choiceFive"
        >
          <div v-for="(item, index) in questionFive.options" :key="index">
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
      cla_id: "",
      choiceOne: "",
      choiceTwo: "",
      choiceThree: "",
      choiceFour: "",
      choiceFive: "",
      questionOne: {
        question: "",
        answer: "",
        options: [
          {
            option: "",
            key: "1",
            value: "A"
          },
          {
            option: "",
            key: "2",
            value: "B"
          },
          {
            option: "",
            key: "3",
            value: "C"
          }
        ]
      },
      questionTwo: {
        question: "",
        answer: "",
        options: [
          {
            option: "",
            key: "1",
            value: "A"
          },
          {
            option: "",
            key: "2",
            value: "B"
          },
          {
            option: "",
            key: "3",
            value: "C"
          }
        ]
      },
      questionThree: {
        question: "",
        answer: "",
        options: [
          {
            option: "",
            key: "1",
            value: "A"
          },
          {
            option: "",
            key: "2",
            value: "B"
          },
          {
            option: "",
            key: "3",
            value: "C"
          }
        ]
      },
      questionFour: {
        question: "",
        answer: "",
        options: [
          {
            option: "",
            key: "1",
            value: "A"
          },
          {
            option: "",
            key: "2",
            value: "B"
          },
          {
            option: "",
            key: "3",
            value: "C"
          }
        ]
      },
      questionFive: {
        question: "",
        answer: "",
        options: [
          {
            option: "",
            key: "1",
            value: "A"
          },
          {
            option: "",
            key: "2",
            value: "B"
          },
          {
            option: "",
            key: "3",
            value: "C"
          }
        ]
      }
    };
  },
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      // 接收函数
      this.cla_id = this.$route.params.cla_id;
      // console.log(this.cla_id)
      this.$axios
        .post("/api/test/getQuestion", {
          cla_id: this.cla_id
        })
        .then(response => {
          console.log(response.data[0]);
          this.gettest(response.data[0].test_question);
        });
    },
    gettest(data) {
      var string = data;
      var str = string.split(";");
      var question = new Array(str.length);
      var answer = new Array(str.length);
      var case1 = new Array(str.length);
      var case2 = new Array(str.length);
      var case3 = new Array(str.length);
      for (var i = 0; i < str.length; i++) {
        var str2 = str[i].split("|");
        question[i] = str2[0];
        answer[i] = str2[1];
        case1[i] = str2[2];
        case2[i] = str2[3];
        case3[i] = str2[4];
      }
      console.log("问题");
      // console.log(str);
      // console.log(question);
      // console.log(answer);
      // console.log(case1);
      // console.log(case2);
      // console.log(case3);
      this.questionOne.question = question[0];
      this.questionTwo.question = question[1];
      this.questionThree.question = question[2];
      this.questionFour.question = question[3];
      this.questionFive.question = question[4];

      this.questionOne.answer = answer[0];
      this.questionTwo.answer = answer[1];
      this.questionThree.answer = answer[2];
      this.questionFour.answer = answer[3];
      this.questionFive.answer = answer[4];

      this.questionOne.options[0].option = case1[0];
      this.questionOne.options[1].option = case2[0];
      this.questionOne.options[2].option = case3[0];

      this.questionTwo.options[0].option = case1[1];
      this.questionTwo.options[1].option = case2[1];
      this.questionTwo.options[2].option = case3[1];

      this.questionThree.options[0].option = case1[2];
      this.questionThree.options[1].option = case2[2];
      this.questionThree.options[2].option = case3[2];

      this.questionFour.options[0].option = case1[3];
      this.questionFour.options[1].option = case2[3];
      this.questionFour.options[2].option = case3[3];

      this.questionFive.options[0].option = case1[4];
      this.questionFive.options[1].option = case2[4];
      this.questionFive.options[2].option = case3[4];
    },

    submitAnswer() {
      let goal = 0;
      if (this.choiceOne.option === this.questionOne.answer) {
        goal += 20;
      }
      if (this.choiceTwo.option === this.questionTwo.answer) {
        goal += 20;
      }
      if (this.choiceThree.option === this.questionThree.answer) {
        goal += 20;
      }
      if (this.choiceFour.option === this.questionFour.answer) {
        goal += 20;
      }
      if (this.choiceFive.option === this.questionFive.answer) {
        goal += 20;
      }
      if (goal < 60) {
        this.$vux.toast.text(goal + "分，考试不及格，需重新考试");
      }
      if (goal >= 60) {
        if (goal > 90) {
          this.$vux.toast.text(goal + "分，成绩优秀");
        } else if (goal > 70) {
          this.$vux.toast.text(goal + "分，考试良好");
        } else {
          this.$vux.toast.text(goal + "分，考试及格");
        }
      }
      console.log(goal);
      // this.$vux.toast.text("登录成功");
      // this.getToken(response.data);
      // 跳转首页
      this.$router.push({
        path: "/account"
      });
      // 修改成绩信息表，存入会员id，课程id，成绩，证书置为及格良好优秀？？
      // 完成课程，加积分？？
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
