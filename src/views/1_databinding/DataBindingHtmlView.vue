<template>
  <div>
    <!--문자열로 바인딩됨-->
    <div>{{ htmlString }}</div>
    <!--html로 바인딩-->
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      htmlString: '<p style="color:red;">RED world</p>'
    }
  }
}
</script>

<style>

</style>
