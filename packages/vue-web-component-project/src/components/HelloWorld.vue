<template>
  <div class="vue-app-style">
    <h1>Made with <span style="color:#e21010">♥</span> ️in {{ title }}</h1>

    <button v-on:click.prevent="increment">+</button>
    <span>{{ count }}</span>
    <button v-on:click.prevent="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    url: String,
  },
  data: ()=> {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++;
    },
    decrement () {
      this.count-- ;
    }
  }
}
</script>

<style lang="css" scoped>
  .vue-app-style {

  }
   h1{
      font-size: 1.4em;
    }
   button{
    border: none;
    padding: 15px 32px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    margin: 16px 0 !important;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    background-color: black;
    color: #fff;
    }
    button + span{
display: inline-block;
font-weight: 700;
padding: .76em;

    }
</style>

