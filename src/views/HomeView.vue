<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- Helloword.vue에 가면 msg가 있다 -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// 임포트한 HelloWorld를 위에서 tag로 사용할 수 있다.

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
