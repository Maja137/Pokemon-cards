<template>
  <v-card height="200" class="karte">
    <h3>{{ kartica.name }}</h3>
  </v-card>
</template>

<script>
export default { 
  name:'PokemonCards',
  props: ['kartica'],
}
</script>
<style>
.karte {
  background: #2980b9 !important;
  color: yellow !important;
}
</style>