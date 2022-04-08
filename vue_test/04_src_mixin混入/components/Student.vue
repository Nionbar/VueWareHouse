<template>
  <div>
      <!-- reference:查询 -->
      <h2 >姓名:{{myName}}</h2>
      <h2>性别:{{mySex}}</h2>
      <h2>年龄:{{myAge}}</h2>
      <button @click="showMsg">showMsg</button>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name:'School',
    data(){
        return {
            myName:this.name,
            mySex:this.sex,
            myAge:this.age
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
            // default:'张-三'//默认值
        },
        sex:{
            type:String,
            required:true,
            default:'男'
        },
        age:{
            type:Number,
            default:18
        },
    },
    mixins:[mixin]

}
</script>