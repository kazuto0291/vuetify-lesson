<template>
<div class="cell-wrapper">
    <div class="cell"></div>
    <div class="stone"></div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VCell extends Vue {

}

</script>

<style scoped>
.cell {
  height: 64px;
  width: 64px;
  background-color: darkgreen;
  border: 2px solid black;
}

.stone {
  background-color: white;
}
</style>