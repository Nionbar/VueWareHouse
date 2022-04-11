<template>
    <div>
        <h3>{{$route.query.id}}</h3>
        <h3>消息内容：{{$route.title}}</h3>
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