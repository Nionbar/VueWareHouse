<template>
    <div>
        <Banner></Banner>
        <div class="row">
            <Navbar/>
            <Main/>           
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import Navbar from './components/Navbar'
    import Main from './components/Main'
    export default {
        name:'App',
        mounted(){
            console.log(this);
        },
        components:{Banner,Navbar,Main}
    }
</script>
