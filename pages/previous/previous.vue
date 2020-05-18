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

    <PreviousCard
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :dateTime="post.dateTime"
    />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful'
const contentfulClient = createClient()
import PreviousCard from './previousCard'

export default {
  components: {
    PreviousCard
  },

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
            dateTime: post.fields.dateTime
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
</style>
