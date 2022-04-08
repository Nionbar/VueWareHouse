<template>
  <div class = "student">
      <h2>学生姓名:{{name}}</h2>
      <h2>学生性别:{{sex}}</h2>
      <button @click="sendStudentName(name)">发送学习姓名</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return{
                name:'万明艳',
                sex:'女'
            }
        },
        methods:{
            sendStudentName(name){
                //触发Student组件实例身上的nbrTp时间
                this.$emit('getStudentName',name)
            }
        }
    }
</script>

<style>
    .student{
        background-color:pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>