<template>
  <div id="welcomeToMeanStreak">
    <div class="text-left welcome">
      <h1 class="font-italic font-weight-bold">Welcome to MeanStreak</h1>
      <h3>The cartoon strip no one asked for!</h3>
    </div>
    <v-card class="index-card">
      <v-card-title class="headline"> {{ title }} </v-card-title>
      <v-card-subtitle>
        {{ dateTime | changeDateFilter }}
      </v-card-subtitle>

      <v-card-text>
        <h1>Image will appear here!!</h1>

        <v-img
          :src="pic"
          alt="Today's awesome cartoon/crime against nature and humanity seems to be experiencing technical difficulties. We apologize for any inconvenience or trauma this may have caused."
          class="image"
        >
        </v-img>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <h6>{{ authorArtist }}</h6>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const contentfulClient = createClient()
const moment = require('moment')

export default {
  components: {},

  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'blogPostMs',
        order: '-sys.createdAt'
      })
    ])
      .then(([pages]) => {
        return {
          title: pages.items[0].fields.title,
          dateTime: pages.items[0].fields.dateTime,
          authorArtist: pages.items[0].fields.authorArtist,
          pic: 'https:' + pages.items[0].fields.pic.fields.file.url
        }
      })
      .catch(console.error)
  },

  filters: {
    changeDateFilter: value => {
      return moment(value).format('dddd, Do MMMM YYYY, LT')
    }
  }
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
.image {
  margin: 4% auto;
}
</style>
