<template>
  <div class="container card text-center" style="background: white; width: 25rem; padding: 2em 2em 0px 2em;">
     <div class="row justify-content-start">
       <button class="fa-solid fa-angles-left fa-2x col-1" style="color: #673AB7" @click="vuelvaAlInicio"></button>
     </div>
  <div class="row">
    <div class="col align-self-center">
<main class="form-signin w-100 m-auto">
  <form onsubmit="event.preventDefault();">
    <i class="fa-regular fa-circle-user fa-10x" style="color: #673AB7"></i>
    <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="text" class="form-control" id="floatingUsername" v-model="username" placeholder="Nombre de usuario">
      <label for="floatingUsername">Nombre de usuario</label>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="password" class="form-control" id="floatingPassword" v-model="password" placeholder="Contraseña">
      <label for="floatingPassword">Contraseña</label>
    </div>
      </div>
      <div class="col">
    <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="password" class="form-control" id="floatingConfPassword" v-model="confirmPassword" placeholder="Confirmar Contraseña">
      <label for="floatingConfPassword">Confirmar Contraseña</label>
    </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
    <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="text" class="form-control" id="floatingFName" v-model="fName" placeholder="Primer Nombre">
      <label for="floatingFName">Primer Nombre</label>
    </div>
      <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="text" class="form-control" id="floatingFSurname" v-model="fSurname" placeholder="Primer Apellido">
      <label for="floatingFSurname">Primer Apellido</label>
    </div>     
        </div>
      <div class="col">
    <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="text" class="form-control" id="floatingSName" v-model="sName" placeholder="Segundo Nombre">
      <label for="floatingSName">Segundo Nombre</label>
    </div>
      <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="text" class="form-control" id="floatingSSurname" v-model="sSurname" placeholder="Segundo Apellido">
      <label for="floatingSSurname">Segundo Apellido</label>
    </div>
        </div>
    </div>
    <div class="form-floating" style="margin: 1em 0px 0px 0px;">
      <input type="email" class="form-control" id="floatingInput" v-model="email" placeholder="name@example.com">
      <label for="floatingInput">Correo</label>
    </div>
    
    <button class="w-100 btn btn-lg btn-hover color-3" style="margin: 1em 0px 1em 0px;" type="submit" @click="guarde">Registrar</button>
  </form>
</main>
    </div>
    </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        username: '',
        password: '',
        confirmPassword:'',
        fName: '',
        sName: '',
        fSurname: '',
        sSurname: '',
        email:'',
      }
    },
    methods:{
      guarde(){
        var user = {
          "username" : this.username,
          "password" : this.password,
          "confirm_password" : this.confirmPassword,
          "first_name" : this.fName,
          "second_name" : this.sName,
          "first_surname" : this.fSurname,
          "second_surname" : this.sSurname,
          "email" : this.email,
        };
        axios.post("https://backend.jose-albertoa97.repl.co/api/register", user).then((res) => {
   alert('Se ha registrado el usuario');
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
        this.fName = '';
        this.sName = '';
        this.fSurname = '';
        this.sSurname = '';
        this.email = '';
})
.catch((err) => {
   console.log(err);
});
      },
      vuelvaAlInicio(){
        this.$router.push('/')
      }
    }
    
  }
</script>
<style>
.btn-hover {
    color: white;
    border: none;
    background-size: 300% 100%;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:focus {
    outline: none;
}
.btn-hover.color-3 {
    color: white;
    background-image: linear-gradient(to right, #4876E6, #8E54E9, #91b1ff, #c199ff);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
</style>