<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row justify-content-center ju">
                    <div class="con-sm-5 mt-5 mb-5">
                    
                    </div>
                    <div class="col-sm-7">
                        <h1 class="text-center mt-5 mb-5">{{ title }}</h1>
                    </div>
                </div>
                <ListComponent :users="users" v-on:deleteProduct="deletePro($event)" :stt="index"></ListComponent>
                <paginate
                    :totalPage="pagination.totalPage"
                    :currentPage="pagination.currentPage"
                    :prevPageUrl="pagination.prevPageUrl"
                    :nextPageUrl="pagination.nextPageUrl"
                    :basePath ="pagination.basePath"
                    v-on:updateData="getData($event)"
                >
                
                </paginate>
                <Modal>
                    Lorem ipsum dolor sit amet.
                    <template #button>
                        <button class="btn btn-danger">Delete</button>
                    </template>
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
    import ListComponent from "./ListComponent"
    import Modal from "./Model"
    import axios from 'axios';
    import paginate from './paginate'
    
    function Paginate(totalPage, currentPage, prevPageUrl, nextPageUrl) {
        this.totalPage = totalPage;
        this.currentPage = currentPage;
        this.prevPageUrl = prevPageUrl;
        this.nextPageUrl = nextPageUrl;
    }
    
    export default {
        data() {
            return {
                title: "Danh sách users",
                users: [],
                pagination: {},
                index: []
            }
        },
        components: {
            Modal,
            ListComponent,
            paginate
            
        },
        mounted() {
            this.getData();
        },
        methods: {
            deletePro: function (deleteProduct) {
                this.products = deleteProduct;
            },
            getData(page = 1) {
                axios.get('http://127.0.0.1:8000/users?page=' + page)
                    .then((response) => {
                        let users = response.data.users;
                        this.users = users.data;
                        this.index = [];
                        for (var i = users.from; i <= users.to; i++) {
                            this.index.push(i);
                        }
                        this.pagination = new
                        Paginate(users.last_page, users.current_page, users.prev_page_url,
                            users.next_page_url);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .then(function () {
                    
                    });
            }
        }
    }
</script>
<style scoped>
    h1 {
        color: mediumpurple;
    }
</style>
