<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现勾选功能。但不建议使用，因为其违反了Vue中props值不能修改的原则 -->
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTode(todo)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'Todo',
        props:['todo'],
        methods:{
            //todo勾选取反
            handleCheck(id){
                // console.log(id)
                // 通知App组件将对应的todo对象的done值取反
                this.$bus.$emit('checkTodo',id)
            },
            //删除所选的Todo
            deleteTode(todo){
                if(todo.done === false){
                    if(confirm('任务还没完成，你确定删除吗?')){
                        this.$bus.$emit('myDelete',todo.id)
                    }
                }
                else if(todo.done === true){
                    if(confirm('任务完成，确定删除!')){
                        this.$bus.$emit('myDelete',todo.id)
                    }
                }
                
            }
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
        height:36px;
        line-height:36px;
        padding:0 5px;
        border-bottom: 1px solid #ddd;
    }
    
    li label{
        float:left;
        cursor:pointer;
    }

    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top:-1px;
    }

    li button{
        float: right;
        display:none;
        margin-top:3px;
    }

    li:before{
        content:initial
    }

    li:last-child{
        border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display:block;
    }
</style>