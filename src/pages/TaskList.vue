<template>
<div class="row align-items-start" style="margin: 15px 0px 0px 0px">
<div class="col accordion" id="accordionExample">
  <div class="accordion-item" v-for="(todo,index) in todos" :key="todo.id" style="width:55vw; overflow:hidden;">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button" v-bind:class = "(todo.my_day === 1 || todo.important === 1 || todo.final_date !== null)?'bg-secondary bg-opacity-25':'collapsed'" type="button" data-bs-toggle="collapse" 
        v-b-toggle="'accordion-' + index" aria-expanded="true" aria-controls="todo.id" @click="selection(todo)">
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
  <!-- Esta es una columna -->
<div class="col bg-secondary bg-opacity-10 form-control">
    <div class="mb-3" style="margin: 15px 0px 0px 0px">
  <input type="text" v-model="titulo" readonly class="form-control material-icons" id="exampleFormControlInput1" placeholder="&#xf192; Titulo" style="font-family:Arial, FontAwesome">
</div>
<div class="mb-3">
<button class="form-control btn btn-primary" id="exampleFormControlTextarea1" rows="3" @click="AgregueAMiDia()"><i class="material-icons md-24">&#xe518;</i> Agregar a Mi Día</button>
</div>
  <div class="mb-3">
<button class="form-control btn btn-primary" id="exampleFormControlTextarea1" rows="3" @click="AgregueAImportante()"><i class="material-icons md-24">&#xe838;</i> Agregar a Importante</button>
</div>
  <div class="mb-3">
  <input v-model="fecha" @change="AgregueAPlaneado()" type="date" class="form-control" id="exampleFormControlInput1"
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
        fecha: "",
        titulo: '',
        text: "",
        todos: null
      }
    },
    mounted(){
       if(localStorage.getItem('token')){
      this.getTodos();
      this.deleteItem();
       }else{
         window.location.href = '/'; 
       }
    },
    methods: {
      async AgregueAMiDia(){
        let task = JSON.parse(localStorage.getItem('selectedItem'));
        if (task == null) {
          console.log("No se ha seleccionado una tarea!");
        } else {
          const res = await axios.put('https://backend.jose-albertoa97.repl.co/api/midia/'+task.id);
        this.result = res.status;
          location.reload();
          alert(res.data);
          deleteItem();
        }
      },
  async AgregueAImportante(){
    let task = JSON.parse(localStorage.getItem('selectedItem'));
        if (task == null) {
          console.log("No se ha seleccionado una tarea!");
        } else {
          const res = await axios.put('https://backend.jose-albertoa97.repl.co/api/important/'+task.id);
        this.result = res.status;
          location.reload();
          alert(res.data);
          deleteItem();
        }
  },
      async AgregueAPlaneado(){
        let task = JSON.parse(localStorage.getItem('selectedItem'));
        if (task == null) {
          console.log("No se ha seleccionado una tarea!");
        } else {
          const res = await axios.put('https://backend.jose-albertoa97.repl.co/api/planeado',{
            id:task.id,
            final_date:this.fecha,
            
            
          });
        this.result = res.status;
          location.reload();
          alert(res.data);
          deleteItem();
        }
      },
      deleteItem(){
        this.titulo="";
        localStorage.removeItem('selectedItem');
      },
      selection(item){
        this.titulo="";
        if(item.my_day == 0 && item.important == 0 && item.final_date == null)
        {
          this.titulo = item.title;
          localStorage.selectedItem = JSON.stringify(item);
        }
        
      },
      getTodos(){
        axios.get('https://backend.jose-albertoa97.repl.co/api/task').then( response => {
          this.todos = response.data
        }).catch(e=> console.log(e))
      }
      ,
       saveNote(){

         
        const postData = { text: this.text };
         if (this.text!=""){
            alert("¡Nota guardada correctamente!");
        axios.post('https://backend.jose-albertoa97.repl.co/api/note',postData)
          .then((response) => {
            
        return response;
            
          }).catch(e=> console.log(e))
           
         }else{
          alert("¡Debe agregar una nota!");
         }
       }
      
    }
  }
</script>
<style>
  .material-icons {
  vertical-align: middle !important;
  padding-bottom: 3px;
}
  
</style>