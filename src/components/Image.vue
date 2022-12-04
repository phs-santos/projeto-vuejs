<script setup>
//Declaração de props
const props = defineProps({
	url: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	hideButton: {
		type: Boolean,
		default: false
	}
})

//Declaração de Métodos
function message() {
	window.alert("Isso é tudo pessoal")
}
</script>

<template>
	<h1>{{ props.text }}</h1>

	<div>
		<img :src="props.url" :alt="props.text">
	</div>

	<div v-if="(hideButton == false)">
		<v-btn append-icon="mdi-vuetify" @click="message()">
			Clique aqui
		</v-btn>
	</div>

	<v-divider />
</template>

<style scoped>
body {
	margin-left: 15px;
}

hr {
	margin: 20px 0 20px 0;
}

button {
	text-transform: uppercase;
	color: #1E88E5;
}

h1 {
	color: rgb(82, 81, 81);
}
</style>
