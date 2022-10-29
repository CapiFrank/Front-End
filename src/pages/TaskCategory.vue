<template>
  <router-view></router-view>
  <div>
    <table>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.contents }}</td>
        </tr>
      </tbody>
    </table>
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