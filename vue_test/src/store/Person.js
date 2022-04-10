export default {
    namespaced: true,
    state:{
        persons:JSON.parse(localStorage.getItem('persons'))||[]
    },
    getters:{},
    actions:{
        addPerson(context,value){
            context.commit('addPerson',value)
        }
    },
    mutations:{
        addPerson(state,value){
            state.persons.push(value)
            localStorage.setItem('persons',JSON.stringify(state.persons))
        }
    }
}