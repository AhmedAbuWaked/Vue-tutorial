<template>
  <div class="blog">
    <h2>{{ pageName }}</h2>
    <p>{{ PageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              v-bind:key="post.id"
              :views="post.views"
              :title="post.title"
              :content="post.content"
              :author="post.author"
              :category="post.category"
              :date="post.date"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/post_api.json";

export default {
  data: function() {
    return {
      pageName: "Blog",
      PageDescription: "Hi There, This Is Blog Page",
      posts: JsonPosts
    };
  },
  name: "blog",
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>
