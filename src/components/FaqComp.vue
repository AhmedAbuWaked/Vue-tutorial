<template>
  <div class="faq-comp">
    <div
      class="question-box"
      v-for="question in questions"
      :key="question.index"
    >
      <h3 @click="question.open = !question.open">{{ question.title }}</h3>
      <div class="question-answer" v-show="question.open">
        <p>{{ question.reply }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faq-comp",
  props: ["questions"],
};
</script>

<style lang="scss" scoped>
.question-box {
  margin-bottom: 100px;
  h3 {
    background-color: #555;
    color: #fff;
    padding: 20px;
    width: 60%;
    margin: 20px auto 0;
    text-align: left;
    cursor: pointer;
  }
  .question-answer {
    @extend h3;
    background-color: #999;
    margin-top: 0;
    p {
      margin: 0;
    }
  }
}
</style>
