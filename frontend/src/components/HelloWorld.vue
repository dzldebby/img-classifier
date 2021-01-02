<template>
  <div>
    <FirstNavBar></FirstNavBar>
        <div class="buttons">
            <b-button type="is-primary is-large" class="firstbutton"><router-link to="/own">Predict from your image </router-link></b-button>
            <b-button type="is-primary is-light is-large" class="special"><router-link to="/random">Predict from random image</router-link></b-button>
        </div>
  </div>
</template>

<script>


import FirstNavBar from './FirstNavBar.vue'


export default {
  name: 'HelloWorld',
  components: {
    FirstNavBar
  },
  props: {
    msg: String
  },
  data (){
    return {
      result: null,
      url: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}


button.button.special.is-primary.is-large a {
  color: #7957d5;
}

button.button.firstbutton.is-primary.is-large {
  padding-right: 40px;
  padding-left:35px;
}


button.button.special.is-primary.is-large.is-inverted  {
  border-color: #7957d5;
  
}

a.navbar-link {
  display: none;
}

/* button {
  width:100%;
} */

.notification a:not(.button):not(.dropdown-item){
  text-decoration: none;
}

.buttons {
  padding-top:100px;
  display: flex;
  justify-content: center !important;
}

</style>
