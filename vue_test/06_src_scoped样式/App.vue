<template>
    <div>
        <School ref="sch" name="漳州师范大学" addr="漳州"/>
        <student/>
    </div>
</template>

<script>

    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{School,Student},
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