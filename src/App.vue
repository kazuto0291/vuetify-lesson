<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Vuetyfy</v-toolbar-title>
      <v-content>
        <router-veiw></router-veiw>
      </v-content>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  name: 'App',

  components: {
  },

  data: () => ({
    
  }),
});
</script>
