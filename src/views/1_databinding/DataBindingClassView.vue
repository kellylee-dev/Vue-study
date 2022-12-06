<template>
  <div>
    <!--key값:text-red, value값: true-->
    <div :class="{'text-red': true}">Class Binding True</div>
    <div :class="{'text-red': false}">Class Binding Flase</div>
    <!--2개의 클래스 모두 바인딩-->
    <div :class="{'text-red': true, 'active': true }">Class Binding True</div>
    <!--클래스명이 한단어로 되있을때는 '' 없이 사용가능-->
    <div :class="{'text-red': true, active: true }">Class Binding True</div>
    <!--true/false말고도 생성가능=> isActive 생성 -->
    <div :class="{'text-red': hasError, active: isActive }">Class Binding True</div>
    <div :class="class2">Class Binding 2</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError']
    }
  }
}
</script>
<!--style에 scoped를 붙이면 이곳에서만 적용되는 style-->
<!--class 2개 생성 .active와 .text-red -->
<style scoped>
.active {
    background-color: green;
    font-weight: bold;
}
.text-red {
    color: red;
}
</style>
