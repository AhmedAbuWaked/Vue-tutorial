<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p v-test>{{ pageDescription }}</p>
    <div class="product">
      <h3>Product Title</h3>
      <p>Product Description</p>
      <span class="price">Price: {{price}}$</span>
      <span class="amount-title"></span>
      <input type="range" min="1" max="20" step="1" v-model="amount" />
      <div class="total-price">
        <span class="amount">Amount {{amount}}</span>
        <span class="total">Total {{totalPrice}}$</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "About Us",
      pageDescription: "This Is About Us Page",
      amount: 10,
      price: 50
    };
  },
  computed: {
    totalPrice: function() {
      return this.amount * this.price;
    }
  },
  name: "about",
  directives: {
    test: {
      bind: function(el) {
        el.style.color = "orange";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  background-color: #333;
  width: 300px;
  color: #fff;
  margin: 10px auto;
  border-radius: 5px;
  padding: 20px;
  .price {
    display: block;
    margin-bottom: 20px;
  }
  input[type="range"] {
    width: 100%;
  }
  .total-price {
    margin-top: 30px;
    span {
      background-color: #eee;
      border-radius: 5px;
      padding: 10px;
      color: #999;
      &:first-child {
        margin-right: 30px;
      }
    }
  }
}
</style>