<template>
  <div class="post-box">
    <span class="post-views">{{views}}</span>
    <h3 class="post-title">{{title}}</h3>
    <span class="post-date">{{date}}</span>
    <p class="post-content">{{content | shorten(70)}}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-auth">{{author}}</span>
      </div>
      <div class="col-sm-6 text-right">
        <span class="post-cat" v-format="14">{{category}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "post"
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 50px;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #f00;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .post-title {
    color: #737373;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.7;
    color: #666;
  }
  .post-auth {
    background-color: #607d8b;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  .post-cat {
    @extend .post-auth;
  }
}
</style>