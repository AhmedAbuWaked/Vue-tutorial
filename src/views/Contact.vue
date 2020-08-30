<template>
  <div class="contact-us">
    <h2>Test From Contact Us</h2>
    <form>
      <input :type="fieldType" placeholder="Type Your Password" />
      <button @click.prevent="switchField">
        {{ fieldType === "password" ? "Show" : "Hide" }}
      </button>
      <hr />
      <input type="text" placeholder="Type Your Title" v-model="inputTitle" />
      <button @click.prevent="convertToSlug">Convert To Slug</button>
    </form>
    <div class="slug-result">http://test.com/{{ outputTitle }}</div>
    <hr />
    <form action="" method="post" @submit="validateForm">
      <div class="error-list">
        <div class="error" v-for="error in formErrors" :key="error.index">
          {{ error }}
        </div>
      </div>
      <div class="form-group">
        <label for="">Username</label>
        <input
          type="text"
          name="username"
          class="form-input"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="">Subject</label>
        <input
          type="text"
          name="subject"
          class="form-input"
          v-model="subject"
        />
      </div>
      <div class="form-group">
        <label for="">Message</label>
        <textarea
          name="message"
          class="form-input"
          cols="30"
          rows="10"
          v-model="message"
          @input="countChar"
          :maxlength="maxLength"
        ></textarea>
        <span class="counter">
          Left |
          <span :class="{ red: reachZero }"> {{ remainingChar }} </span>
        </span>
      </div>
      <div class="form-group">
        <input type="submit" class="send-button" value="send" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fieldType: "password",
      inputTitle: "",
      outputTitle: "",
      formErrors: [],
      username: null,
      subject: null,
      message: null,
      maxChar: 10,
      maxLength: 40,
      remainingChar: 40,
      reachZero: false,
    };
  },
  name: "contact",
  methods: {
    switchField() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
    },
    convertToSlug() {
      // cache the variable
      let theSlug = this.inputTitle;

      // [1] Trim First White Space
      theSlug = theSlug.trim();

      // [2] Convert To Lower Case
      theSlug = theSlug.toLowerCase();

      // [2] Replace White Space
      theSlug = theSlug.replace(/\s+/g, "-");

      // [3] Replace White Space
      theSlug = theSlug.replace(/&/g, "-and-");

      //Add The Result To Output
      this.outputTitle = theSlug;
    },
    validateForm: function(e) {
      this.formErrors = []; // Empty Errors To Start Fresh

      //[1] Check If Username Is Empty
      if (!this.username) {
        this.formErrors.push(`Username Can't Be Empty`);
      }

      //[2] Check If Subject Is Empty
      if (!this.subject) {
        this.formErrors.push(`Subject Can't Be Empty`);
      }

      //[3] Check If Message Is Empty
      if (!this.message) {
        this.formErrors.push(`Message Can't Be Empty`);
      }

      //[4] Check Username Char Count
      if (this.username && this.username.length > this.maxChar) {
        this.formErrors.push(`Username Can't Be More Than ${this.maxChar}`);
      }

      // To Submit Form If There's No Errors
      if (!this.formErrors.length) {
        return true;
      }

      e.preventDefault();
    },
    countChar: function() {
      this.remainingChar = this.maxLength - this.message.length;
      this.reachZero = this.remainingChar === 0 ? true : false;
      console.log(this.reachZero);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  label {
    display: block;
  }
  input[type="text"] {
    width: 20%;
    height: 30px;
    outline: none;
    border: 1px solid #fff;
    background-color: #ccc;
  }
  textarea {
    @extend input[type="text"];
    height: 150px;
  }
  input[type="submit"] {
    width: 20%;
    background-color: #134563;
    border: none;
    color: #fff;
    padding: 10px;
  }
}
.counter {
  display: block;
}
.red {
  color: red;
}
</style>
