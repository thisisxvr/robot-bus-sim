
export class Bus {
  private _north: number;
  private _east: number;
  private _direction: string;
  readonly directions = ["NORTH", "EAST", "SOUTH", "WEST"];

  constructor(x = 0, y = 0, facing = "NORTH") {
    this._north = y;
    this._east = x;
    this._direction = facing;
  }

  get north() { return this._north; }

  get east() { return this._east; }

  get direction() { return this._direction; }

  move() {
    switch (this._direction) {
      case "NORTH":
        this.move_north();
        break;
      case "EAST":
        this.move_east();
        break;
      case "SOUTH":
        this.move_south();
        break;
      case "WEST":
        this.move_west();
        break;
      default:
        break;
    }
  }

  move_north() { this._north++; }

  move_east() { this._east++; }

  move_south() { this._north--; }

  move_west() { this._east--; }

  turn_left() {
    const facing = this._direction;
    const newDirection = this.directions.slice(this.directions.indexOf(facing) - 1)[0];
    this._direction = newDirection;
  }

  turn_right() {
    const facing = this._direction;
    const directions = this.directions;
    directions.reverse();
    const newDirection = directions.slice(directions.indexOf(facing) - 1)[0];
    this._direction = newDirection;
  }

  report() {
    return {
      x: this._east,
      y: this._north,
      direction: this._direction
    };
  }
}