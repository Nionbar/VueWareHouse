<template>
  <div class = "school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{addr}}</h2>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data(){
            return{
                name:'闽南师范大学',
                addr:'福建省漳州市县前直街36号'
            }
        },
        methods:{
            getStudentName(studentName){
                console.log('学校名称：',this.name)
                console.log('学生姓名：',studentName)
            }
        },
        mounted(){
            pubsub.subscribe('hello',function(msgName,data){
                console.log('有人发布了hello消息',msgName,data)
            })
        }
    }
</script>

<style>
    .school{
        background-color:skyblue;
        padding: 5px;
    }
</style>