<template>
  <div>
    <!--문자열 단방향 데이터 바인딩하는법-->
    <h1>Hello {{ userName }}</h1>
    <p> {{ message }}</p>
  </div>
</template>
<script>
export default {
  // vue에서는 function이라는 키워드를 만들 필요가없다
  data () {
    return {
      userName: 'kellylee0475',
      message: 'Welcome Kelly!'
    }
  }
}
</script>
<!--stype scoped를 사용하면 여기서 생성한 style은 이 화면에서만 적용/ 만약 모든환경에서 적용하고 싶으면 scoped삭제-->
<style scoped>
  .text-red {
    color: red;
  }
</style>
