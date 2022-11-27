<template>
	<div class="app">
		<component :is="layout">
      <router-view/>
    </component>
	</div>
</template>

<script>
  const defaultLayout = 'default'
export default{
  name: 'App',
  computed:{
    layout(){
      return(this.$route.meta.Layout || defaultLayout) + '-layout'
    }
  }
}
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
</style>
