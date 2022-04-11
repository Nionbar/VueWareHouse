<template>
    <div>
        <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 字符串写法 -->
            <!-- <router-link :to="`/home/message/detail?id=${m.id}&tittle=${m.tittle}`">{{m.title}}</router-link> -->

            <!-- 对象写法 -->
            <router-link replace :to="{
                name:'detail',
                query:{
                    id:m.id,
                    title:m.title  
                }
            }">{{m.title}}</router-link>
        </li>
    </ul>
    <hr>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                messageList:[
                    {id:"001",title:'message001'},
                    {id:"002",title:'message002'},
                    {id:"003",title:'message003'},
                ]
            }
        }
    }
</script>

<style>

</style>