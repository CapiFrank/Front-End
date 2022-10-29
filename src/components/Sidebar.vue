<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">menu</span>
			</button>
		</div>
    
		<div class="menu">
			<a :href="$router.resolve({name:'category', params: {id: 101}}).href" class="button">
				<span class="material-icons">sunny</span>
				<span class="text">Mi día</span>
			</a>   
			<a :href="$router.resolve({name:'category', params: {id: 102}}).href" class="button">
				<span class="material-icons">info</span>
				<span class="text">Importante!</span>
			</a>
			<a :href="$router.resolve({name:'category', params: {id: 103}}).href" class="button">
				<span class="material-icons">date_range</span>
				<span class="text">Planificado</span>
			</a>
      
      <router-link to="/manageList" class="button">
        
				<span class="text">ManageList(Temporal)</span>
			</router-link>  


      
      <!--  vv Los elementos acá abajo desplegables deben crearse dinámimente vv -->
      
      
    <p>
      <a class="button" type="button" data-bs-toggle="collapse" data-bs-target="#first" aria-expanded="false" aria-controls="first">
        <span class="material-icons">arrow_drop_down</span>
		    <span class="text">Revisión</span>
      </a>
    </p>
      
<div class="collapse" id="first">
      <router-link to="/note" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Página de inicio</span>
			</router-link>   
			
      <router-link to="/welcome" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Página del producto</span>
			</router-link>
			
      <router-link to="/team" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Página de colección</span>
			</router-link>
      
      <router-link to="/team" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Página del carrito</span>
			</router-link>
</div>



      
       <p>
  <a class="button" type="button" data-bs-toggle="collapse" data-bs-target="#second" aria-expanded="false" aria-controls="second">
    <span class="material-icons">arrow_drop_down</span>
		<span class="text">Estrategia avanzada</span>
  </a>
</p>
      
<div class="collapse" id="second">
      <router-link to="/home" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Diseño de navegación</span>
			</router-link>   
			<router-link to="/welcome" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Actuación</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Anuncios</span>
			</router-link>
</div>



      
       <p>
  <a class="button" type="button" data-bs-toggle="collapse" data-bs-target="#third" aria-expanded="false" aria-controls="third">
    
    <span class="material-icons">arrow_drop_down</span>
		<span class="text">Estrategia de retención</span>
  </a>
</p>

      
<div class="collapse" id="third">
      <router-link to="/home" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Recargar</span>
			</router-link>   
			<router-link to="/welcome" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Reorganizar</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class="material-icons">hdr_strong</span>
				<span class="text">Estrategia de retención</span>
	</router-link>
</div>

      
		</div> <!-- Fin del Div de Menu -->

</aside>
  
</template>



<!-- Scripts -->


<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.svg'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
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

	background: linear-gradient(180deg, rgba(88,102,177,1) 0%, rgba(235,235,237,1) 100%) !important;
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
</style>