<template>
  <div class="previous-card">
    <v-hover v-slot="{ hover }">
      <v-card class="archive-card" :elevation="hover ? 12 : 2">
        <v-card-title
          >{{ title }}
          <v-spacer></v-spacer>
          <v-btn depressed :to="'/previous/' + id"
            >Check it out! <span class="mdi mdi-arrow-right-bold"></span>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>
          {{ dateTime | changeDateFilter }}
        </v-card-subtitle>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
const moment = require('moment')

export default {
  props: {
    id: {
      type: String
    },

    title: {
      type: String
    },

    dateTime: {
      type: String
    }
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
  margin: 0 auto;
  width: 85%;
}
</style>
