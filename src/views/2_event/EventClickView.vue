<template>
  <div>
    <button @click="increaseCounter">Add 1</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
// view에서는 on 대신에 @붙인다 onClicn => @click
// 모든 함수정의는 methods안에 만들어야한다
export default {
  data () {
    return {
      counter: 0
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
