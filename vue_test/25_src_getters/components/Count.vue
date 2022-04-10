<template>
  <div>
      <h1>当前的和为：{{$store.state.sum}}</h1>
      <h1>当前的和乘10为：{{$store.getters.bigSum}}</h1>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="encrement">-</button>
      <button @click="incrementOdd">当和为奇数时加</button>
      <button @click="incrementWait">等一等再加</button>
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
        methods: {           
            increment(){
                this.$store.dispatch('increment',this.n)
            },
            encrement(){
                this.$store.dispatch('encrement',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('incrementOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('incrementWait',this.n)
            }
        }
    }
</script>

<style scoped>
     button{
         margin-left: 3px;
     }
</style>