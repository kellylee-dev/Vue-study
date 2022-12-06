<template>
  <div>
    <select name="" id="" v-model="selectedCity">
      <option value=""></option>
      <option value="02">Seoul</option>
      <option value="051">Busan</option>
      <option value="063">Jeju</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCity: '02' //기본값이 02이기 때문에 Seoul이 디폴트로 선택되있음
      //사용자가 select에서 Busan을 클릭하자마자 이곳 selectedCity: '051'로 변경됨
    }
  }
}
</script>

<style>

</style>
