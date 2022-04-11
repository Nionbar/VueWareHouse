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
            console.log('News active');
        },
        deactivated(){
            console.log('News deactive');
        }
    }   
</script>

<style>

</style>