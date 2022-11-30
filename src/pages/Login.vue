<template>
  <div
    class="container card text-center"
    style="background: white; width: 25rem; padding: 2em 2em 0px 2em"
  >
    <div class="row">
      <div class="col align-self-center">
        <main class="form-signin w-100 m-auto">
          <form onsubmit="event.preventDefault();" novalidate>
            <i
              class="fa-regular fa-circle-user fa-10x"
              style="color: #673ab7"
            ></i>
            <div class="form-floating" style="margin: 1em 0px 0px 0px">
              <input
                   type="text"
                class="form-control"
                :class="{ 'is-invalid': v$.email.$error}"
                id="floatingEmail"
                v-model="state.email"
                placeholder="name@example.com"
              />
              <label for="email">Correo</label>
            <div class="invalid-feedback" v-if="v$.email.required.$invalid">
                Este campo es requerido
              </div>
              
            </div>
                 <div class="form-floating" style="margin: 1em 0px 0px 0px">
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': v$.password.$error }"
                    id="floatingPassword"
                    v-model="state.password"
                    placeholder="Contraseña"
                  />
                  <label for="floatingPassword">Contraseña</label>
                  <div
                class="invalid-feedback"
                v-if="v$.password.minLength.$invalid ||   
                 v$.password.maxLength.$invalid"
              >
                La contraseña debe contener entre
                {{v$.password.minLength.$params.min}} y
                {{v$.password.maxLength.$params.max}} caracteres
              </div>
                  <div class="invalid-feedback" v-if="v$.password.required.$invalid">
                    Este campo es requerido
                  </div>
                </div>
            <button
              class="w-100 btn btn-lg btn-hover color-3"
              style="margin: 1em 0px 1em 0px"
              type="submit"
              @click="guarde">
              Iniciar Sesión
            </button>
            <p>Aún no eres miembro? <a href="\register">Registrarse</a></p>
            <p></p>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, minLength, maxLength, sameAs, email } from '@vuelidate/validators'
  import {reactive, computed} from 'vue'
  import axios from 'axios'
  import { inject } from 'vue'
  //const swal = inject('$swal')
  import Swal from 'sweetalert2'
  
  export default{
    setup(){
      const state = reactive({
        email_bool: false,
        password: '',
      })
    const rules = computed(() => {
      return{
   email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16)
    }
      }
    });
      const v$ = useVuelidate(rules, state)
      return{
        state,
        v$,
      }
    },
    methods:{
      guarde(){
        this.v$.$validate()
      //  this.state.user_bool=false;
        this.state.email_bool=false;
        
       //    if(!this.v$.$error){
         
axios.post(`https://backend.jose-albertoa97.repl.co/api/login`, {email: this.state.email, password:  this.state.password,}).then( data=>{
           if(data.data.status == 1){
             localStorage.token = data.data.msg; 
            localStorage.rol = data.data.rol;
            window.location.href = '/task';   
           }else{
          Swal.fire(
              '¡Error!',
              data.data.msg,
              'error'
            ) 
           }
       }  
     ).catch((err) => {
  
  console.log(err);
          if(err.response.status == 421){
            this.state.email_bool=true;
              }
        
          if(err.response.status == 423){
             this.state.email_bool=true;
               }
});
              //   }
  
      
     
      }     
      }   
        }
</script>
<style>
.btn-hover {
  color: white;
  border: none;
  background-size: 300% 100%;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}
.btn-hover.color-3 {
  color: white;
  background-image: linear-gradient(
    to right,
    #4876e6,
    #8e54e9,
    #91b1ff,
    #c199ff
  );
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
  a{
    text-decoration: none;
    color: #3b71ca;
  }
</style>
