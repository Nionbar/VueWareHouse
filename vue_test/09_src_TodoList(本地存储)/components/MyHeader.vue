<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入项目名称，按回车健结束" @keyup.enter="addTodo"/>
    </div>
</template>

<script>
    //引入nanoid(一个随机生成唯一编码的包)
    import {nanoid} from 'nanoid'
    export default {
        name:'MyHeader',
        props:['acceptTodo'],       
        methods: {
            addTodo(e){
                //校验数据
                if(!e.target.value.trim()) return
                //将用户的输入包装成一个todo对象
                const todoObj = {id:nanoid(),title:e.target.value,done:false}
                //通知App组件去添加一个todo对象
                this.acceptTodo(todoObj)
                //清空输入
                e.target.value=''
            }
        }
    }
</script>

<style scoped>

    .todo-header input {
        width:560px;
        height:28px;
        font-size:14px;
        border:1px solid #ccc;
        border-radius:4px;
        padding:4px 7px;
    }

    .todo-header input:focus{
        outline:none;
        border-color: rgba(82,168,236,0.8);
        box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(38, 114, 172, 0.6);
    }
</style>