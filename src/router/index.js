import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// path 는 App.vue에서 router-link to 와 매칭되어야 한다.
// name은 중복되서는 안된다
// 이곳에 100개 1000개 쭉 단다
const routes = [
  {
    // 방법 1. import해서 사용하는방법 chucnk-vendors.js & app.js / 모든 코드는 app.js에 다 들어간다
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 방법 2. about.js는 app.js에 의해 가져오게됨
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // webpackChucnkName을 about이 아니라 다른걸로 지정하면 about.js가 추가되는것이 아니라 새로운이름.js 라고 생성된다.
    // initiator is app.js
    // webpackPrefetch가 true => 처음부터 받아옴 => status 200, size: prefetch cache로 바뀜 => 미리 받아옴(사용자가 들어가지않으면 필요없음/사용하지 않는 리소스를 캐시에저장하는것)
    // webpackPrefetch 가 false면 사용자가 클릭하는 순간 서버에서 받아옴
    // route설정에 따라 전체 성능이 달라지기때문에 고려해봐야함
    component: () => import(/* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChuncName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChuncName: "event", webpackPrefetch:true */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChuncName: "event", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChuncName: "event", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
