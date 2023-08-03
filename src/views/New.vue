<template>
  <div class="new">
  <v-row>
    <v-dialog v-model="addDialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green lighten-2" dark v-bind="attrs" v-on="on">
          Add new card
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add new card
        </v-card-title>

        <v-card-text>
          <new-form @success="addDialog = false; successAlert = true;"></new-form>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <v-alert type="success" v-model="successAlert" dismissible>
        Successfuly saved.
      </v-alert>
    </v-col>
  </v-row>
</div>
</template>

<script>
import NewCard from '../components/NewCard.vue';

export default {
  //eslint-disable-next-line 
  name: 'New',

  Components: {
    NewCard
  },
  data() {
    return {
      addDialog: false,
      successAlert: false,
    }
  },
}
</script>
