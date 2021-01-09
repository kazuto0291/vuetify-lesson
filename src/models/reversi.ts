// モデルクラスに書くのはオセロのロジック
// オセロに必要んclassやデータ構造をモデルに定義する
// コンポーネントはあくまで画面側の話なので
// コンポーネントに処理は書かない

export class Board {

  public rows : Row[];
  constructor() {
    this.rows = [...Array(8).keys()].map(i => new Row(i));
    this.rows[3].cells[3].state = CellState.White;
    this.rows[4].cells[4].state = CellState.White;
    this.rows[3].cells[4].state = CellState.Black;
    this.rows[4].cells[3].state = CellState.Black;
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

  public get isBlack() {
    return this.state === CellState.Black;
  }

  public get isWhite() {
    return this.state === CellState.White;
  }
}


// enum-少ない有限個の状態・決まった値を取るときに使う。
// オセロのマスの状態は、白・黒・なにもないの３つの状態しかないからenumで定義する。
export enum CellState {
  White = 'white',
  Black = 'black',
  None = 'none',
}