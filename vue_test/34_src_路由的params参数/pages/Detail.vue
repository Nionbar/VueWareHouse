<template>
    <div>
        <h3>{{$route.params.id}}</h3>
        <h3>消息内容：{{$route.params.title}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        mounted(){
            console.log(this)
        }
    }
</script>

<style>

</style>