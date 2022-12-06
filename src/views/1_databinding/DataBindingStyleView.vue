<template>
  <div>
    <!--Method1: original method-->
    <div style="color:red;font-size:30px">Style Binding: red color, 30 font => This is the basic</div>
    <!--Method2: style binding-->
    <div :style="style1">Style Binding: green color, 30 font => This is new way</div>
    <!--버튼을 클릭하는 순간 색상이 바뀜-->
    <button @click="style1.color='blue'">Change Color to Blue</button>
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
