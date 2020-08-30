<template>
  <div class="faq">
    <h1>Test From FAQ View</h1>
    <FaqComp :questions="questions" />
  </div>
</template>

<script>
import FaqComp from "@/components/FaqComp.vue";

let questions = {
  "Question 1": {
    open: false,
    title: "How To Use Our Website",
    reply: "To Use Our Website You Have To Read This",
  },
  "Question 2": {
    open: false,
    title: "How To Use test2",
    reply: "To Use Our Website You Have To Read This 2",
  },
  "Question 3": {
    open: false,
    title: "How To Use test3",
    reply: "To Use Our Website You Have To Read This 3",
  },
  "Question 4": {
    open: false,
    title: "How To Use test4",
    reply: "To Use Our Website You Have To Read This 4",
  },
  "Question 5": {
    open: false,
    title: "How To Use test5",
    reply: "To Use Our Website You Have To Read This 5",
  },
};

export default {
  name: "faq",
  components: {
    FaqComp,
  },
  data: function() {
    return {
      questions: questions,
    };
  },
};
</script>
