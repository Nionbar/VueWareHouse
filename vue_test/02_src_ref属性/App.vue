<template>
    <div>
        <School ref="sch"/>
        <button @click="showCop">点击</button>
    </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{School},
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