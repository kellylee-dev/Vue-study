<template>
  <div>
    <!--문자열로 바인딩 -->
    <!-- <p style="color:red;">RED world</p> 로 출력됨-->
    <div>{{ htmlString }}</div>

    <!--html로 바인딩-->
    <div v-html="htmlString"></div>
    <!--RED world (빨간색 글자로 출력됨)-->
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
