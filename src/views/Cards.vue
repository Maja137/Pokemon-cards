<template>
  <v-container class="cards">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search by name" single-line hide-details
          :loading="isLoading"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="types" append-icon="mdi-magnify" label="Search by type" single-line hide-details
          :loading="isLoadingTypes"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="kartica in kartice" :key="kartica.name" cols="6" md="3">
        <pokemon-cards :kartica="kartica"></pokemon-cards>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-pagination v-model="page" total-visible="8" :length="Math.ceil(totalKartice / perPage)">
        </v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PokemonCards from '../components/PokemonCards.vue';

export default {
  components: {
    PokemonCards
  },
  //eslint-disable-next-line 
  name: 'Cards',

  data() {
    return {
      kartice: [],
      page: 1,
      totalKartice: 0,
      perPage: 20,
      search: '',
      types: '',
      isLoading: false,
      isLoadingTypes: false,
    }
  },

  created() {
    console.log('created')
    this.getData();
  },

  methods: {
    getData() {
      let api = "https://api.pokemontcg.io/v2/cards/"
      this.axios.get(api, {
        params: {
          'offset': this.perPage * (this.page - 1),
          'name': this.search,
          'types': this.types
        }
      }).then((response) => {
        console.log(response.data)
        this.kartice = response.data.data
        this.totalKartice = response.data.count
        this.isLoading = false
        this.isLoadingTypes = false
      })
    },
    
    fetchEntriesDebounced() {
      clearTimeout(this._searchTimerId)
      this._searchTimerId = setTimeout(() => {
        this.getData()
      }, 500)
    },
    searchEntries() {
      this.kartice = []
      this.page = 1
      this.fetchEntriesDebounced()
    }
  },

  watch: {
    page: function () {
      this.getData();
    },
    search(val) {
      if (!val) {
        return
      }
      this.isLoading = true
      this.searchEntries()
    },
    types(val) {
      if (!val) {
        return
      }
      this.isLoadingTypes = true
      this.searchEntries();
    }
  }
}
</script>
