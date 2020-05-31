<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">
          Share!
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Share:</v-card-title>
        <v-card-actions>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-reddit</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-snapchat</v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-spacer></v-spacer>

          <ShareNetwork
            network="facebook"
            title="Check out the newest cartoon from MeanStreak!"
            url="#"
            hashtags="MeanStreak"
          >
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </ShareNetwork>
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
