<template>
  <div
    class="container card text-center"
    style="background: white; width: 25rem; padding: 2em 2em 0px 2em"
  >
    <div class="row justify-content-start">
      <button
        class="fa-solid fa-angles-left fa-2x col-1"
        style="color: #673ab7"
        @click="vuelvaAlInicio"
      ></button>
    </div>
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
                :class="{ 'is-invalid': v$.username.$error || state.user_bool}"
                id="floatingUsername"
                v-model="state.username"
                placeholder="Nombre de usuario"
              />
              <label for="floatingUsername">Nombre de usuario</label>
              <div
                class="invalid-feedback"
                v-if="v$.username.minLength.$invalid || v$.username.maxLength.$invalid"
              >
                El nombre de usuario debe contener entre
                {{v$.username.minLength.$params.min}} y
                {{v$.username.maxLength.$params.max}} caracteres
              </div>
              <div class="invalid-feedback" v-if="v$.username.required.$invalid">
                Este campo es requerido
              </div>
              <div class="invalid-feedback" v-if="state.user_bool">
                El nombre de usuario ya se encuentra en uso
              </div>
            </div>
            <div class="row">
              <div class="col">
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
              </div>
              <div class="col">
                <div class="form-floating" style="margin: 1em 0px 0px 0px">
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': v$.confirmPassword.$error }"
                    id="floatingConfPassword"
                    v-model="state.confirmPassword"
                    placeholder="Confirmar Contraseña"
                  />
                  <label for="floatingConfPassword">Confirmar Contraseña</label>
                  <div
                    class="invalid-feedback"
                    v-if="v$.confirmPassword.required.$invalid"
                  >
                    Este campo es requerido
                  </div>
                  <div
                    class="invalid-feedback"
                    v-if="v$.confirmPassword.sameAsPass.$invalid"
                  >
                    Las contraseñas no coinciden
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-floating" style="margin: 1em 0px 0px 0px">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': v$.fName.$error }"
                    id="floatingFName"
                    v-model="state.fName"
                    placeholder="Primer Nombre"
                  />
                  <label for="floatingFName">Primer Nombre</label>
                  <div
                class="invalid-feedback"
                v-if="v$.fName.minLength.$invalid ||   
                 v$.fName.maxLength.$invalid"
              >
                El primer nombre debe contener entre
                {{v$.fName.minLength.$params.min}} y
                {{v$.fName.maxLength.$params.max}} caracteres
              </div>
                  <div class="invalid-feedback" v-if="v$.fName.required.$invalid">
                    Este campo es requerido
                  </div>
                </div>
                <div class="form-floating" style="margin: 1em 0px 0px 0px">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': v$.fSurname.$error }"
                    id="floatingFSurname"
                    v-model="state.fSurname"
                    placeholder="Primer Apellido"
                  />
                  <label for="floatingFSurname">Primer Apellido</label>
                  <div
                class="invalid-feedback"
                v-if="v$.fSurname.minLength.$invalid ||   
                 v$.fSurname.maxLength.$invalid"
              >
                El primer Apellido debe contener entre
                {{v$.fSurname.minLength.$params.min}} y
                {{v$.fSurname.maxLength.$params.max}} caracteres
              </div>
                  <div class="invalid-feedback" v-if="v$.fSurname.required.$invalid">
                    Este campo es requerido
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-floating" style="margin: 1em 0px 0px 0px">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingSName"
                    v-model="state.sName"
                    placeholder="Segundo Nombre"
                  />
                  <label for="floatingSName">Segundo Nombre</label>
                </div>
                <div class="form-floating" style="margin: 1em 0px 0px 0px">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': v$.sSurname.$error }"
                    id="floatingSSurname"
                    v-model="state.sSurname"
                    placeholder="Segundo Apellido"
                  />
                  <label for="floatingSSurname">Segundo Apellido</label>
                  <div
                class="invalid-feedback"
                v-if="v$.sSurname.minLength.$invalid ||   
                 v$.sSurname.maxLength.$invalid"
              >
                El segundo Apellido debe contener entre
                {{v$.sSurname.minLength.$params.min}} y
                {{v$.sSurname.maxLength.$params.max}} caracteres
              </div>
                  <div class="invalid-feedback" v-if="v$.sSurname.required.$invalid">
                    Este campo es requerido
                  </div>
                </div>
              </div>
            </div>
            <div class="form-floating" style="margin: 1em 0px 0px 0px">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': v$.email.$error || state.email_bool }"
                id="floatingEmail"
                v-model="state.email"
                placeholder="name@example.com"
              />
              <label for="floatingEmail">Correo</label>
              <div class="invalid-feedback" v-if="v$.email.required.$invalid">
                Este campo es requerido
              </div>
              <div class="invalid-feedback" v-if="state.email_bool">
                El correo electronico ya se encuentra en uso
              </div>
            </div>
            <button
              class="w-100 btn btn-lg btn-hover color-3"
              style="margin: 1em 0px 1em 0px"
              type="submit"
              @click="guarde">
              Registrar
            </button>
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
  export default{
    setup(){
      const state = reactive({
        username: '',
        password: '',
        confirmPassword:'',
        fName: '',
        sName: '',
        fSurname: '',
        sSurname: '',
        email:'',
        email_bool: false,
        user_bool: false,
      })
    const rules = computed(() => {
      return{
    username: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(16)
    },
    confirmPassword: {
      required,
      sameAsPass: sameAs(state.password)
    },
    fName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(25)
    },
    fSurname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(25)
    },
    sSurname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(25)
    },
    email: {
      required,
      email,
    }
      }
    })
      const v$ = useVuelidate(rules, state)
      return{
        state,
        v$,
      }
    },
    methods:{
      guarde(){
        this.v$.$validate()
        this.state.user_bool=false;
        this.state.email_bool=false;
        if(!this.v$.$error){
          var user = {
          "username" : this.state.username,
          "password" : this.state.password,
          "confirm_password" : this.state.confirmPassword,
          "first_name" : this.state.fName,
          "second_name" : this.state.sName,
          "first_surname" : this.state.fSurname,
          "second_surname" : this.state.sSurname,
          "email" : this.state.email,
        };
        axios.post("https://backend.jose-albertoa97.repl.co/api/register", user).then((res) => {
   alert('Se ha registrado el usuario');
        this.state.username = '';
        this.state.password = '';
        this.state.confirmPassword = '';
        this.state.fName = '';
        this.state.sName = '';
        this.state.fSurname = '';
        this.state.sSurname = '';
        this.state.email = '';
          this.$router.push('/')
}).catch((err) => {
   console.log(err);
          if(err.response.status == 421){
            this.state.user_bool=true;
            this.state.email_bool=true;
          }
          if(err.response.status == 422){
            this.state.user_bool=true;
          }
          if(err.response.status == 423){
            this.state.email_bool=true;
          }
});
}},
      vuelvaAlInicio(){
        this.$router.push('/task')
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
</style>
