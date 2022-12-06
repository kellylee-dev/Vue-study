<template>
  <div>
    <!--readonly일때 양방향으로 할필요가 없다. 단방향으로 사용: v-model대신 v-bind사용-->
    <input type="text" name="" id="" v-bind:value="userId" readonly>
    <!--위 input과 똑같다 v-bind생략가능-->
    <input type="text" name="" id="" :value="userId" readonly>
  </div>
  <br>
  <!--v-bind:src 이미지주소 속성 바인딩-->
  <img :src="imgSrc" alt="" style="width:100px; height:auto;">
  <br>
  <!--조회버튼 v-model양방향사용/어떤 값이라도 들어와야 조회가 가능하게 만듬/값이 없을때는 조회버튼이 비활성화되있음-->
  <input type="search" name="" id="" v-model="txt1">
  <button :disabled="txt1 === ''">search</button>
</template>

<script>
// v-bind: 와 :는 같은의미
// txt1이 비어있으면 seacrch버튼 비활성화, txt1이 뭐가 있으면 search버튼 활성화
export default {
  data () {
    return {
      userId: 'kelly', // v-bind: 단방향 readonly일때는 v-model대신에 v-bind사용
      imgSrc: 'https://www.wisnet.com/wp-content/uploads/2021/07/vue-js-logo-png-transparent-png.png',
      txt1: ''
    }
  }
}
</script>

<style>

</style>
