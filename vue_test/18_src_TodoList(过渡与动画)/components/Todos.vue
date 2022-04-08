<template>
  <div>
      <ul class = "todo-main">
            <transition-group
                name="animate__animated animate__bounce"
                enter-active-class="animate__fadeInDown"
                leave-active-class="animate__fadeOutRight"
            >
            <Todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
          </transition-group>
     </ul>
  </div>
</template>

<script>
    import 'animate.css'
    import Todo from './Todo.vue'
    export default {
        name:'Todos',
        components:{Todo},
        props:['todos']
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