<template>
    <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user,index) in users">
            <th scope="row">{{stt[index]}}</th>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td width="25%">
                <button class="btn btn-primary mr-2">Edit</button>
                <button class="btn btn-danger" @click="deleteProduct(user.id)">Delete</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import Modal from './Model';
    
    export default {
        data() {
            return {}
        },
        props: {
            users: {
                type: Array
            },
            stt:{
                required:true
            }
        },
        components: {
            Modal
        },
        updated(){
            console.log("updated!");
        },
        methods: {
            deleteProduct: function (id) {
                let index = this.users.findIndex(product => product.id === id);
                if (index > -1) {
                    this.users.splice(index, 1);
                }
                this.$emit('deleteProduct', this.users);
            }
        }
    }
</script>

<style scoped>

</style>
