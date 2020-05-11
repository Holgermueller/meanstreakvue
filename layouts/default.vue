<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>
        <nuxt-link to="/">
          <strong class="display-1 font-italic font-weight-bold name">
            MeanStreak</strong
          ></nuxt-link
        >
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn depressed>
        <v-icon>
          {{ 'mdi-twitter' }}
        </v-icon>
      </v-btn>
      <v-btn depressed>
        <v-icon>
          {{ 'mdi-instagram' }}
        </v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs centered grow class="tabs">
          <v-tab>
            <nuxt-link to="/"> Home</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/previous/previous">Previous</nuxt-link>
          </v-tab>
          <v-tab>
            <nuxt-link to="/about">About</nuxt-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} | Holger Mueller</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavMenu from './navmenu'

export default {
  components: {
    NavMenu
  },

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
