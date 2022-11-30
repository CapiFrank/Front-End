<template>
  
<form id="msform"  class="rounded" method="POST" v-on:submit.prevent="AddPage()" >
   <fieldset >
     <h2 class="fs-title" >Agregar página</h2>
    <h3 class="fs-subtitle">ingrese los datos</h3>
    <input type="text" name="titulo" placeholder="titulo" v-model="title" minlength="4" required />
    <input type="text" name="subtitulo" placeholder="subtitulo" v-model="subtitle" minlength="4" required />
     <textarea rows="5" cols="10" name="description" v-model="content" minlength="10" class="form-control material-icons" placeholder="&#xf249; Descripcion" style="font-family:Arial, FontAwesome; font-size:16px;"> </textarea>
     <input class="action-button" type = "submit" value = "Añadir" style="margin: 10px 0px 10px 0px" />
   </fieldset>
</form>
  
</template>

<script>
 import axios from 'axios'
  import { inject } from 'vue'
const swal = inject('$swal')
  import Swal from 'sweetalert2'
  export default{
    data(){
      return {
        title: "",
        subtitle: "",
        content: ""
      }
    },

     mounted(){
       if(localStorage.getItem('token')){
       }else{
         window.location.href = '/'; 
       }
    },
    methods: {
    
     AddPage() {
       const postData = { title: this.title, subtitle: this.subtitle, content: this.content};
      
       if (this.titulo!=""){
  axios.post('https://backend.jose-albertoa97.repl.co/api/Page/save',postData)
          .then((response) => {
             Swal.fire(
              '¡Se agregó la pagina!',
              'nueva pagina agregada',
              'success'
            )   
          
        this.title= ""
        this.subtitle=""
        this.content= ""
            
          }).catch(e=> console.log(e))
           
         }else{
           Swal.fire(
              '¡Debe agregar una pagina!',
              'no se agregó',
              'Error'
            )  
         }
  }  

    }
 
    }
  
      

  
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

/*basic reset*/
* {margin: 0; padding: 0;}

html {
	height: 100%;
	/*Image only BG fallback*/
	
	/*background = gradient + image pattern combo*/
	background: 
		linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));
}

body {
	font-family: montserrat, arial, verdana;
}
/*form styles*/
#msform {
	width: 600px;
	margin: 50px auto;
	text-align: center;
	position: relative;
}
#msform fieldset {
	background: white;
	border: 0 none;
	border-radius: 3px;
	box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
	padding: 20px 30px;
	box-sizing: border-box;
	width: 80%;
	margin: 0 10%;
	
	/*stacking fieldsets above each other*/
	position: relative;
}
/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
	display: none;
}
/*inputs*/
#msform input, #msform textarea {
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
}
/*buttons*/
#msform .action-button {
	width: 100px;
	background: #27AE60;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px 5px;
	margin: 10px 5px;
}
#msform .action-button:hover, #msform .action-button:focus {
	box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
/*headings*/
.fs-title {
	font-size: 15px;
	text-transform: uppercase;
	color: #2C3E50;
	margin-bottom: 10px;
}
.fs-subtitle {
	font-weight: normal;
	font-size: 13px;
	color: #666;
	margin-bottom: 20px;
}




</style>