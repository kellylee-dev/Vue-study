<template>
  <div>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <option value="">==Select City==</option>
      <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">
        {{ dong.dongTitle }}
      </option>
    </select>
    <!-- <select name="" id="">
      <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in dongList.filter((dong) => dong.cityCode === selectedCity)">
        {{ dong.dongTitle }}
      </option>
    </select> -->
  </div>
</template>

<script>
// change 이벤트사용 @change 대신 v-on: 을사용하여도 된다.
// 이중셀렉트. 앞에꺼에 따라서 뒤에셀렛터가 달라짐
// 두번째 셀렉트문처럼 이벤트 없이도 가능(@change없이)/ 가독성은떨어짐/ 체인지이벤트를가지고 만드는게 가독성이 더 좋다
export default {
  data () {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: 'Seoul' },
        { cityCode: '051', title: 'Busan' },
        { cityCode: '054', title: 'Jeju' }
      ],
      dongList: [
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
      ]
    }
  },
  methods: {
    changeCity () {
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
    }
  }
}
</script>

<style>

</style>
