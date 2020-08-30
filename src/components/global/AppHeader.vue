<template>
  <div class="header">
    <div class="container">
      <div class="logo">Vue</div>
      <ul class="text-right">
        <router-link to="/" tag="li" exact>
          <a>Home</a> </router-link
        >|
        <router-link to="/about" tag="li">
          <a>About</a> </router-link
        >|
        <router-link to="/help" tag="li">
          <a>Help</a> </router-link
        >|
        <router-link to="/contact" tag="li">
          <a>Contact Us</a> </router-link
        >|
        <router-link to="/blog" tag="li">
          <a>Blog</a> </router-link
        >|
        <router-link to="/github" tag="li">
          <a>Github</a> </router-link
        >|
        <router-link to="/faq" tag="li">
          <a>FAQ</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  overflow: hidden;
  color: #fff;
  .logo {
    float: left;
    font-size: 24px;
    padding: 20px;
    width: 200px;
  }
  ul {
    float: left;
    width: calc(100% - 200px);
    li {
      display: inline-block;
      padding: 20px;
      font-size: 18px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
