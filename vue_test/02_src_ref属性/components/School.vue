<template>
  <div>
      <!-- reference:查询 -->
      <h2 ref="schName">学校名称:{{name}}</h2>
      <!-- <button @click="showDom">点击</button> -->
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'集美大学',
            address:'厦门市集美区'
        }
    },
}
</script>