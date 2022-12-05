<template>
  <div class="about">
    <h1>Usando a lógica para transformar boas ideias em oportunidades</h1>
    <img class="centered-content2 mt-5" src="@/assets/spock.gif" />
    <img class="centered-content mt-5" src="@/assets/dino.gif" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  
  .about {
    display: flex;
    flex-direction: column;
  }
  .centered-content2 {
    justify-content: center;
    margin: auto;
  }
  .centered-content {
    margin:auto;
    display:block;
  }

  h1{
    background: #efefef;
    padding: 15px;
    border-radius:10px;
    text-align: center;
    font-size:20pt;
  }
}
</style>
