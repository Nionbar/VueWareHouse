<template>
    <div id = "root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :acceptTodo="acceptTodo"/>
                <Todos :todos="todos" :checkTodo="checkTodo" :myDelete="myDelete"/>
                <MyFooter :todos="todos" :checkedAllTodo="checkedAllTodo" :clearFinishedTodo="clearFinishedTodo"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter.vue'
    import Todos from './components/Todos.vue'
    export default {
        name:'App',
        components:{MyHeader, MyFooter, Todos},
        data(){
            return{
                todos:[
                    {id:'001',title:'吃饭',done:true},
                    {id:'002',title:'睡觉',done:false},
                    {id:'003',title:'打豆豆',done:false},
                ]
            }
        },
        methods:{
            //添加一个todo
            acceptTodo(todo){
                this.todos.unshift(todo)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if(todo.id=== id){
                        todo.done = !todo.done
                    }
                })
            },
            //删除所选的Todo
            myDelete(id){
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            //全选or取消全选
            checkedAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.done = done
                })
            },
            //清除所有已经完成了的Todo
            clearFinishedTodo(){
                this.todos = this.todos.filter((todo)=>!todo.done)
            }
        }
    }
</script>

<style>
    body{
        background-color: #fff;
    }

    .btn{
        display: inline-block;
        padding:4px 12px;
        margin-bottom:0;
        font-size:14px;
        line-height:20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger{
        color:#fff;
        background-color: #da4f49;
        border: 1px solid #bd362f
    }

    .btn-danger:hover{
        color:#fff;
        background:#bd362f
    }

    .btn:focus{
        outline:none;
    }

    .todo-container{
        width:600px;
        margin:0 auto;
    }

    .todo-container .todo-wrap {
        border: 1px solid #ddd;
        padding:10px;
        border-radius:5px;
    }
</style>