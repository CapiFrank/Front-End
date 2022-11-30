<template>
  
  
  <router-view></router-view>
  <div style="width:700px; margin:0 auto;">
    <table class="content-table" >
      <thead>
        <tr>
          <th>N°</th>
          <th>Nombre </th>
          <th>Correo</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody >
        
        <tr v-for="task in tasks" :key="task.id" v-on:click="editar(task.id)" >
          <td >{{ task.id }}</td>
          <td >{{ task.username }}</td>
          <td >{{ task.email }}</td>
          
           <input class="form-control btn btn-primary" type = "submit" value = "Modificar"      style="margin: 2px 0px 4px 0px" />

          
          
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
        tasks: null,
       
      }
    },
    mounted(){

     if(localStorage.getItem('token')){
      this.getTodos();
     }else{
       window.location.href = '/Login';  
     }
    },
    methods: {
      getTodos(){
        axios.get('https://backend.jose-albertoa97.repl.co/api/users').then( response => {
          this.tasks = response.data
        }).catch(e=> console.log(e))
      },
      editar(id){

       this.$router.push('/edituser/'+id);
      }

    }
  }

  
</script>

<style>

  <style lang="scss" scoped>
  
  .content-table{
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align:center;
  }
.content-table thead tr{
  background-color: #C5CAE9;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
  } 

.content-table th,
.content-table td{
    padding: 12px 20px;
  }

.content-table tbody tr{
    border-bottom: 1.7px solid #dddddd;
  }

.content-table tbody tr: nth-of-type(even){
    background-color : #F5F5F5;
  }
.content-table tbody tr:last-of-type{
  border-bottom: 2px solid #C5CAE9;
}
</style>