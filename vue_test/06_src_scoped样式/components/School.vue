<template>
  <div class="demo">
      <!-- reference:查询 -->
      <h2>学校名称:{{schoolName}}</h2>
      <h2>地址:{{schoolAddress}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            schoolName:this.name,
            schoolAddress:this.addr,
        }
    },
    // props:['name','sex','age']//简单声明接收

    //接收的同时进行类型判断
    // props:{
    //     name:string,
    //     age:number,
    //     sex:string
    // }

    props:{ 
        name:{
            type:String,
            required:true,//此参数是否是必要的
        },
        addr:{
            type:String,
            required:true,
        },
    }
}
</script>

<style scoped>
    .demo {
        background-color:rgb(33, 137, 235)
    }
</style>