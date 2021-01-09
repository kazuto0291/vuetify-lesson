<template>
  <v-container class="ma-0 pa-0">
    <v-layout>
      <!-- ④ -->
      <VCell
        v-for="cell in row.cells"
        :key="`${cell.x}-${cell.y}`"
        :cell="cell"
        @put="onPutEvent"
      />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import VCell from '@/components/reversi/VCell.vue';
import { Row, Point } from '@/models/reversi';//①

@Component ({
  components: {
    VCell,
  },
})
export default class VRow extends Vue {

  @Prop({required: true})// ②
  public row!: Row;//③

  // VCellコンポーネントのputイベントを上のVBoardにも伝えるためにEmitを使う
  @Emit('put')
  public put(p: Point) {

  }

  public onPutEvent(p: Point) {
    this.put(p);
  }

}

</script>

<style>

</style>