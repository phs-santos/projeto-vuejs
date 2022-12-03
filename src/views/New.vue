<script setup>
import Image from '../components/Image.vue'
import {ref} from "vue"

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

<template>
  <div  v-for="img in images" :key="img">
    <Image :url="img.url"  :text="img.text" />
  </div>
</template>
