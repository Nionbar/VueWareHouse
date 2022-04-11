<template>
    <ul>
        <li>news001</li><input type="text"/>
        <li>news001</li><input type="text"/>
        <li>news001</li><input type="text"/>
    </ul>
</template>

<script>
    export default {
        name:'News',
        activated(){
            console.log('News被激活了！')
        },
        deactivated(){
            console.log('News失活了！')
        }
    }
</script>

<style>

</style>