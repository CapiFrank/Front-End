<template>

  
<header >   
  <div style="margin: 30px 0px 0px 90px">
    <button type="button" class="btn btn-primary btn-block" @click="AddPage"> Agregar Páginas</button> 
  
  
  </div>
    </header>
 
  
<div class="row align-items-start" style="margin: 90px 0px 0px 90px">
<div class="col accordion" id="accordionExample">
  <div class="accordion-item" v-for="(todo,index) in todos" :key="todo.id" style="width:55vw; overflow:hidden;">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button" v-bind:class = "(todo.my_day === 1 || todo.important === 1 || todo.final_date !== null)?'bg-secondary bg-opacity-25':'collapsed'" type="button" data-bs-toggle="collapse" 
        v-b-toggle="'accordion-' + index" aria-expanded="true" aria-controls="todo.id">
        <div>
       <p>Título:  {{ todo.title }} </p> 
        </div>
      </button>
    </h2>
    <div :id="'accordion-' + index" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Subtitulo:  {{ todo.subtitle }} </p> 
      </div>
    </div>

     <div :id="'accordion-' + index" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Contenido:    {{ todo.content }} </p>
      </div>
    </div>
  </div>
</div>
</div>

  
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        todos: null
      }
    },
    mounted(){
           if(localStorage.getItem('token')){
      this.getTodos();
           }else{
             window.location.href = '/'; 
           }
    },
  methods: {
    
      getTodos(){     
axios.get('https://backend.jose-albertoa97.repl.co/api/Page').then(      response => {
       this.todos = response.data
        }).catch(e=> console.log(e))
        
      },
     async AddPage () {
      window.location.href = '/AgregarPaginas'
    }
    }
  }
</script>

<style>
.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
 height: 100%;
}
  
</style>