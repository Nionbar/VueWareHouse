// 该文件用于创建Vuex中最核心的store对象，并且将其作为参数传递给Vue的构造函数。

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

import Person from './Person'
import Count from './Count'

// 创建store实例
export default new Vuex.Store({
    modules:{
        Person,
        Count
    }
})

