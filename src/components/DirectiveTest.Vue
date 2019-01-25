<template>
  <div>
    <p>HEI</p>
    <button @click="back">BACK</button>

    <div>
      <p v-local-highlight:background.delayed="'red'">RØD</p>
      <p v-local-highlight:background.delayed="'green'">GRØNN</p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        setTimeout(() => {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  },
  methods: {
    back: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
