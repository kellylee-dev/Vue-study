<template>
  <div>
    <!--v-model 자동으로 바인딩되서 들어감 (양방향 데이터바인딩) 사용자가 input에서 값을 바꿀때 자동으로 바뀜-->
    <input type="text" v-model="userId"/>
    <!--구현할 함수는 methods안에 정의한다-->
    <!--onClick = @click-->
    <button @click="myFunction">click</button>
    <!--changeData함수로간다, javascript의 userId값이 바뀐다, 그 바뀐 값이 바로 화면에 적용된다(양방향)-->
    <button @click="changeData">modify</button>
    <!--이 경우는 num1에 2를 넣고 num2에 3을 넣으면 23로 나온다-->
    <br>
      <input type="text" v-model="num1"/> +
      <input type="text" v-model="num2"/> =
      <span>{{ num1 + num2 }}</span>
    <!--이 경우는 num1에 2를 넣고 num2에 3을 넣으면 5로 나온다-->
    <!--v-model.number을 사용하면 자동으로 숫자로 바꿔준다-->
    <br>
      <input type="text" v-model.number="num3"/> +
      <input type="text" v-model.number="num4"/> =
      <span>{{ num3 + num4 }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      userId: 'kelly.go',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    myFunction () {
      console.log(this.userId)
    },
    changeData () {
      this.userId = 'Jeremy'
    }
  }
}
</script>

<style>

</style>
