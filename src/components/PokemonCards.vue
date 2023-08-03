<template>
  <v-card height="200">
    {{ kartica.name }}
  </v-card>
</template>

<script>
export default {
  name:'PokemonCards',
  props: ['kartica']
}
  
</script>