<template>
        <div class="container">
            <Category title="美食">
                <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="一个默认图片">
            </Category>

            <Category title="游戏">
                <ul>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ul>
            </Category>

            <Category title="电影">
                <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            </Category>
        </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
        data(){
            return {
                foods:['麻辣烫','海鲜','牛肚','火锅'],
                games:['CSGO','英雄联盟','地下城与勇士','弹弹堂'],
                files:['《霸王别姬》','《阿甘正传》','《你好，旧时光》','《火影忍者》']
            }
        }
    }
</script>

<style>
    .container{
        display:flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>