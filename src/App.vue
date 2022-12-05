<script setup>
	import { RouterLink, RouterView, useRouter } from 'vue-router'
	import HelloWorld from './components/HelloWorld.vue'

	const route = useRouter()
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo centered-img" src="@/assets/logo.svg" width="125" height="125" />

		<h1 class="centered-text mb-5">Hello World VuejS!</h1>

		<v-tabs bg-color="blue-darken-1" align-tabs="center">
			<v-tab value="home" @click="route.push('/')">Home</v-tab>
			<v-tab value="about" @click="route.push('/about')">Sobre</v-tab>
			<v-tab value="repos" @click="route.push('/repos')">Repositórios</v-tab>
			<v-tab value="form" @click="route.push('/form')">Formulario</v-tab>
			<v-tab value="new" @click="route.push('/new')">Area de Imagem</v-tab>
			<v-tab value="extra" @click="route.push('/extra')">Extra</v-tab>
		</v-tabs>
	</header>
	
	<main>
		<RouterView />
	</main>

			

</template>


<style scoped>
.menu {
	width: 200px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
}

.centered-text {
	text-align: center;
}

.centered-img {
	margin: auto;
	display: block;
}

main {
	margin: 50px auto;
	max-width: 1000px;
}
</style>
