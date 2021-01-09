<template>
  <v-container>
    <v-layout
     justify-center
    >
    <VBoard
      :board="board"
      />
    </v-layout>
    <v-layout
    justify-center>
      <h2 class="mt-5">{{current}}</h2>
    </v-layout>
    <v-layout
    justify-center>
      <h2 class="mt-5 mr-5">黒の数：{{blacks}}</h2>
      <h2 class="mt-5">白の数：{{whites}}</h2>
    </v-layout>

  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VBoard from '@/components/reversi/VBoard.vue';
import { Board, CellState } from '@/models/reversi';

@Component ({
  components: {
    VBoard,
  },
})
export default class VGame extends Vue {

  public board: Board = new Board();

  public get current() {
    if (this.board.turn === CellState.White) {
      return '白色の手番'
    } else {
      return '黒色の手番'
    }
  }

  public get blacks() {
    return this.board.blacks;
  }

  public get whites() {
    return this.board.whites;
  }
}

</script>

<style>

</style>