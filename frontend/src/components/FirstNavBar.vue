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
            <b-navbar-item class="app-name">
                <router-link to="/about">
                An image classifier based on fastai
                </router-link>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>



<script>
export default {
    name: 'FirstNavBar',

}
</script>

<style scoped>

a.navbar-item.app-name {
    color: #000;
    font-size: large;
    
}


a {
    color:black;
}

</style>