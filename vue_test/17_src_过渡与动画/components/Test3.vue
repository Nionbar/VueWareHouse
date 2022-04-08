<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounce"
        leave-active-class="animate__backOutDown"
    >
          <h1 v-show="isShow" key="1">你好啊</h1>
          <h1 v-show="isShow" key="2">集美大学</h1>
      </transition-group>
  </div>
</template>

<script>
    import 'animate.css'
    export default {
        name:'Test',
        data(){
            return{
                isShow:true
            }
        },
        mounted(){
            console.log(this.isShow)
        }
    }
</script>

<style scoped>
    h1{
        background-color:orange;
    }

</style>