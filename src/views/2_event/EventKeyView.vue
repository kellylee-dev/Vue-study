<template>
  <div>
    <!--Method1-->
    <!--엔터키 사용할수있게 @keyup사용-->
    <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText">
    <!--버튼클릭시 doSearch메서드 호출-->
    <button @click="doSearch">Search</button>
    <br>

    <!--Method2-->
    <!--더 간단하게 바로 doSearch메소드 호출가능-->
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
      // 엔터키 코드가 13 : 엔터키를 넣었을때 버튼을 클릭한 것과 같은 결과 doSearch메서드 실행
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

<style>

</style>
