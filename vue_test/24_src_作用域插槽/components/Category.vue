<template>
  <div class="categroy">
      <h3>{{title}}</h3>
      <slot :game="games">未加载</slot>    
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data(){
            return {
                games:['CSGO','英雄联盟','地下城与勇士','弹弹堂'],
            }
        }
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