<template>
  <v-container class="ma-0 pa-0">
    <v-layout>
      <VCell/>
      <VCell/>
      <VCell/>
      <VCell/>
      <VCell/>
      <VCell/>
      <VCell/>
      <VCell/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VCell from '@/components/reversi/VCell.vue';
@Component ({
  components: {
    VCell,
  },
})
export default class VRow extends Vue {

}

</script>

<style>

</style>