<template>
  <div>
    <div style="color:red;font-size:30px">Style Binding: red color, 30 font => This is the basic</div>
    <div :style="style1">Style Binding: green color, 30 font => This is new way</div>
    <button @click="style1.color='blue'">Change Color</button>
  </div>
</template>

<script>
// object형태로 접근
export default {
  data () {
    return {
      style1: {
        color: 'green',
        fontSize: '30px'
      }
    }
  }
}
</script>

<style>

</style>
