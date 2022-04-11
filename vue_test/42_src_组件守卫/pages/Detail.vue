<template>
    <div>
        <h3>{{id}}</h3>
        <h3>消息内容：{{title}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Detail',
        props:['id','title'],
        mounted(){
            console.log(this)
        }
    }
</script>

<style>

</style>