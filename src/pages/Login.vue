<template >
  <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
  <div class="container card text-center, contenedor">
    <div class="row" >
        <div class="logo">
           <i class="fa-regular fa-circle-user fa-10x" style="color: #673ab7;"></i>
        </div>
      <div class="col align-self-center">
        <main class="form-signin w-100 ">
          <form onsubmit="event.preventDefault();" novalidate  >
           
            <div class="form-floating" style="margin: 1em 0px 0px 200px">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': v$.email.$error}"
                id="floatingEmail"
                v-model="state.email"
                placeholder="name@example.com" />
              <label for="email" class="input__label">Correo</label>
            <div class="invalid-feedback" v-if="v$.email.required.$invalid">
                Este campo es requerido
              </div>
            </div>

            
                 <div class="form-floating" style="margin: 1em 0px 0px 200px" >
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': v$.password.$error }"
                    id="floatingPassword"
                    v-model="state.password"
                    placeholder="Contraseña"
                  />
                  <label for="floatingPassword" class="input__label" >Contraseña</label>
                  <div class="invalid-feedback" v-if="v$.password.minLength.$invalid || v$.password.maxLength.$invalid">
                    La contraseña debe contener entre
                      {{v$.password.minLength.$params.min}} y
                        {{v$.password.maxLength.$params.max}} caracteres
              </div>
                  <div class="invalid-feedback" v-if="v$.password.required.$invalid">
                    Este campo es requerido
                  </div>
                </div>
            <button
              class="w-50 btn btn-lg btn-hover color-3"
              style="margin: 1em 0px 1em 200px"
              type="submit"
              @click="guarde">
              Iniciar Sesión
            </button>
            <p style="margin: 1em 0px 1em 200px" >Aún no eres miembro? <a href="\register">Registrarse</a></p>
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
  import Swal from 'sweetalert2'
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';


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
          email,},
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
    data() {
      return {
        fullPage: false
      }
    },
        methods:{

      guarde(){
        this.v$.$validate()
          this.state.email_bool=false;
            if(!this.v$.$error){
              let loader = this.$loading.show({
                    // Optional parameters
                container: this.fullPage ? null : this.$refs.formContainer,
                opacity: 0.7,
                loader: 'dots',
                color: 'blue'                 
              });       
axios.post(`https://ProyectoAnalsis.derianbustos.repl.co/api/login`, {email: this.state.email, password:  this.state.password,}).then( data=>{
           if(data.data.status == 1){               
              loader.hide();
                localStorage.token = data.data.msg; 
                  localStorage.rol = data.data.rol;
                    this.$router.push('/task');
           }else{
            Swal.fire('¡Error!', data.data.msg,'error' );
            }}).catch((err) => {
        console.log(err);
          if(err.response.status == 421){
            this.state.email_bool=true;}
              if(err.response.status == 423){
                 this.state.email_bool=true;
              }}).finally(()=> this.loadingMenu = false);}}}}
</script>

<style>

.contenedor{
 background: white; 
 width: 40rem; 
 margin: 100px auto;
  padding: 3px 10px;
  border: PowderBlue 5px solid;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.logo{
  position: relative;
  top: 0;
  left: 0;
  right: 90;
  margin: auto 0px 90px 30px;
  width: 20px; 
}
 
.input__label {
   color: gray;
}

.loading-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  height: 60%;
  width: 60%;
}
.loading-container > div{
   height: auto;
  width: 60%;
  position: relative;
    left: 60px;
  right: 30px;
  top: 100px
}  
.loading-container > div > img{
  
  width: 60%;
  height: 60%;
} 
.btn-hover {
  color: white;
  border: none;
  background-size: 300% 100%;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  -moz-transition: all 0.4s ease-in-out;
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
