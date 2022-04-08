<template>
  <div>
      <MySchool></MySchool>
      <Student></Student>
  </div>
</template>

<script>
     //引入组件
     import MySchool from "./components/School.vue"
     import Student from "./components/Student.vue"
    export default {
        name:'App',
        components:{
            Student,
            MySchool
        },
    }
</script>

<style>

</style>