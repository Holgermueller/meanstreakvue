<template>
  <div id="welcomeToMeanStreak">
    <div class="text-left welcome">
      <h1 class="font-italic font-weight-bold">Welcome to MeanStreak</h1>
      <h3>The cartoon strip no one asked for!</h3>
    </div>
    <v-card class="index-card">
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>
        <h1>Image will appear here!!</h1>
      </v-card-text>
      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful'
const contentfulClient = createClient()

export default {
  components: {},

  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'BlogPostMS',
        order: '-sys.id'
      })
    ])
      .then(([pages]) => {
        return {
          title: pages.items[0].fields.title,
          dateTime: pages.items[0].fields.dateTime,
          pic: pages.items[0].fields.pic,
          authorArtist: pages.items[0].fields.authorArtist
        }
      })
      .catch(console.error)
  },

  filters: {}
}
</script>

<style scoped>
.welcome {
  margin-left: 8%;
}
.index-card {
  width: 75%;
  margin: 5% auto;
}
</style>
