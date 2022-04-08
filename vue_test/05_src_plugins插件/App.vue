<template>
    <div>
        <Student ref="sch" name="雷跃" sex="男" :age="21"/>
        <button @click="showMsg">点击</button>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{Student},
        methods:{
        showCop(){
            // 获得组件的实例对象
            console.log(this.$refs)
        }
    }
    }
</script>

<style>

</style>