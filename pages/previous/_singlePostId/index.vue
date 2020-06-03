<template>
  <div class="post">
    <v-card class="archive-card">
      <v-card-title>
        <h1>
          {{ title }}
        </h1>
      </v-card-title>
      <v-card-subtitle>
        {{ dateTime | changeDateFilter }}
      </v-card-subtitle>
      <v-card-text>
        <v-img
          :src="pic"
          alt="Tired old pic will appear here."
          class="image"
        ></v-img>
      </v-card-text>
      <v-card-actions>
        <nuxt-link to="/previous/previous">
          <v-btn depressed>
            <span class="mdi mdi-arrow-left-bold"></span>
            Back
          </v-btn>
        </nuxt-link>
        <v-spacer></v-spacer>

        <ShareDialog :id="id" />

        <v-spacer></v-spacer>
        <h6>
          By:
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
import ShareDialog from '../../../components/shareDialog'

export default {
  components: {
    ShareDialog
  },

  data() {
    return {
      id: this.$route.fullPath
    }
  },

  asyncData({ data, params }) {
    return Promise.all([contentfulClient.getEntry(params.singlePostId)])
      .then(([page]) => {
        return {
          title: page.fields.title,
          authorArtist: page.fields.authorArtist,
          dateTime: page.fields.dateTime,
          pic: 'https:' + page.fields.pic.fields.file.url
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
.archive-card {
  width: 75%;
  margin: 5% auto;
}
.image {
  margin: 4% auto;
}
a {
  text-decoration: none;
}
</style>
