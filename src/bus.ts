export class Bus {
  private _position: number;

  constructor(position = 0) {
    this._position = position;
  }

  move_east() {
    this._position++;
  }

  move_west() {
    this._position--;
  }

  get position() { return this._position; }
}