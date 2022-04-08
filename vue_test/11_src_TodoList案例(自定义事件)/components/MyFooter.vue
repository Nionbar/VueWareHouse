<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="allFinished" @click="checkAll"/> -->
            <input type="checkbox" v-model="allFinished"/>
        </label>
        <span>
            <span>{{doneTotal}}</span>/{{total}} 
        </span>
        <button class="btn btn-danger" @click="deleteFinished">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos'],
        computed:{
            //普通写法
            // doneTotal(){
            //     let i = 0;
            //     this.todos.forEach((todo)=>{
            //         if(todo.done) i++
            //     })
            //     return i
            // }

            //高端写法
            // doneTotal(){
            //     return this.todos.reduce((pre,current)=>{
            //         return pre + (current.done ? 1 : 0)
            //     },0)
            // }

            //高端写法（简写）
            doneTotal(){
                return this.todos.reduce((pre,current)=>pre + (current.done ? 1 : 0),0)
            },

            total(){
                return this.todos.length
            },
            // 简写（简写的计算属性不能修改）
            // allFinished(){
            //     return this.doneTotal===this.total && this.total>0
            // }

            // 完整写法
            allFinished:{
                get(){
                    return this.doneTotal===this.total && this.total>0
                },
                set(value){
                    this.$emit('checkedAllTodo', value)
                }
            }
        
        },
        methods: {
            // checkAll(e){
            //     this.checkedAllTodo(e.target.checked)
            // }

            deleteFinished(){
                this.$emit('clearDoneTodo')
            }
        }
 }
</script>

<style scoped>
    .todo-footer {
        height:40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top:5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input{
        position: relative;
        top:-1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float:right;
        margin-top:5px;
    }
</style>