<template>
 <Navbar/>
	<main class="main">
    <Sidebar/>
    <slot></slot>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
  export default{
    components: {Navbar, Sidebar}
  }
</script>
<style lang="scss">
.main {
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