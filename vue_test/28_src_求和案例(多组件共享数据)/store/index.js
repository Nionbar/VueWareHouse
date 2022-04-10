// 该文件用于创建Vuex中最核心的store对象，并且将其作为参数传递给Vue的构造函数。

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)




// 准备actions：用于响应组件中的动作
const actions = {
    increment(context,value){
        // console.log(context.getters.isOddNumber)
        context.commit('increment',value)
    },
    encrement(context,value){
        context.commit('encrement',value)
    },
    incrementOdd(context,value){
        if(context.getters.isOddNumber)
        context.commit('incrementOdd',value)
    },
    incrementWait(context,value){
        setTimeout(()=>{
            context.commit('incrementWait',value)
        },500)  
    },
    addPerson(context,value){
        context.commit('addPerson',value)
    }
}

// 准备mutations：用于操作数据（state）
const mutations = {
    increment(state,value){
        state.sum += value
    },
    encrement(state,value){
        state.sum -= value        
    },
    incrementOdd(state,value){  
        state.sum += value
    },
    incrementWait(state,value){
        state.sum += value   
    },
    addPerson(state,value){
        state.persons.push(value)             
    }
}
// 准备state：用于存储数据
const state = {
    sum:sessionStorage.getItem('sum')||0,
    persons:JSON.parse(localStorage.getItem('persons'))||[]
}

// 计算属性不能跨组件复用
// 所以得使用getters

const getters = {
    isOddNumber(state){
        return state.sum % 2
    },
    bigSum(state){
        return state.sum * 10
    }
}

// 创建store实例
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

