<template>
        <div class="container">

            <Category title="游戏">
                <template scope="games">
                    <ul>
                        <li v-for="(item,index) in games.game" :key="index">{{item}}</li>
                    </ul> 
                </template> 
            </Category>

            <Category title="游戏">
                <template scope="games">
                    <ol>
                        <li v-for="(item,index) in games.game" :key="index">{{item}}</li>
                    </ol> 
                </template> 
            </Category>

            <Category title="游戏">
                <template scope="{game}">
                    <h4 v-for="(item,index) in game" :key="index">{{item}}</h4>
                </template>  
            </Category>

        </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category}
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