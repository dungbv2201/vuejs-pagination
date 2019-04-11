<template>
    <nav aria-label="...">
        <ul class="pagination justify-content-end">
            <li class="page-item" :class="{disabled: prevPageUrl === null}">
                <span v-if="prevPageUrl === null" class="page-link">Previous</span>
                <a v-else href="#" class="page-link" @click.prevent="handelClick(currentPage -1)">Previous</a>
            </li>
            <li v-for="page in totalPage" class="page-item" :class="{active : currentPage === page}">
                <span v-if="currentPage === page" class="page-link">
                    {{ page}}
                    <span class="sr-only">(current)</span>
                </span>
                <a class="page-link" href="#" v-else @click.prevent="handelClick(page)">{{ page}}</a>
            </li>
            <li class="page-item" :class="{disabled: nextPageUrl === null}">
                <span v-if="nextPageUrl === null" class="page-link">Next</span>
                <a v-else href="#" class="page-link" @click.prevent="handelClick(currentPage +1)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            totalPage: {
                required: true
            }
            , currentPage: {
                required: true
                
            },
            prevPageUrl: {
                required: true
            },
            nextPageUrl: {
                required: true
            }
        },
        methods: {
            handelClick: function (page) {
                history.pushState(null, '', '#page='+ page);
        
                console.log(window.history.length);
                console.log(window.location);
                this.$emit('updateData', page);
            }
            
        }
    }
</script>

<style scoped>

</style>
