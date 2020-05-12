<template>
  <v-app dark>
    <v-app-bar color="#379683" app>
      <v-toolbar-title color="#05386b">
        <nuxt-link to="/">
          <strong class="display-1 font-italic font-weight-bold name">
            MeanStreak</strong
          ></nuxt-link
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="#379683" depressed>
        <v-icon>
          {{ 'mdi-twitter' }}
        </v-icon>
      </v-btn>
      <v-btn color="#379683" depressed>
        <v-icon>
          {{ 'mdi-instagram' }}
        </v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs centered grow class="tabs" dark>
          <v-tabs-slider color="black" />
          <v-tab to="/" class="black--text">
            Home
          </v-tab>
          <v-tab to="/previous/previous">
            Previous
          </v-tab>
          <v-tab to="/about" class="black--text">
            About
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer color="#379683" app>
      <span>&copy; {{ new Date().getFullYear() }} | Holger Mueller</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      tab: null
    }
  }
}
</script>

<style scoped>
.name {
  color: black;
}
a {
  text-decoration: none;
}
</style>
