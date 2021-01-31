<template>
  <div>
    <NavBar></NavBar>
    <h1 class="title">Predict from your own image</h1>
    <div class="columns">
      <!--upload image-->
      <div class="column">
        <h2 class="subtitle">Step 1: Choose your image and upload it</h2>
          <form @submit.prevent="onSubmit" enctype="multipart/form-data" method='POST'>
            <div class ="column"> 
              <input id="file-input" size="is-medium" type="file" name='file' @change="onFileUpload">
            </div>
          </form>
      </div>
      <div class="column">
          <h2 class="subtitle">Step 2:</h2>
        <b-button size="is-medium" type="is-primary is-light" v-on:click="onSubmit">Upload File</b-button>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h1 class="title">Your image:</h1>

        <img :src="url" height="200" id="img2">
        <img id="img1" src="" height="200">
      </div>
      <div class="column">
         <h2 class="subtitle">Step 3:</h2>
         <b-button size="is-medium" type="is-primary" v-on:click="createUserImage">Predict!</b-button>
        <h1 class="predtitle"> <br><br> {{computePrediction}}</h1>
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



    createUserImage(){
      axios.get('https://cors-anywhere.herokuapp.com/http://img-classify-backend.herokuapp.com/local')
      .then(response =>{
        this.result = response.data.result
        this.url = response.data.url
      })
      .catch(error=> {
        console.log(error)
      });
    },


    // onFileUpload(event){
    //   this.file = event.target.files[0]
    //   const preview = document.getElementById("img1");
    //   preview.src="";
    //   const preview2 = document.getElementById("img2");
    //   preview2.src="";
    //   const abc = document.getElementById('file-input');
    // },

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
      axios.post('https://cors-anywhere.herokuapp.com/http://img-classify-backend.herokuapp.com/after', formData,{
      }).then((res) =>{
        console.log(res)
      })
    },


  }
}
</script>

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


h1.title {
  margin-top:30px !important;
}

.column {
  padding:1.5rem;
}


h1.predtitle {
  font-size:2rem;
  font-weight:600;
  line-height:1.125;
  padding-bottom: 40px;
}
</style>
