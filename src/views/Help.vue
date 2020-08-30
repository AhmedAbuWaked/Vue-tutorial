<template>
  <div class="our-help">
    <h2>To Do List</h2>
    <form>
      <input type="text" placeholder="Type Your Task" v-model="taskText" />
      <button @click.prevent="addTask" :disabled="!taskText">Add Task</button>
      <button :disabled="tasks.length < 2" @click.prevent="deleteAll">
        Delete All
      </button>
    </form>
    <div class="tasks-list" v-for="(task, index) in tasks" :key="task.index">
      <div
        class="task-box"
        @click="task.done = !task.done"
        :style="{ 'text-decoration': task.done ? 'line-through' : '' }"
      >
        {{ task.words }}
      </div>
      <span @click="deleteTask(index)">Delete</span>
    </div>
    <hr />
    <ul class="tabs">
      <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']">
        Tab One
      </li>
      <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']">
        Tab Two
      </li>
      <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']">
        Tab Three
      </li>
      <li @click="activeTab = '4'" :class="[activeTab === '4' ? 'active' : '']">
        Tab Four
      </li>
    </ul>
    <div class="tabs-content">
      <div class="content-one" v-if="activeTab === '1'">Content One</div>
      <div class="content-Two" v-if="activeTab === '2'">Content Two</div>
      <div class="content-Three" v-if="activeTab === '3'">Content Three</div>
      <div class="content-Four" v-if="activeTab === '4'">Content Four</div>
    </div>
    <hr />
    <button @click="message = !message">
      {{ message ? "Hide The Message" : "Show The Message" }}
    </button>
    <transition name="slide-fade">
      <div class="the-message" v-if="message">This Is Our Message</div>
    </transition>
    <hr />
    <h3>Random Photo</h3>
    <img v-if="selectedPhoto" :src="selectedPhoto" alt="" />
  </div>
</template>

<script>
let photos = [
  "http://placehold.it/400x250/F00/FFF",
  "http://placehold.it/400x250/00F/FFF",
  "http://placehold.it/400x250/080/FFF",
  "http://placehold.it/400x250/000/FFF",
  "http://placehold.it/400x250/AAA/FFF",
];
export default {
  name: "help",
  data: function() {
    return {
      tasks: [],
      taskText: "",
      activeTab: "1",
      photos: photos,
      selectedPhoto: null,
      message: false,
    };
  },
  methods: {
    addTask: function() {
      this.tasks.push({ words: this.taskText, done: false });
      this.taskText = "";
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
    deleteAll: function() {
      this.tasks = [];
    },
    randomImg: function(imgs) {
      let randomIndex = Math.floor(Math.random() * imgs.length);
      return imgs[randomIndex];
    },
  },
  created: function() {
    this.selectedPhoto = this.randomImg(this.photos);
  },
};
</script>

<style lang="scss" scoped>
.tasks-list {
  margin-top: 30px;
  .task-box {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 10px;
    width: 22%;
    border-radius: 5px 0 0 5px;
  }
  span {
    display: inline-block;
    border-radius: 0 5px 5px 0;
    padding: 10px;
    background-color: steelblue;
    color: #fff;
    cursor: pointer;
  }
}
.tabs {
  list-style: none;
  li {
    display: inline-block;
    padding: 10px 30px;
    background-color: #333;
    margin-right: 10px;
    color: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    cursor: pointer;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
}
img {
  margin-bottom: 70px;
}
.the-message {
  background: #333;
  color: #fff;
  padding: 20px;
  margin: 70px auto 200px;
  width: 30%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
