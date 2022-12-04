<template>

	<v-carousel class="design">
		<v-carousel-item
			src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
			cover
		></v-carousel-item>

		<v-carousel-item
			src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
			cover
		></v-carousel-item>

		<v-carousel-item
			src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
			cover
		></v-carousel-item>
	</v-carousel>

	<div v-for="img in images" :key="img" >
		<Image :url="img.url" :text="img.text" />
	</div>
</template>


<script setup>
	import Image from '../components/Image.vue'
	import { ref } from "vue"

	const images = ref([
		{
			url: 'https://via.placeholder.com/1000x350.png',
			text: 'Imagem de exemplo 1'
		},
		{
			url: 'https://via.placeholder.com/1000x350.png',
			text: 'Imagem de exemplo 2'
		}
	])
</script>

<style>

	.design{
		margin-bottom: 5rem;
	}

</style>