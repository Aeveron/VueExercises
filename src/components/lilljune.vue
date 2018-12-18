<template>
  <div>
    <table>
      <tr>
        <th>{{ value }}</th>       
        <th>Done</th>
      </tr>
      <tr v-for="task in tasks">
        <td>{{task.description}}</td>
        <td>
          <input type="checkbox" id="checkbox" v-model="task.isChecked">
        </td>
      </tr>
      <button class="addandremove" @click="addRow">Add row</button>
      <button class="addandremove" @click="removeRow">Remove row</button>
      <input type="text" v-on:keydown="value = $event.target.value">
    </table>
    <button id="back" @click="back">BACK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      tasks: [
        {
          id: 1,
          description: "First task",
          isChecked: false
        },
        {
          id: 2,
          description: "Second task",
          isChecked: true
        }
      ],
      props: ["tasks"]
    };
  },
  methods:{
    back: function () {
      this.$router.push('/');
    },
     addRow: function (index) {
            try {
                this.tasks.splice(index + 1, 0, {});
            } catch(e)
            {
                console.log(e);
            }
        },
        removeRow: function (index) {
            this.tasks.splice(index, 1);
        },
  }
};
</script>

<style scoped>
body {
  /* Uncomment this to enable scrolling and zooming
  touch-action: manipulation;
  */
}

table {
  border-collapse: collapse;
  width: 50%;
}

td,
th {
  border: black solid 2px;
}

#back {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 100px;
}
.addandremove{
    font-size: 15px;
    padding: 1px;
    margin: 2px;
}
</style>