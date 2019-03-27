<template>
  <div class="container">
    <button @click="back">BACK</button>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 cold-md-offset-3">
        <h1>Filters And Mixins</h1>
        <p>{{ firstText | reverse }}</p>
        <p>{{ secondText | calculateLength }}</p>

        <p>{{ reversed }}</p>
        <p>{{ lengthAware }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { lengthAwareMixin } from './lengthAwareMixin'
export default {
    mixins: [lengthAwareMixin],
    data (){
        return{
            firstText: 'Some Text',
            secondText: 'Sondre'
        }
    },
      filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    }
  },
  methods: {
    back: function() {
      this.$router.push("/");
    }
  },
  computed: {
      reversed(){
          return this.firstText.split("").reverse().join("");
      }
  }
};
</script>

<style>
</style>
