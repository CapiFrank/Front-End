<template>
<nav class="navbar navbar-expand-lg bg-custom">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="material-icons">expand_more</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex ms-auto" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="ms-auto">
      <a href="/" class="link-dark"><span>Get Consultation</span></a>
        <a class="hp-color" href="/register"><i class="fa fa-user-circle"></i><span>
          </span></a>
        <a class="hp-color" href="/"><i class="fa fa-circle-question"></i><span></span></a>
        		<button class="menu-toggle" @click="logOut">
         <a class="hp-color" href="/"><i class="fa fa-sign-out"></i><span></span></a>
            </button>
        <br>
              <template v-if="estado"> 
                <a href="/userl" class="link-dark"  ><span >Editar Usuarios</span></a>
              </template>
    </div>
    </div>
  </div>
</nav>
</template>
<script setup>
 import { ref, onMounted } from 'vue'
let estado = ref(false); 


  const logOut = () => {
	localStorage.clear();
}

 onMounted(() => {
       verif() 
 })

function verif() {
  if (localStorage.getItem('rol') == 1) {
  estado.value = true;
}else{
  estado.value = false;
}
}

  
</script> 
  
<style lang="scss" scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css");
.bg-custom {
  background: linear-gradient(90deg, rgba(88,102,177,1) 0%, rgba(235,235,237,1) 100%) !important;
}
.fnt-custom{
  color: white !important;
}
  .hp-color{
  color: black;
  font-size: 24px;
  margin: 0px 0px 10px 10px;
  }
</style>

