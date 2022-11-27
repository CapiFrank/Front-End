<template>

    <div>
      <form action="" class="form-horizontal">
       <div class="form-group">
         <label for=" " class="control-label col-sm-20">Nuevo nombre de usuario</label>
         <div class="col-sm-30">
            <input type="text" class="form-control" name="username" id="username" v-model="form.username">
           
         </div>

         <label for=" " class="control-label col-sm-20"> Nuevo primer nombre</label>
         <div class="col-sm-30">
            <input type="text" class="form-control" name="first_name" id="first_name" v-model="form.first_name">
           
         </div>

         <label for=" " class="control-label col-sm-20">Nuevo segundo nombre</label>
         <div class="col-sm-30">
            <input type="text" class="form-control" name="second_name" id="second_name" v-model="form.second_name">
           
         </div>

         <label for=" " class="control-label col-sm-20">Nuevo primer apellido</label>
         <div class="col-sm-30">
            <input type="text" class="form-control" name="first_surname" id="first_surname" v-model="form.first_surname">
           
         </div>

         <label for=" " class="control-label col-sm-20">Nuevo segundo apellido</label>
         <div class="col-sm-30">
            <input type="text" class="form-control" name="second_surname" id="second_surname" v-model="form.second_surname">
           
         </div>

         <label for=" " class="control-label col-sm-20">Nuevo correo</label>
         <div class="col-sm-30">
            <input type="text" class="form-control" name="email" id="email" v-model="form.email">
           
         </div>
       </div>

        <div class="form-group">

          <button type= "button" class="btn btn-primary" v-on:click="editar()">Modificar</button>
        </div>
        
      </form>
    </div>

</template>

<script>
  
    import axios from 'axios';
  export default{

    name:"Editar",
    data:function(){
    return {
       
      form:{
       userId:"",
       username : "",
       first_name : "",
       second_name : "",
       first_surname : "",
       second_surname : "",
       email : ""
      }
      }
    
    },
    methods:{
      editar(){
        try {
          axios.put(`https://backend.mary-angelangel.repl.co/api/users/update/${this.form.userId}`, this.form)
          .then( data => {
           alert("¡Se ha actualizado el usuario!");
        })
        } catch (error) {
          
        }
        this.$router.push('/userl/');
        
      }

      
    },
    mounted:function(){
      this.form.userId = this.$route.params.id;
      axios.get("https://backend.mary-angelangel.repl.co/api/users?id="+this.form.userId)
      .then(datos => {
        this.form.username = datos.data[0].username;
         this.form.first_name = datos.data[0].first_name;
         this.form.second_name = datos.data[0].second_name;
         this.form.first_surname = datos.data[0].first_surname;
         this.form.second_surname = datos.data[0].second_surname;
         this.form.email = datos.data[0].email;
        console.log(this.form);
      })
    }
  }
    
</script>



