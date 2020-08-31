import Vue from 'vue'
import App from './App.vue'
//--- store 를 가져온다.
import store from './store';

Vue.config.productionTip = false

new Vue({
  //--- Vue Instance 를 생성하는 곳에 넣어준다.
  //--- store 를 넣어주면 모든 Component 에서 이 store 에 접근이 가능해진다.
  store,
  render: h => h(App),
}).$mount('#app')
