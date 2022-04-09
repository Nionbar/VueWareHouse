<template>
  <div class="categroy">
      <h3>{{title}}</h3>
        <slot name="center">我是默认值，当用户没有指定时我会出现！</slot>       
        <slot name="footer"></slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title']
    }
</script>

<style>
    .categroy {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color:orange;
    }   
</style>