<template>
  <div id="previous">
    <div class="page-title">
      <h1>Archives</h1>
      <p>Check out previous posts here!*</p>

      <small
        >* We cannot guarantee you'll find any of these posts
        entertaining.</small
      >
    </div>

    <div v-for="post in posts" :key="post.id">
      <v-card class="archive-card">
        <v-card-title>{{ post.title }} </v-card-title>
        <v-card-subtitle>
          {{ post.dateTime }}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <p>Check it out! =></p>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful'
const contentfulClient = createClient()

export default {
  asyncData({ data }) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: 'blogPostMs',
        order: '-sys.createdAt'
      })
    ]).then(([pages]) => {
      return {
        posts: pages.items.map(post => {
          return {
            id: post.sys.id,
            title: post.fields.title,
            dateTime: post.fields.dateTime,
            authorArtist: post.fields.authorArtist
          }
        })
      }
    })
  },

  filters: {}
}
</script>

<style scoped>
.page-title {
  margin: 4% 8%;
}
.archive-card {
  margin: 0 auto;
  width: 85%;
}
</style>
