<template>
<div class="cell-wrapper">
    <div class="cell"></div>
    <div class="stone"></div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Cell } from '@/models/reversi.ts';

@Component
export default class VCell extends Vue {


  @Prop({required: true})
  // 必須のPropを定義する。
  // !(ビックリマークはnull許可・undefindを許可する型)
  public cell!: Cell;
}


</script>

<style scoped>
.cell-wrapper {
  position: relative;
}

.cell {
  height: 64px;
  width: 64px;
  background-color: darkgreen;
  border: 2px solid black;
}

.stone {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.white-stone {
  background-color: white;
}

.black-stone {
  background-color: black;
}

</style>