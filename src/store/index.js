import Vuex from 'vuex'
import Vue from 'vue'
import setting from './setting'
import banner from './banner'
import about from './about'
import project from './project'

if (!window.Vuex) {
    // 没有使用传统的方式引入Vuex
    Vue.use(Vuex);
}

export default new Vuex.Store({
    modules: {
        setting,
        banner,
        about,
        project
    },
    strict: true
})
