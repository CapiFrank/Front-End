<template>
  <router-view></router-view>
  <div class="row">
 <div class="col accordion" id="accordionExample">
  <div class="accordion-item" v-for="(todo,index) in todos" :key="todo.id" style="width:55vw; overflow:hidden;">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-b-toggle="'accordion-' + index" aria-expanded="true" aria-controls="todo.id" @click="selection(todo)">
        <div>
          {{ todo.title }}
        </div>
      </button>
    </h2>
    <div :id="'accordion-' + index" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {{ todo.contents }}
      </div>
    </div>
  </div>
</div>
    <div class="col bg-secondary bg-opacity-10 form-control">
    <div class="mb-3" style="margin: 15px 0px 0px 0px">
  <input type="text" v-model="titulo" readonly class="form-control material-icons" id="exampleFormControlInput1" placeholder="&#xf192; Titulo" style="font-family:Arial, FontAwesome">
</div>
<div class="mb-3">
  <input :class="{'btn-success':Midia}" class="form-control btn btn-primary material-icons" type = "submit" value = "&#xf185; Mi Día" disabled style="font-family:Arial, FontAwesome;"/>
</div>
  <div class="mb-3">
 <input class="form-control btn btn-primary material-icons" type = "submit" :class="{'btn-success':importante}" value = "&#xf005; Importante" disabled style="font-family:Arial, FontAwesome;"/>
</div>
  <div class="mb-3">
  <input v-model="fecha" type="date" readonly class="form-control" id="exampleFormControlInput1"
    style="margin: 10px 0px 0px 0px">
</div>
<div id="cuadroNotas" class="Notas" >
    <form method="POST" v-on:submit.prevent="saveNote()">
     <textarea rows="5" cols="10" name="description" v-model="text" minlength="5" class="form-control material-icons" placeholder="&#xf249; Nota" style="font-family:Arial, FontAwesome; font-size:16px;"> </textarea>
     <input class="form-control btn btn-primary" type = "submit" value = "Agregar Nota" style="margin: 10px 0px 10px 0px" />
    </form>
  </div>
   </div> 
  </div>


  
</template>


<script>
  import axios from 'axios'
  export default{
    data(){
      return {
        todos: null, 
        titulo: '',
        fecha: '',
        Midia: false,
        importante: false
      }
    },
    mounted(){
      this.getTodos();
    },
    methods: {
      getTodos(){
        var id = this.$route.params.id;
        axios.get('https://backend.derianbustos.repl.co/api/task?'+id).then( response => {
          this.todos = response.data
        }).catch(e=> console.log(e))
      },
    selection(tarea){
      this.titulo = tarea.title; 
      if (tarea.final_date!=null) {
        this.fecha = tarea.final_date;
      }
      if (tarea.my_day==true) {
        this.Midia =!this.Midia;
      }
      if (tarea.important==true) {
        this.importante =!this.importante;
      }
    }
    }
  }
</script>