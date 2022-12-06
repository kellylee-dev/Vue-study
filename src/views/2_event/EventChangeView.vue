<template>
  <div>
    <!--select생성: 첫번째 select에 따라서 두번째 select가 바뀌는 경우(이중셀렉트)-->
   
    <!--첫번째 select-->
    <!--select한 값이 변경될때마다 changeCity호출-->
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <!--default값-->
      <option value="">==Select City==</option>
      <!--v-for를 사용해서 cityList출력/ cityCode값이 unique한 값이므로 key로 잡는다-->
      <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>

    <!--두번째 select-->
    <select name="" id="">
      <!--v-for로 selectedDongList출력-->
      <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">
        {{ dong.dongTitle }}
      </option>
    </select>

    <!--두번째 셀렉트문처럼 이벤트 없이도 가능(@change없이)/가독성은떨어짐/체인지이벤트를 사용하는방법이 가독성이 더 좋다
    <select name="" id="">
      <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in dongList.filter((dong) => dong.cityCode === selectedCity)">
        {{ dong.dongTitle }}
      </option>
    </select> -->
  </div>
</template>

<script>
// change는 select, input type radio, input type checkbox에서 많이 사용됨
// change 이벤트사용시 @change 대신 v-on: 을사용하여도 된다.
export default {
  data () {
    return {
      selectedCity: '',
      cityList: [ //배열로 선언
        { cityCode: '02', title: 'Seoul' },
        { cityCode: '051', title: 'Busan' },
        { cityCode: '054', title: 'Jeju' }
      ],
      dongList: [ //배열로 선언
        { cityCode: '02', dongCode: '1', dongTitle: 'Seoul Dong1' },
        { cityCode: '02', dongCode: '2', dongTitle: 'Seoul Dong2' },
        { cityCode: '02', dongCode: '3', dongTitle: 'Seoul Dong3' },
        { cityCode: '02', dongCode: '4', dongTitle: 'Seoul Dong4' },
        { cityCode: '051', dongCode: '1', dongTitle: 'Busan Dong1' },
        { cityCode: '051', dongCode: '2', dongTitle: 'Busan Dong2' },
        { cityCode: '051', dongCode: '3', dongTitle: 'Busan Dong3' },
        { cityCode: '054', dongCode: '1', dongTitle: 'Jeju Dong1' },
        { cityCode: '054', dongCode: '2', dongTitle: 'Jeju Dong2' },
        { cityCode: '054', dongCode: '3', dongTitle: 'Jeju Dong3' },
        { cityCode: '054', dongCode: '4', dongTitle: 'Jeju Dong4' },
        { cityCode: '054', dongCode: '5', dongTitle: 'Jeju Dong5' }
      ],
      selectedDongList:[]
    }
  },
  methods: {
    changeCity () {
      // dong의 cityCode가 사용자가 select한 값이 같은것을 filter해서 출력
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
    }
  }
}
</script>

<style>

</style>
