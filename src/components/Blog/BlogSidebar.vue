<template>
  <div class="blog-sidebar">{{title | uppercase}}</div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Testing Sidebar From Data"
    };
  },
  name: "sidebar",
  filters: {
    uppercase: function(v) {
      return v.toUpperCase();
    }
  }
};
</script>
