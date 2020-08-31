//--- Vuex 와 Vue 를 import 한다.
import Vuex from 'vuex';
import Vue from 'vue';

//--- Vuex 를 사용하도록 설정한다.
Vue.use(Vuex);

//--- Vuex 관련 code 들이 들어갈 store 를 만들어
const store = new Vuex.Store({
    state : {
        
    }
});

export default store;