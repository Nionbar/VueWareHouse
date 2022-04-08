<template>
  <div>
      <ul class = "todo-main">
      <Todo v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :checkTodo="checkTodo" :myDelete="myDelete"/>
     </ul>
  </div>
</template>

<script>
    import Todo from './Todo.vue'
    export default {
        name:'Todos',
        components:{Todo},
        props:['todos','checkTodo','myDelete'],
        data(){return{
            todoObj:this.todos
        }}
    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius:2px;
        padding:0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border-radius: 2px;
        border: 1px solid #ddd;
        padding-left: 5px;
        margin-top:10px;
    }
</style>