<template>
  <div class = "school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{addr}}</h2>
      <button @click="clickSend(name)">发送学校名称</button>
      <button @click="unbind">解绑</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return{
                name:'闽南师范大学',
                addr:'福建省漳州市县前直街36号'
            }
        },
        props:['getSchoolName'],
        methods:{
            // sendSchoolName(name){
            //     this.getSchoolName(name)
            // }
            clickSend(name){
                this.$emit('getSchoolName',name,this.addr,'万明艳','女')
                // this.$emit('click')
            },
            unbind(){
                this.$off('getSchoolName')            //解绑一个自定义事件
                // this.$off(['getSchoolName','demo'])//解绑多个自定义事件
                // this.$off()                        //解绑所有自定义事件
            }
            // 销毁当前组件的实例，销毁后所有该实例的自定义事件全部失效
        }
    }
</script>

<style>
    .school{
        background-color:skyblue;
        padding: 5px;
    }
</style>