<script setup>
  import { onMounted, ref } from 'vue'
  import axios from "axios"

  const usuario = 'phs-santos'
  const repos = ref([])
  const loading = ref(true)
  const hasError = ref(false)

  onMounted( async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${usuario}/repos`)
      repos.value = response.data
    } catch (error) {
      hasError.value = true
    }finally{
      loading.value = false
    }
  })
</script>

<template>
  <h1>Total de repositórios: {{ repos.length }}</h1>
  <v-divider />

  <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="deep-purple-accent-4"
  ></v-progress-linear>

  <v-alert v-if="hasError" text="Houve um erro na requisição" type="error"></v-alert>

  <v-card v-for="repo in repos" :key="repo.id" class="mt-5 pa-5">
    <p><strong>Nome:</strong> {{ repo.name }}</p>
    <p><strong>Descrição:</strong> {{ repo.description }}</p>
    <p><strong>Criado em:</strong> {{ new Date(repo.created_at).toLocaleString() }}</p>

    <div>
      <p><strong>Desenvolvedor:</strong></p>
      <img :src="repo.owner.avatar_url" width="80" />
    </div>
    <a :href="repo.html_url" target="_blank">Ir para repositório</a>
  </v-card>
</template>
