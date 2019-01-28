<template>
  <div class="vue-app-style">
    <h1>Made with <span style="color:#e21010">♥</span> ️in {{ title }}</h1>

    <button v-on:click.prevent="increment">+</button>
    <span>{{ counter }}</span>
    <button v-on:click.prevent="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    url: String,
    value: {
      type: Number,
      default: 0
    }
  },
  data: ()=> {
    return {
      counter: 0
    }
  },
  watch: {
    value: function () {
      this.counter= this.value
    }
  },
  methods: {
    increment () {
      this.counter++;
      this._valueChanged();
    },
    decrement () {
      this.counter-- ;
      this._valueChanged();
    },
    _valueChanged() {
      this.$emit('value-changed', this.counter);    
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
    font-size: 1.4em;
    margin: 1em 0;
}
button {
    width: 3rem;
    height: 3rem;
    border: none;
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
    background-color: var(--button-background-color);
    color: var(--button-color);
    font-weight: bold;
}

button + span {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    padding: .76em;
}
</style>

