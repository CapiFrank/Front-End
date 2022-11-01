<template>
  <router-view></router-view>
  <div>
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
      this.getTodos();
    },
    methods: {
      getTodos(){
        var id = this.$route.params.id;
        axios.get('https://stickyquickconnections.jose-albertoa97.repl.co/api/task?'+id).then( response => {
          this.todos = response.data
        }).catch(e=> console.log(e))
      }
    }
  }
</script>