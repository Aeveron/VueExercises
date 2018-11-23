<template>
  <div>
    <button @click="back">BACK</button>

    <div>
      <p>Current value: {{ value }} </p>
      <button @click="value += 5">Add 5</button>
      <button @click="value += 1">Add 1</button>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    back: function () {
      this.$router.push('/');
    }
  },
  computed: {
    result: function (){
      return this.value == 37 ? 'YOU ARE DONE ' : 'NOT DONE';
    }
  },
  watch: {
    result: function(){
      var vm = this
     setTimeout(function(){
       vm.value = 0;
     }, 5000);
    }
  }
};
</script>

<style>
</style>
