export default {

    namespaced:true,

    // state:{
    //     sum:sessionStorage.getItem('sum')||0
    // },

    state:{
        sum:sessionStorage.getItem('sum')||0
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        },
        isOddNumber(state){
            return state.sum % 2
        }
    },

    actions:{
        increment(context,value){
            context.commit('INCREMENT',value)
        },
        encrement(context,value){
            context.commit('ENCREMENT',value)
        },
        incrementOdd(context,value){
            if(context.commit('INCREMENT',value)){
                context.commit('INCREMENTODD',value)
            }else{
                alert('偶数不能加')
            }
        },
        incrementWait(context,value){
            setTimeout(()=>{
                context.commit('INCREMENTWAIT',value)
            },500)
        }
    },

    mutations:{
        INCREMENT(state,value){
            state.sum += value
        },
        ENCREMENT(state,value){
            state.sum -= value               
        }
    }
}