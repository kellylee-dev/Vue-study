<template>
  <div>
    <div>
      <input type="radio" name="" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JavaScript" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <div> selected lang: {{ favoriteLang }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favoriteLang: '' // radio는 한가지만 선택할수있다. 체크박스와 다른점. 따라서 배열이 아니라 문자열로선언해야한다
    }
  }
}
</script>

<style>

</style>
