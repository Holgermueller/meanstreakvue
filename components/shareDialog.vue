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
            <v-btn icon :color="network.color">
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
        url: '#',
        title: 'Check out the newest cartoon from MeanStreak!',
        description: "It's MeanStreak's newest cartoon to underwhelm you.",
        hashtags: 'MeanStreak'
      },
      networks: [
        {
          network: 'Twitter',
          name: 'Twitter',
          class: 'mdi-twitter',
          color: '#00acee'
        },
        {
          network: 'Reddit',
          name: 'Reddit',
          class: 'mdi-reddit',
          color: '#ff4602'
        },
        {
          network: 'telegram',
          name: 'Telegram',
          class: 'mdi-telegram',
          color: '#0088cc'
        },
        {
          network: 'whatsapp',
          name: 'whatsapp',
          class: 'mdi-whatsapp',
          color: '#45eb63'
        },
        {
          network: 'skype',
          name: 'skype',
          class: 'mdi-skype',
          color: '#12aef2'
        },
        {
          network: 'email',
          name: 'Email',
          class: 'mdi-email',
          color: '#333333'
        },
        {
          network: 'pinterest',
          name: 'Pinterest',
          class: 'mdi-pinterest',
          color: '#e6001f'
        },
        {
          network: 'linkedin',
          name: 'Linkedin',
          class: 'mdi-linkedin',
          color: '#067bb6'
        },
        {
          network: 'sms',
          name: 'sms',
          class: 'mdi-message-reply-text',
          color: '#333333'
        },
        {
          network: 'facebook',
          name: 'facebook',
          class: 'mdi-facebook',
          color: '#4967aa'
        }
      ]
    }
  }
}
</script>
