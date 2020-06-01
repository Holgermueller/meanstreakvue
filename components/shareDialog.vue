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
          <ShareNetwork
            v-for="(network, index) in networks"
            :key="index"
            :network="network.network"
            :url="sharing.url"
            :title="sharing.title"
            :hashtags="sharing.hashtags"
          >
            <v-btn icon :class="network.class">
              <v-icon>{{ network.class }}</v-icon>
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
      dialog: false,
      sharing: {
        url: 'url',
        title: 'Check out the newest cartoon from MeanStreak!',
        hashtags: 'MeanStreak'
      },
      networks: [
        {
          network: 'Twitter',
          name: 'Twitter',
          class: 'mdi-twitter'
        },
        {
          network: 'Reddit',
          name: 'Reddit',
          class: 'mdi-reddit'
        },
        {
          network: 'whatsapp',
          name: 'whatsapp',
          class: 'mdi-whatsapp'
        },
        {
          network: 'skype',
          name: 'skype',
          class: 'mdi-skype'
        },
        {
          network: 'pinterest',
          name: 'Pinterest',
          class: 'mdi-pinterest'
        },
        {
          network: 'linkedin',
          name: 'Linkedin',
          class: 'mdi-linkedin'
        },
        {
          network: 'facebook',
          name: 'facebook',
          class: 'mdi-facebook'
        }
      ]
    }
  }
}
</script>
