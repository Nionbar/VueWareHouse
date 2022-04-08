<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="searchMsg"/>&nbsp;<button @click="searchUserName">Search</button>
        </div>
    </section>
</template>

<script>
    export default {
        name:'Search',
        data(){
            return {
                searchMsg:''
            }
        },
        methods:{
            searchUserName(){
                console.log(this)
                this.$bus.$emit('updataUserList',{isFirst:false,isLoading:true,errorMsg:'',userList:[]})
                this.$http.get(`https://api.github.com/search/users?q=${this.searchMsg}`).then(
                    response => {
                        this.$bus.$emit('updataUserList',{isLoading:false,errorMsg:'',userList:response.data.items})
                    },
                    error => {
                        this.$bus.$emit('updataUserList',{isLoading:false,errorMsg:error.message,userList:[]})
                    }
                )
            }
        }
    }
</script>

<style>

</style>