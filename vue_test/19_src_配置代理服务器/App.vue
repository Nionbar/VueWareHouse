<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCar">获取车辆信息 </button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods:{
            getStudents(){
                axios.get('http://localhost:8080/apiStudent/students').then(
                    response => {
                        console.log('请求成功了',response.data)
                    },
                    error => {
                        console.log('请求成功了',error.message)
                    }
                )
            },
            getCar(){
                axios.get('http://localhost:8080/apiCar/cars').then(
                    response => {
                        console.log('请求成功了',response.data)
                    },
                    error => {
                        console.log('请求成功了',error.message)
                    }
                )
            }
        }
    }
</script>

<style>
   
</style>