import { Bus } from "../src/bus";
import { Carpark } from "../src/carpark";

/** Simulates the interaction between a bus and carpark. */
export class Simulator {
  private bus: Bus;

  constructor(private cp = new Carpark()) { }

  /** Place a bus in the carpark. */
  place(east: number, north: number, facing: string) {
    if (this.cp.isValidParkingSpot(east, north)) this.bus = new Bus(east, north, facing);
    else console.error("Bus cannot be placed at invalid coördinates.");
  }

  /** Move the bus forward to the next parking spot. */
  move() {
    if (!this.bus) return;

    // Validate the new parking spot before moving the bus.
    let [newCoördinateX, newCoördinateY] = [this.bus.north, this.bus.east];
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
    else console.error("Bus cannot move outside the carpark.");
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
    if (!this.bus) return console.error("No bus in carpark. Place one by providing valid coördinates.");

    return {
      x: this.bus.east,
      y: this.bus.north,
      direction: this.bus.direction
    };
  }
}