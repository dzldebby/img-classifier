<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo_purple.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-dropdown label="Predict from..." class="dropdown-name">
                <b-navbar-item><router-link to="/own">Your image</router-link></b-navbar-item>
                <b-navbar-item><router-link to="/random">Random image</router-link></b-navbar-item>
            </b-navbar-dropdown>
            <b-navbar-item><router-link to="/about">
                Info
            </router-link></b-navbar-item>
        </template>
    </b-navbar>
</template>



<script>
export default {
    name: 'NavBar',

}
</script>

<style scoped>

.navbar-item.has-dropdown.dropdown-name {
    font-size: large;
    /* color: #7957d5 !important; */
}


a.router-link-exact-active.is-active {
    font-weight: bold;
    
}

a.navbar-item {
    font-size: large;
}

a {
    color: black;
}

a.navbar-link {
    color: red;
    background-color: red;
}


</style>