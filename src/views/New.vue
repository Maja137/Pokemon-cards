<template>
  <container>
    <v-row>
      <v-col cols="12">
        <br>
        <h4 style="text-align: center;">Ako želite dodati novu karticu u našu bazu, kliknite na gumb i upišite potrebne podatke.</h4>
        <br>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5"
    ></v-col>
      <v-col cols="4">
        <v-dialog v-model="addDialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green lighten-2" dark v-bind="attrs" v-on="on">
              Add new card
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h4 grey lighten">
              Add new card
            </v-card-title>

            <v-card-text>
              <NewCard @success="addDialog = false; successAlert = true;"></NewCard>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="3"
    ></v-col>
      <v-col cols="12">
        <v-alert type="success" v-model="successAlert" dismissible>
          Successfuly saved.
        </v-alert>
      </v-col>
    </v-row>
  </container>
</template>

<script>
import NewCard from '../components/NewCard.vue';

export default {
    Components: {
        NewCard
    },
    //eslint-disable-next-line 
    name: 'New',
    data() {
        return {
            addDialog: false,
            successAlert: false,
        };
    },
    components: { NewCard }
}
</script>
