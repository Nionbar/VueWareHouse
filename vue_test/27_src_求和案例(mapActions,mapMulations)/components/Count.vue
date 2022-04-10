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
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name:'Count',
        data(){
            return {
                n:1,
            }
        },
        methods: {           
            // 程序员手写方法
            // increment(){
            //     this.$store.dispatch('increment',this.n)
            // },
            // encrement(){
            //     this.$store.dispatch('encrement',this.n)
            // },
            // incrementOdd(){
            //     this.$store.dispatch('incrementOdd',this.n)
            // },
            // incrementWait(){
            //     this.$store.dispatch('incrementWait',this.n)
            // }
            // *****************************************************
            // mapActions自动生成的方法，方法体内调用了(dispatch)
            // 对象写法
            // ...mapActions({
            //     increment:'increment',
            //     encrement:'encrement',
            //     incrementOdd:'incrementOdd',
            //     incrementWait:'incrementWait'
            // }),
            // })
            
            // 数组写法
            ...mapActions([
                'incrementOdd',
                'incrementWait'
            ]),
            // **********************************************************
            // mapMutations自动生成的方法，方法体内调用了(commit)
            // 对象写法
            // ...mapMutations({
            //     increment:'increment',
            //     encrement:'encrement'
            // }),
            // 数组写法
            ...mapMutations([
                'increment',
                'encrement'
            ])

        },
        computed:{

            // 对象写法 
            // ...mapState({sum:'sum'}),
            // ...mapGetters({bigSum:'bigSum'})

            // *************************************************

            // 数组写法
            // 使用mapState
            ...mapState(['sum']),
            // 使用mapGetters
            ...mapGetters(['bigSum']),

        },

    }
</script>

<style scoped>
     button{
         margin-left: 3px;
     }
</style>