<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name"/>
        <button @click='addPerson(personObj)'>添加</button>
        <ul>
            <li v-for="p in persons" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState,mapActions} from 'vuex'
    export default {
        name:'Person',
        data(){
            return{
                name:''
            }
        },

        computed:{
            personObj(){
                return {id:nanoid(),name:this.name}
            },
            ...mapState('Person',['persons']),
        },
        watch:{
            persons:{
                handler(val){
                    localStorage.setItem('persons',JSON.stringify(val))
                },
                deep:true
            }
        },
        methods: {
            ...mapActions('Person',['addPerson'])
        }
    }
</script>

<style>

</style>