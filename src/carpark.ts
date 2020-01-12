export class Carpark {
  constructor(private height = 5, private width = 5) { }

  /** Validates given coördinates as being within the boundaries of the carpark. */
  isValidParkingSpot(x: number, y: number) { return (x >= 0 && x < this.height) && (y >= 0 && y < this.width); }
}