<template>
  <div class="hello" :style="{'--mainColor' : color}">
    <h1>Color change</h1>
    <ul class="switch-colors">
      <li data-color="#b71540" @click="updateColors"></li>
      <li data-color="#fdcb9e" @click="updateColors"></li>
      <li data-color="#0f4c75" @click="updateColors"></li>
      <li data-color="#206a5d" @click="updateColors"></li>
      <li data-color="#59405c" @click="updateColors"></li>
    </ul>
    <div class="changes">
      <div>change</div>
      <div>change</div>
      <div>change</div>
      <div>change</div>
      <div>change</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["color"],
  methods: {
    updateColors: function(e) {
      this.color = e.target.getAttribute("data-color");
      console.log(this.color);
    }
  }
};
</script>

<style lang="scss" scoped>
.hello {
  // background-color: var(--mainColor);
}
.switch-colors {
  list-style: none;
  li {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
    &:first-child {
      background-color: #b71540;
    }
    &:nth-child(2) {
      background-color: #fdcb9e;
    }
    &:nth-child(3) {
      background-color: #0f4c75;
    }
    &:nth-child(4) {
      background-color: #206a5d;
    }
    &:last-child {
      background-color: #59405c;
    }
  }
}

.changes {
  div {
    float: left;
    width: calc((100% - 4%) / 5);
    margin-top: 50px;
    background-color: var(--mainColor);
    color: #fff;
    padding: 20px;
    &:not(:last-child) {
      margin-right: 1%;
    }
  }
}
</style>