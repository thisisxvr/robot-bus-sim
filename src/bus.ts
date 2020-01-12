export type direction = "NORTH" | "EAST" | "SOUTH" | "WEST";

export class Bus {
  readonly directions = ["NORTH", "EAST", "SOUTH", "WEST"];

  constructor(private _east = 0, private _north = 0, private _direction = "NORTH") { }

  get north() { return this._north; }

  get east() { return this._east; }

  get direction() { return this._direction; }

  private move_north() { this._north += 1; }

  private move_east() { this._east += 1; }

  private move_south() { this._north -= 1; }

  private move_west() { this._east -= 1; }

  /** Moves the bus a step forward in the direction its facing. */
  move() {
    switch (this._direction) {
      case "NORTH": return this.move_north();
      case "EAST": return this.move_east();
      case "SOUTH": return this.move_south();
      case "WEST": return this.move_west();
      default: break;
    }
  }

  /** Rotates the bus 90° to the left. */
  turn_left() {
    const newDirectionIdx = this.directions.indexOf(this._direction) - 1;
    const newDirection = this.directions.slice(newDirectionIdx)[0];   // Using slice() because it accepts negative indices.
    this._direction = newDirection;
  }

  /** Rotates the bus 90° to the right. */
  turn_right() {
    const directions = Array.from(this.directions).reverse();   // Make a copy of directions[] because .reverse() is destructive.

    const newDirectionIdx = directions.indexOf(this._direction) - 1;
    const newDirection = directions.slice(newDirectionIdx)[0];
    this._direction = newDirection;
  }
}