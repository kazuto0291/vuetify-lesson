// モデルクラスに書くのはオセロのロジック
// オセロに必要んclassやデータ構造をモデルに定義する
// コンポーネントはあくまで画面側の話なので
// コンポーネントに処理は書かない

export class Board {

  public rows: Row[];
  public turn: CellState = CellState.Black;

  constructor() {
    this.rows = [...Array(8).keys()].map(i => new Row(i));
    this.rows[3].cells[3].state = CellState.White;
    this.rows[4].cells[4].state = CellState.White;
    this.rows[3].cells[4].state = CellState.Black;
    this.rows[4].cells[3].state = CellState.Black;
  }

  public put(p: Point) {
    if (!this.ref(p).isNone) { return }

    const reversedList = this.search(p)
    if (reversedList.length === 0 ) { return }//ひっくり返せないところにはおけない
    reversedList.forEach(p => this.ref(p).state = this.turn);//ひっくり返す

    this.ref(p).state = this.turn;

    this.next();

    if (this.shouldPass()) { this.next(); }
  }
  
  public next() {
    if (this.turn === CellState.Black) {return this.turn = CellState.White }
    if (this.turn === CellState.White) { this.turn = CellState.Black }
  }
  // ref--現在のCell(座標)のstateを返すような関数
  public ref(p: Point): Cell{
    return this.rows[p.y].cells[p.x];
  }

  // serch--ある座標(x, y)に石を置くときに、そこに石をおいたらひっくり返る石の全体の座標を返すメソッド
  public search(p: Point):Point[] {
    if (!this.ref(p).isNone) return[];
    const self =this;
    const list = [];
    // 再起的に探索する
    // _p--探索対象のポイント(座標)
    // next--次の探索対象の座標を受け取る（返す）関数
    // list--ひっくり返せる石の座標リスト
    const _search = (_p: Point, next: (pre: Point) => Point, list: Point[]): Point[] => {
      const _next = next(_p);
      if (!_next.isBoard || self.ref(_next).isNone) {//石を置きた座標から探索して何も石が置いてない座標のときまたはボードの外に出たとき　空の配列を返す
        return [];
      }
      if (self.ref(_next).state !== self.turn) {//石を置いた座標の隣の座標の石の色が自分のturnと違う色のときlistに追加する
        list.push(_next);
        return _search(_next, next ,list)//更に探索を続ける
      }
      return list;
    }
    let result: Point[] = [];
    //concat--配列の結合
    result = result.concat(_search(p, p => new Point(p.x, p.y + 1), []));
    result = result.concat(_search(p, p => new Point(p.x, p.y - 1), []));
    result = result.concat(_search(p, p => new Point(p.x + 1, p.y), []));
    result = result.concat(_search(p, p => new Point(p.x - 1, p.y), []));
    result = result.concat(_search(p, p => new Point(p.x - 1, p.y + 1), []));
    result = result.concat(_search(p, p => new Point(p.x - 1, p.y - 1), []));
    result = result.concat(_search(p, p => new Point(p.x + 1, p.y - 1), []));
    result = result.concat(_search(p, p => new Point(p.x + 1, p.y + 1), []));
    return result;
  }

  public get blacks(): number {
    let count =0;
    this.rows.forEach(r => {
      count += r.blacks;
    })
    return count;
  }

  public get whites():number {
    let count = 0;
    this.rows.forEach( r => {
      count += r.whites
    })
    return count;
  }

  public shouldPass():boolean {
    for (let i = 0; i < 8; i++) {
      for( let j = 0; j < 8; j++) {
        const reversedList = this.search( new Point(i, j));
        console.log(reversedList.length)
        if (reversedList.length > 0) {
          return false;
        }
      }
    }
    return true;
  }
}


export class Row {

  public cells: Cell[];
  public num: number;

  constructor(rowNumber: number) {
    this.num = rowNumber
    this.cells = [...Array(8).keys()].map(i => new Cell(i, rowNumber))
  };

  public get blacks(): number {
    let count = 0;
    this.cells.forEach(c => {
      if(c.isBlack) count++
    })
    return count;
  }

  public get whites(): number {
    let count = 0;
    this.cells.forEach(c => {
      if (c.isWhite) count++
    })
    return count;
  }
}

export class Cell {

  public x: number;
  public y: number;
  public state: CellState = CellState.None;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public get isBlack(): boolean {
    return this.state === CellState.Black;
  }

  public get isWhite(): boolean {
    return this.state === CellState.White;
  }

  public get isNone(): boolean {
    return this.state === CellState.None;
  }
}


// 座標のクラスを作る
export class Point {
  public x: number;
  public y: number;
  constructor(x: number, y:number) {
    this.x = x;
    this.y = y;
  }

  // 座標がボードの外にいるか中にいるか判断する関数
  public get isBoard() {
    return 0 <= this.x && this.x <= 7 && 0 <= this.y && this.y <= 7;
  }
}

// enum-少ない有限個の状態・決まった値を取るときに使う。
// オセロのマスの状態は、白・黒・なにもないの３つの状態しかないからenumで定義する。
export enum CellState {
  White = 'white',
  Black = 'black',
  None = 'none',
}