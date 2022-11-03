<template>
   <Navbar/>
	<div class="app">
		<Sidebar/>
		<router-view></router-view>
	</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>
<style lang="scss">
:root {
	--primary: #5B69B3;
  --secondary: #20253d;
	--primary-alt: #ffffff;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #ffffff;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Rubik', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>
