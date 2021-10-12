<template>
  <div class="search d-flex">
    <div class="answer" ref="answer">
      <div class="box py-16 px-8" v-show="answer">
        <div class="title text-md-h2 text-xs-h5 font-weight-bold pl-6">
          答案
        </div>
        <div class="input-box white rounded-xl py-6 px-12 mt-7 elevation-3">
          <v-list-item v-for="(item, i) in answer" :key="i">
            <v-list-item-content>
              <v-list-item-title
                class="text-h4 font-weight-bloder"
                v-html="'答案' + (i + 1) + ':&nbsp' + item.details.answer"
              ></v-list-item-title>
              <v-list-item-subtitle v-if="item.details.options"
                >选项:&nbsp;{{ item.details.options }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </div>
      </div>
    </div>

    <div class="question py-16 px-8" ref="question">
      <div class="title text-md-h2 text-xs-h5 font-weight-bold pl-6">搜索</div>
      <!-- {{ answer }} -->
      <div class="input-box white rounded-xl py-6 px-12 mt-7 elevation-3">
        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          label="题目"
          placeholder="输入题目"
          class="search-box"
          no-resize
          :style="{ minHeight: '100%' }"
          v-model="question"
        ></v-textarea>
      </div>
      <v-btn
        class="submit float-right d-flex mt-8 rounded-xl"
        color="primary"
        depressed
        elevation="3"
        height="16%"
        @click="search"
        :loading="loading"
        :disabled="loading"
      >
        <span class="text-h5">搜索</span>
      </v-btn>
    </div>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { searchApiTwo, searchApiFour } from "../api/question";

export default {
  name: "search",
  created() {},
  data() {
    return {
      question: null,
      text: null,
      snackbar: false,
      loading: false,
      answer: null,
    };
  },
  methods: {
    search() {
      let vm = this;

      if (vm.question === null || vm.question === "") {
        vm.text = "请输入题目";
        vm.snackbar = true;
        return;
      }

      let pattern = /h.+p\.ananas\.chaoxing\.com.+png/;
      let tmp = [];
      vm.searchApiFour(vm.question)
        .then((res) => {
          vm.text = res.message;
          vm.snackbar = true;
          if (res.code !== 200) return;
          tmp = res.data;
          tmp.forEach((item) => {
            let str = item.details.answer;
            if (pattern.test(str)) {
              item.details.answer =
                '<a href="' +
                str.match(pattern)[0] +
                '" target="b">查看答案</a>';
            }
          });
        })
        .then(() => {
          vm.searchApiTwo(vm.question).then((res) => {
            let temp = [
              {
                details: {
                  answer: null,
                  question: null,
                },
              },
            ];
            temp[0].details.answer = res.da;
            temp[0].details.question = vm.question;

            temp.push(...tmp);
            vm.answer = temp;

            this.$refs.answer.style.width = "50%";
            this.$refs.question.style.width = "50%";
          });
        });
    },

    searchApiTwo(value) {
      return searchApiTwo(value);
    },

    searchApiFour(value) {
      return searchApiFour(value);
    },
  },
};
</script>

<style lang='scss'>
.search {
  width: 100%;
  height: 100%;

  .question {
    width: 100%;
    height: 100%;
    transition: all 0.5s;

    .input-box {
      display: block;
      width: 100%;
      height: 70%;

      .v-input__control,
      .v-input__slot,
      .v-text-field__slot,
      .v-input {
        height: 100%;
      }

      textarea {
        height: 100%;
      }
    }

    .submit {
      width: 20%;

      span {
        margin: auto;
      }
    }
  }

  .answer {
    width: 0%;
    height: 100%;
    transition: all 0.5s;

    .box {
      width: 100%;
      height: 100%;
    }
    .detail {
      // overflow: hidden;
      // text-overflow: ellipsis;
      width: 100%;
      height: 5rem;
    }
  }
}
</style>