<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col
            cols="12">
          <v-text-field
              v-model="name"
              label="Name"
              required
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
        >
          <v-text-field
              v-model="type"
              label="Type"
              required
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
        >
          <v-text-field
              v-model="hp"
              label="Hit Point"
              type="number"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" variant="primary">
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'NewCard',
  data () {
    return {
      name: '',
      type: '',
      hp: '',
    }
  },
  methods: {
    submit: function () {
      this.$emit('success')
    }
  }
}
</script>
