//组件的结构
<template>
  <!-- 组件的结构 -->
  <div>
      <h2 calss="demo">{{ name }}</h2>
  </div>
</template>
<script>
//组件交互相关的代码
    export default {
        name:'Student',
        data() {
        return {
            name: '雷跃',
        };
    }
    }
</script>

<style>
/* 组件的样式 */
    .demo{
        background-color: #fffaaa;
    }
</style>