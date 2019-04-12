<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link
                    tag="li"
                    active-class="active"
                    class="nav-item"
                    :to="{name:'users.index'}"
                >
                    <a class="nav-link">user</a>
                </router-link>
                <router-link
                    tag="li"
                    active-class="active"
                    class="nav-item"
                    :to="{name:'demo'}"
                >
                    <a class="nav-link">Demo</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>

</style>
