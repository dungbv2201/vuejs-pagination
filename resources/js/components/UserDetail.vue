<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Detail uer</h1>
                <p>Id: {{ user.id}}</p>
                <p>Name: {{user.name}}</p>
                <p>Email: {{user.email}}</p>
            </div>
            <div class="col-md-12 justify-content-sm-end">
                <router-link
                    tag="a"
                    to="/admin/users"
                    class="btn btn-success"
                >Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                id:this.$route.params.id,
                user:{}
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/users/'+this.id)
                .then(res=>{
                    this.user = res.data.user
                })
        }
    }
</script>

<style scoped>

</style>
