<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <!--문자열 바인딩으로 counter출력-->
    <p>{{ counter }}</p>
  </div>
</template>

<script>
// view에서는 on 대신에 @붙인다 onClick => @click
// 모든 함수정의는 methods안에 만들어야한다
export default {
  data () {
    return {
      counter: 0 //default는 0으로
    }
  },
  methods: {
    increaseCounter () {
      this.counter += 1
    }
  }
}
</script>

<style>

</style>
