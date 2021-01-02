<template>
  <div>
    <NavBar></NavBar>
    <h1 class="title">How it works</h1>
        <p>Either upload your own image, or randomly generate an image from Unsplash. <br>The model then makes an prediction from one of the following categories:</p> 

        <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
            v-model="isOpen">
            <div
                slot="trigger"
                class="panel-heading"
                role="button"
                aria-controls="contentIdForA11y2">
                <strong><i>List of Categories</i></strong>
            </div>
            <div class="panel-block">
                Airplane, Ambulance, Animal, Artist, Aurora, Baby, Beach, Bear, Bedroom, Bicycle, Bird, Boats, Book, Bridge, Building, Bus, Cars, Castle, Cat, City, Clouds, College, Column, Concert, Couple, Crops, Dance, Dawn, Deer, Desert, Dessert, Doctor, Dog, Dolphins, Field, Fire, Floor, Food, Golf, Graffiti, Grandfather, Grandmother, Grass, Hair, Hand, Horse, Hospital, House, Human, Insect, Kid, Library, Lights, Man, Moon, Mountain, Music, Nature, Neon, Nurse, Ocean, Painting, Palm, Party, Person, Phone, Plant, Rain, Rainforest, Restaurant, River, Robot, Rocks, Roses, Shirt, Shop, Sign, Sky, Skyscraper, Snow, Soccer, Sports, Stadium, Staircase, Stars, Storm, Street, Sun, Sunrise, Temple, Tree, Truck, Vegetable, Water, Waves, Weed, Windows, Woman, Wood
            </div>
        </b-collapse>

        

    <h1 class="title">About this app</h1>
        <p>This is an image classifer app trained using the fast.ai library. The code was adapted from <a href="https://github.com/ramgendeploy/Unsplash100Labels">Ramiro's Unsplash 100 Labels</a>.</p>


  </div>
</template>

<script>

import NavBar from './NavBar.vue'


export default {
  name: 'HelloWorld',
  components: {
    NavBar
  },
  data(){
    return{
      isOpen: false
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
  color: #42b983;
}

h1 {
  padding-top: 30px;
}

.collapse.panel {
  max-width:25%;
  margin: auto;
}

.panel {
  box-shadow: none;
  -webkit-box-shadow: none;
}


.panel-heading {
  font-size:1em;
  font-weight:400;
  line-height:1.5;
  background-color:
}


</style>
