// モデルクラスに書くのはオセロのロジック
// オセロに必要んclassやデータ構造をモデルに定義する
// コンポーネントはあくまで画面側の話なので
// コンポーネントに処理は書かない

export class Board {

  public rows : Row[];
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new Row(i));
  };
};


export class Row {
  
  public cells: Cell[];
  public num: number;

  constructor(rowNumber: number) {
    this.num = rowNumber
    this.cells = [...Array(8).keys()].map(i => new Cell(i, rowNumber))
  };
}

export class Cell {

  public x: number;
  public y: number;
  public state: CellState = CellState.None;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}


// enum-少ない有限個の状態・決まった値を取るときに使う。
// オセロのマスの状態は、白・黒・なにもないの３つの状態しかないからenumで定義する。
export enum CellState {
  White = 'white',
  Black = 'black',
  None = 'none',
}