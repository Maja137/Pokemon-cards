<template>
  <v-card class="karte">
    <v-img :src="kartica.images.small" height="400"></v-img>
    <v-card-text>
      <div class="tekst">
        <b>Name:</b> {{ kartica.name }}
        <br>
        <b>Type:</b> {{ kartica.types[0] }}
        <br>
        <b>Hit Points:</b>{{ kartica.hp }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn depressed @click='toURL(kartica.cardmarket.url)'>
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PokemonCards',
  props: ['kartica'],

  methods: {
    toURL(url) {
      window.open(url, '_blank')
    },
  }
}
</script>
<style>
.karte {
  background: #56b2ef !important;
  color: rgb(216, 216, 29) !important;
}

.tekst {
  font-size: large;
  color: rgb(244, 240, 240);
}
</style>