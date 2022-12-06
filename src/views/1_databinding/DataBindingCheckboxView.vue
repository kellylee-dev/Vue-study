<template>
  <div>
    <div>
      <!--모든체크박스에 v-model에 같은 key값인 favoriteLang을 넣는다. 그룹으로 묶인다-->
      <!--체크박스인 경우 v-model은 value값과 양방향데이터바인딩이 아니라 checked로 데이터바인딩이 된다(사용자가 value값을 변경하는 것이 아니라 checked값 true/false를 바꾼느 것이기때문에)-->
      <!--input이나 select은 value값과 양방향데이터 바인딩이다-->
      <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <!--문자열바인딩 배열이 자동으로 문자열로 바뀌어서 출력됨-->
    <div>Selected Lang: {{ favoriteLang }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favoriteLang: [] // 하나의 그룹으로 엮인다. name대신 사용 / 한개 이상이므로 배열로
      // favoritelang: ['js'] : 체크박스가 미리 선택되어 나옴
    }
  }
}
</script>

<style>

</style>
