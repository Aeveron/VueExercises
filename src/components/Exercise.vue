<template>

  <div class="exercise">
    <button @click="nextpage()">Second Page</button>
    <button @click="nextpage2()">Third Page</button>
    <button @click="nextpage3()">Fourth Page</button>
     <button @click="nextpage4()">GAME</button>
     <button @click="nextpage5()">mPesa Page</button>
     <button @click="nextpage6()">Lill June</button>
    <p>{{ name }} ({{ age }})</p>
    <p>{{age *3 }}</p>
    <p>{{ mathss()}}</p>
    <div>
      <input type="text" v-bind:value="name">
    </div>
    <div>
      <img v-bind:src="picss" style="width: 200px; height: 200px;">
    </div>
    <div>
      <button v-on:click="clickme">Show Alert</button>
    </div>
    <div>
      <input type="text" v-on:keydown="value = $event.target.value">
      <p> {{ value }}</p>
    </div>
    <div>
      <input type="text" v-on:keydown.enter="value = $event.target.value">
      <p> {{ value }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "exercise",
  data() {
    return {
      name: "Sondre",
      age: "27",
      picss:
        "https://vignette.wikia.nocookie.net/onepiece/images/a/a3/Gear_Fourth_Infobox.png/revision/latest?cb=20170830213511",
      value: ""
    };
  },
  methods: {
    mathss: function() {
      return Math.random();
    },
    clickme: function() {
      alert("Alert");
    },
    nextpage: function(){
     this.$router.push('Secondpage');
    },
    nextpage2: function(){
      this.$router.push('Thirdpage');
    },
    nextpage3: function(){
      this.$router.push('Arraystuff');
    },
     nextpage4: function(){
      this.$router.push('Game');
    },
     nextpage5: function(){
      this.$router.push('mPesaTest');
    },
      nextpage6: function(){
      this.$router.push('lilljune');
    }
  }
};
</script>
