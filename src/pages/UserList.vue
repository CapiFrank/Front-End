<template>
  <router-view></router-view>
  <div>
    <table>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.email }}</td>
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
        axios.get('https://BackEnd.randallcs15.repl.co/api/users').then( response => {
          this.todos = response.data
        }).catch(e=> console.log(e))
      }
    }
  }
</script>