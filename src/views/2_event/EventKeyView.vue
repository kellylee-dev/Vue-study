<template>
  <div>
    <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText">
    <button @click="doSearch">Search</button>
    <br>
    <input type="search" name="" id="" @keyup.enter="doSearch" v-model="searchText">
    <button @click="doSearch">Search</button>
  </div>
</template>

<script>
// keyup.enter사용
// keyup.delete, keyup.down => 키보드에서 내려가는 화살표 주요키에서 이벤트에서 받을수 있게끔 해줌
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    doSearch () {
      console.log(this.searchText)
    },
    checkEnter (event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

<style>

</style>
