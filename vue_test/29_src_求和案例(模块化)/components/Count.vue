<template>
  <div>
      <h1>当前的和为：{{sum}}</h1>
      <h1>当前的和乘10为：{{bigSum}}</h1>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="encrement(n)">-</button>
      <button @click="incrementOdd(n)">当和为奇数时加</button>
      <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1,
            }
        },
        computed:{
            ...mapState('Count',['sum']),
            ...mapGetters('Count',['bigSum']),
        },
        methods:{
            ...mapActions('Count',['increment','encrement','incrementOdd','incrementWait']),
        },
        watch:{
            sum:{
                handler(Val){
                    sessionStorage.setItem('sum',Val)
                },
                deep:true
            }   
        }

    }
</script>

<style scoped>
     button{
         margin-left: 3px;
     }
</style>