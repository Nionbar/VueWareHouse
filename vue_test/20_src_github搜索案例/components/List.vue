<template>
    <div class="row">

        <!-- 欢迎页面 -->
        <h1 v-show="info.isFirst">欢迎使用！</h1>

        <!-- 加载页面 -->
        <h1 v-show="info.isLoading">加载中......</h1>

        <!-- 用户列表 -->
        <div class="card" v-show="info.userList" v-for="user in info.userList" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>

        <!-- 请求出错页面 -->
        <h1 v-show="info.errorMsg">{{info.errorMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name:'List',
        data(){
            return {
                info:{
                    isFirst:true,
                    isLoading:false,
                    errorMsg:'',
                    userList:[]
                }
            }
        },
        methods:{
            updataUserList(userObj){
                this.info = {...this.info,...userObj}
            }
        },
        mounted(){
            this.$bus.$on('updataUserList',this.updataUserList)
        }
    }
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
    }

    .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
    }

    .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
    }

    .card-text {
    font-size: 85%;
    }
</style>