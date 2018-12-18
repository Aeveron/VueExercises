<template>
    <div>
        <p>HEI</p>
        <button @click="back">BACK</button>

    </div>
</template>

<script>
export default {
 methods: {
    back: function () {
      this.$router.push('/');
    }
}
}
</script>

<style>

</style>
