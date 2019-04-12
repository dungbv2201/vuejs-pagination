<template>
   <div>
       <HeaderApp></HeaderApp>
       <router-view></router-view>
   </div>
</template>

<script>
    import HeaderApp from './Header'
    export default {
        components:{
            HeaderApp
        }
    }
</script>

<style scoped>

</style>
