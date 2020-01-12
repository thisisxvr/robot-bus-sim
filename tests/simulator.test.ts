import { Simulator } from "../src/simulator";

describe('The robot bus simulator...', () => {
  const sim = new Simulator();

  it('places a robot in a valid position', () => {
    const res = { x: 2, y: 3, f: "NORTH" };
    sim.place(2, 3, "NORTH");
    expect(sim.report()).toEqual(res);
  });

  it('prevents placements in invalid positions', () => {
    const res = "Bus cannot be placed at invalid coördinates.";
    const consoleSpy = jest.spyOn(console, 'error');
    sim.place(-1, 0, "NORTH");
    expect(consoleSpy).toHaveBeenCalledWith(res);
  });

  it('informs when the carpark is empty', () => {
    const sim = new Simulator();
    const res = "No bus in carpark. Place one by providing valid coördinates.";
    const consoleSpy = jest.spyOn(console, 'error');
    sim.report();
    expect(consoleSpy).toHaveBeenCalledWith(res);
  });

  it('steers left', () => {
    const res = { x: 2, y: 3, f: "WEST" };
    sim.left();
    expect(sim.report()).toEqual(res);
  });

  it('steers right', () => {
    const res = { x: 2, y: 3, f: "EAST" };
    sim.right();
    sim.right();
    expect(sim.report()).toEqual(res);
  });

  it('moves forward', () => {
    const res = { x: 3, y: 3, f: "EAST" };
    sim.move();
    expect(sim.report()).toEqual(res);
  });

  it('prevents the bus from exiting the carpark', () => {
    let res = { x: 0, y: 0, f: "SOUTH" };
    const err = "Bus cannot move outside the carpark.";
    const consoleSpy = jest.spyOn(console, 'error');
    sim.place(0, 0, "SOUTH");
    sim.move();

    expect(sim.report()).toEqual(res);
    expect(consoleSpy).toHaveBeenCalledWith(err);

    res = { x: 1, y: 0, f: "EAST" };
    sim.left();
    sim.move();

    expect(sim.report()).toEqual(res);
  });

  it('ignores commands until a valid PLACE command is executed', () => {
    const sim = new Simulator();
    sim.move();
    sim.left();
    sim.place(-1, 10, "NORTH");

    const err = "Bus cannot be placed at invalid coördinates.";
    const consoleSpy = jest.spyOn(console, 'error');
    expect(consoleSpy).toHaveBeenCalledWith(err);

    sim.right();
    sim.place(2, 3, "SOUTH");
    const res = { x: 2, y: 3, f: "SOUTH" };
    expect(sim.report()).toEqual(res);
  });
});
