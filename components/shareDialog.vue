<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
          Share
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Share:</v-card-title>
        <v-card-actions>
          <v-btn>Twitter</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Instagram</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Facebook</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
