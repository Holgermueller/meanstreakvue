<template>
  <div class="post">
    <v-card>
      <v-card-title>
        <h1>
          {{ title }}
        </h1>
      </v-card-title>
      <v-card-subtitle>
        {{ dateTime }}
      </v-card-subtitle>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <h6>
          {{ authorArtist }}
        </h6>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
const moment = require('moment')
import { createClient } from '~/plugins/contentful'
const contentfulClient = createClient()

export default {
  asyncData({ data, params }) {
    return Promise.all([contentfulClient.getEntry(params.singlePostId)])
      .then(([page]) => {
        return {
          title: page.fields.title,
          authorArtist: page.fields.authorArtist,
          dateTime: page.fields.dateTime
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped></style>
