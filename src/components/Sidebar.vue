<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`"  class="rounded-end" >
		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">menu</span>
			</button>
		</div>
    
		<div class="menu">
      <a :href="$router.resolve({name:'task'}).href" class="button">
				<span class="material-icons">task</span>
				<span class="text">Inicio</span>
			</a> 
			<a :href="$router.resolve({name:'category', params: {id: 101}}).href" class="button">
				<span class="material-icons">sunny</span>
				<span class="text">Mi día</span>
			</a>   
			<a :href="$router.resolve({name:'category', params: {id: 102}}).href" class="button">
				<span class="material-icons">info</span>
				<span class="text">Importante</span>
			</a>
			<a :href="$router.resolve({name:'category', params: {id: 103}}).href" class="button">
				<span class="material-icons">date_range</span>
				<span class="text">Planificado</span>
			</a>

      
      
      <!--  vv Los elementos acá abajo desplegables deben crearse dinámimente vv -->
   <template v-if="loadingMenu"> 
     <div class="loading-container"> 
       <div>
         <img src="/image/loading.gif">
       </div>
     </div>
   </template>   
   
  <template v-else v-for="(item, index) in menu" :key="`menu_${index}`" >
     
    <p>
       <!-- configurar data-bs-target, problemas -->
       <a class="button" type="button" data-bs-toggle="collapse" 
            
         data-bs-target= "#Lista1"  
         
         aria-expanded="true">
          <span class="material-icons">arrow_drop_down</span>
    		  <span class="text" style="width: 190px" >{{item.name}}</span>

          <!-- boton con script para actualizar -->
          <button  @click="actualizarGrupo(item.id, item.name)">
            <i style="margin: 5px" class="material-icons" >edit</i>
          </button>
         </a>      
    </p>
  <!-- vfor para desplegar -->
    <a v-for="(lista, index) in listas">
      <template v-if="lista.id_checklist_group === item.id">    
            <div :id="'Lista'+item.id" class="collapse" >
                <router-link to="/" class="button" >
    				      <span class="material-icons 20">label</span>
				          <span class="text" style="width: 130px" >{{lista.name}}</span>
                  <div class="aderecha">
                    <!-- boton con script para eliminar -->
                    <button @click="eliminarlista(lista.id, lista.name)">
                      <i style="margin: 2px" class="material-icons" >delete</i>
                    </button>
                </div>
    		        </router-link>
            </div>
     </template>  
    </a>

</template> <!-- fin  -->

      
		</div> <!-- Fin del Div de Menu -->

</aside>
  
</template>



<!-- Scripts -->



<script setup> 
import { ref, onMounted } from 'vue'
import logoURL from '../assets/logo.svg'
import axios from 'axios'
  /**/
import { inject } from 'vue'
const swal = inject('$swal')
  import Swal from 'sweetalert2'
 
  
  /**/
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

  
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}

  
const menu = ref(null); 
const loadingMenu = ref(false); 
const updateError = ref(false);

const listas = ref(null);
const loadingListas = ref(false);

  
 onMounted(() => {
     getTodos(),
     getListas()
 })
  
  function getTodos() {
    loadingMenu.value = true;
    return axios.get('https://backend.derianbustos.repl.co/api/groups').then(      response => {
        menu.value = response.data
        }).catch(e=> console.log(e)).finally(()=> loadingMenu.value = false)
  }

  function getListas() {
    loadingListas.value = true;
    return axios.get('https://backend.derianbustos.repl.co/api/checklists').then(      response => {
        listas.value = response.data
        }).catch(e=> console.log(e)).finally(()=> loadingListas.value = false)
  }


  const actualizarGrupo = (id, name) => {

    

    
    Swal.fire({
        title: 'EDITAR',
        html:
   '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Nombre</label><div class="col-sm-7">    <input id="name" value="'+name+'" type="text" class="form-control" requiered ></div></div></div>' , 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) { 
            loadingMenu.value = true;
            
         name = document.getElementById('name').value,
         
axios.put(`https://backend.derianbustos.repl.co/api/groups/update/${id}` , {name}).then( response => {

  if(response.status === 200){
    Swal.fire(
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )   
  }else{
 Swal.fire(
              '¡Error!',
              'Ha ocurrido un error',
              'error'
            ) 
    
  }
        menu.value = menu.value.map(item => {
          return item.id === response.data.data.id ? response.data.data : item
        })
     console.log(response,  menu.value )}).catch(e=> {console.log(e) 
                                                     Swal.fire(
              '¡Error!',
              'Ha ocurrido un error',
              'error'
            ) }
                                                ).finally(()=> loadingMenu.value = false)
            
              
          }else{
            Swal.fire(
              '¡Cancelado!',
              'Ha cancelado la operación',
              'error'
            ) 
          }
      
        });   
}

  const eliminarlista = (id, name) => {

    Swal.fire({
        title: '¿Eliminar Lista?',
        html:
   '<div class="form-group">    <label id="namelist">"'+name+'"</label> </div>' , 
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) { 
            loadingMenu.value = true;
            
         name = document.getElementById('namelist').value,
         
axios.delete(`https://backend.derianbustos.repl.co/api/lists/destroy/${id}` , {name}).then( response => {

  if(response.status === 200){
    
    Swal.fire(
              '¡Eliminado!',
              'Se ha eliminado con éxito.',
              'success'
            )
  }else{
 Swal.fire(
              '¡Error!',
              'Ha ocurrido un error',
              'error'
            ) 
    
  }
  
  listas.value = listas.value.map(lista => {
          return lista.id === response.data.data.id ? response.data.data : lista
        })
     console.log(response,  listas.value )}).catch(e=> {console.log(e) 
                                                     Swal.fire(
              '¡Error!',
              'Ha ocurrido un error 1',
              'error'
            ) }
                                                ).finally(()=> loadingMenu.value = false)
            
              
          }else{
            Swal.fire(
              '¡Cancelado!',
              'Ha cancelado la operación',
              'error'
            ) 
          }
      
        });
}



  
</script>

<style lang="scss" scoped>



  .swal2-html-container{
  overflow-x: visible !important;
   overflow-y: visible !important;
 
}

  
.loading-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  hight: 60%;
  width: 60%;
}
.loading-container > div{
   hight: auto;
  width: 60%;
  position: relative;
    left: 60px;
  right: 30px;
  top: 100px
}  
.loading-container > div > img{
  
  width: 60%;
  hight: 60%;
} 
  
  .btn-bd-primary {
  --bs-btn-font-weight: 600;
  --bs-btn-color: white;
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: .5rem;
  --bs-btn-hover-color: gray;
  --bs-btn-hover-bg: transparent;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-focus-shadow-rgb: blue;
  --bs-btn-active-color: black;
  --bs-btn-active-bg: transparent;
  --bs-btn-active-border-color: transparent;
}

aside {
	display: flex;
	flex-direction: column;

	background: linear-gradient(180deg, rgba(88,102,177,1) 0%, 
  rgba(235,235,237,1) 100%) !important;
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 92.5vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

.flex {
		flex: 1 1 0%;
	}

.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

.menu-toggle {
			transition: 0.2s ease-in-out;


  
.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
.material-icons {
					color: var(--secondary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

.menu {
		margin: 0 -1rem;

.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

.menu-toggle-wrap {
			top: -0.3rem;
			
.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

.button {
.material-icons {
				margin-right: 1rem;
			}
		}

.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
  
.aderecha{
  position:relative;
  left: 3rem;
}
  
</style>  