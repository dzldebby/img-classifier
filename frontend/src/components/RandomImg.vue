<template>
  <div>
    <NavBar></NavBar>
    <h1 class="title">Predict from...</h1>
    <div class="columns">
      <!--randomly generated image-->
      <div class="column">
        <h2 class="subtitle">...randomly generated image</h2>
        <button v-on:click="createRandom">Predict</button>
      </div>      
    </div>
    <div class="columns">
      <div class="column">
        <h1 class="title">Your image:</h1>
        <img :src="url" height="200" id="img2">
        <img id="img1" src="" height="200">
      </div>
      <div class="column">
        <h1 class="title">Prediction: <br><br> {{computePrediction}}</h1>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'; 
import NavBar from './NavBar.vue'


export default {
  name: 'HelloWorld',
  components: {
    NavBar
  },
  props: {
    msg: String
  },
  data (){
    return {
      result: null,
      url: null,
    }
  },
  computed: {
    computePrediction(){
      let result1 = this.result;
      if (result1 != null){
        const wordRegex = /\w+/g;
        const prediction = wordRegex.exec(result1);
        const prediction1 = prediction[0];
        const finalPred = "It's probably a " + prediction1
        return (finalPred) || '';
      }
      return null
    },

  },

  methods: {
    createRandom(){
      axios.get('https://cors-anywhere.herokuapp.com/http://img-classify-backend.herokuapp.com/randoms')
      .then(response =>{
        this.result = response.data.result
        this.url = response.data.url
      })
      .catch(error=> {
        console.log(error)
      });
    },



    onFileUpload(event){
      this.file = event.target.files[0]
      const preview = document.getElementById("img1");
      preview.src="";
      const preview2 = document.getElementById("img2");
      preview2.src="";

    },

    previewFile(){
      const preview = document.getElementById("img1");
      const file1 = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function(){
        preview.src = reader.result;
      },false);

      if (file1){
        reader.readAsDataURL(file1);
      }
    },


    onSubmit(){
      this.previewFile();
      const formData = new FormData()
      console.log(this.file);
      formData.append("file",this.file)
      axios.post('http://127.0.0.1:5000/after', formData,{
      }).then((res) =>{
        console.log(res)
      })
    },

    handler:function(event){
      this.previewFile();
      this.onFileUpload(event);
    },

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
</style>
