<template>
  <v-app id="inspire">
    <v-app-bar app color="yellow" flat>
      <v-avatar class="mr-10" color="grey darken-1" size="70">
        <img src="https://m.media-amazon.com/images/I/71Lbl3+oWpL.jpg"></v-avatar>
      <v-spacer></v-spacer>
      <v-tabs centered class="ml-n9" color="white darken-1">
        <v-tab v-for="link in links" :key="link.text" :to="link.path">
          {{ link.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links: [
      {
        text: 'About us',
        path: '/'
      },
      {
        text: 'Pokemon Cards',
        path: '/cards'
      },
      {
        text: 'New Card',
        path: '/newcard'
      },

    ],
  }),
};
</script>