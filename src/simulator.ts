import { Bus, directions } from "./bus";
import { Carpark } from "./carpark";

/** Simulates the interaction between a bus and carpark. */
export class Simulator {
  private bus: Bus;

  constructor(private cp = new Carpark()) { }

  /** Place a bus in the carpark. */
  place(args: string[]): void | string {
    let x, y, f = '';

    try {
      x = Number.parseInt(args[0]);
      y = Number.parseInt(args[1]);
      f = args[2].trim();
    } catch (e) {
      console.error(e);
    }

    if (typeof x === 'number' && typeof y === 'number' && directions.includes(f) && this.cp.isValidParkingSpot(x, y)) {
      this.bus = new Bus(x, y, f);
    } else {
      return "Invalid arguments.";
    }
  }

  /** Move the bus forward to the next parking spot. */
  move(): void | string {
    if (!this.bus) return;

    // Validate the new parking spot before moving the bus.
    let newCoördinateX = this.bus.north, newCoördinateY = this.bus.east;
    switch (this.bus.direction) {
      case "NORTH":
        newCoördinateX += 1;
        break;
      case "EAST":
        newCoördinateY += 1;
        break;
      case "SOUTH":
        newCoördinateX -= 1;
        break;
      case "WEST":
        newCoördinateY -= 1;
        break;
      default:
        break;
    }

    if (this.cp.isValidParkingSpot(newCoördinateX, newCoördinateY)) this.bus.move();
    else return "Bus cannot move outside the carpark.";
  }

  /** Turn the bus 90° to the left. */
  left() {
    if (!this.bus) return;

    this.bus.turn_left();
  }

  /** Turn the bus 90° to the right. */
  right() {
    if (!this.bus) return;

    this.bus.turn_right();
  }

  /** Get the location of the bus in the carpark, and the direction its facing. */
  report() {
    if (!this.bus) return "No bus in carpark. Place one by providing valid coördinates.";

    return {
      x: this.bus.east,
      y: this.bus.north,
      f: this.bus.direction
    };
  }
}