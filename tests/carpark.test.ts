import { Carpark } from "../src/carpark";

describe('A Carpark...', () => {
  const cp = new Carpark();

  it('can validate a given parking spot', () => {
    expect(cp.isValidParkingSpot(0, 0)).toBeTruthy();
    expect(cp.isValidParkingSpot(4, 4)).toBeTruthy();
    expect(cp.isValidParkingSpot(4, 5)).toBeFalsy();
    expect(cp.isValidParkingSpot(6, 6)).toBeFalsy();
    expect(cp.isValidParkingSpot(-1, 4)).toBeFalsy();
  });
});