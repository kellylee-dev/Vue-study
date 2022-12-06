<template>
  <div>
    <div>
      <select name="" id="">
        <option value=""></option>
        <!--for문사용하는 법이 v-for-->
        <!--v-for를 사용할때는 :key를 꼭 잡아줘야함. Key값(city.code)은 항상 유일해야한다.-->
        <!-- 화면상에 보여지는 부분은 문자열 바인딩으로 {{city.title}} 사용 -->
        <option :value="city.code" :key="city.code" v-for="city in cities">{{ city.title }}</option>
      </select>
    </div>
    <div>
      <table>
        <thead>
            <tr>
                <th>Product Number</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Qty</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
          <!--반복적으로 반복되는 tr에 v-for사용-->
          <!--drinkId가 유일한 값이기때문에 :key로 설정-->
          <!-- 유일한 키값이 없을때는 i로 사용할수도 있다 -->
          <!--<tr :key="i" v-for="(drink,i) in drinkList">-->
            <tr :key="drink.drinkId" v-for="drink in drinkList">
              <td>{{ drink.drinkId }}</td>
              <td>{{ drink.drinkName }}</td>
              <td>{{ drink.price }}</td>
              <!--주문 수량은 v-model사용-->
              <td><input type="number" name="" id="" v-model="drink.qty"></td>
              <td>{{ drink.price * drink.qty }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// for문사용 => key를 잡아줘야함
//         <option value=""></option> 이것을 추가하면 빈칸이 하나 생김
export default {
  data () {
    return {
      cities: [
        { title: 'seoul', code: '02' },
        { title: 'busan', code: '051' },
        { title: 'jeju', code: '054' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: 'coke',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: 'orangejuice',
          price: 800,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: 'milk',
          price: 700,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: 'coffee',
          price: 200,
          qty: 1
        }
      ]
    }
  }
}
</script>

<style>

</style>
