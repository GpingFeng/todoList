import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import todo from './modules/todo/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    todo: todo
  }
})
