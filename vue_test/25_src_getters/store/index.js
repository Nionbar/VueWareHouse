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
        // 使用时要加上this 如果不加this则表示想输出的是函数体  
        // console.log(this.getters.isOddNumber)
        // console.log(getters.isOddNumber)
        state.sum += value
    },
    incrementWait(state,value){
        state.sum += value   
    }
}

// 准备state：用于存储数据
const state = {
    sum:0
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

    