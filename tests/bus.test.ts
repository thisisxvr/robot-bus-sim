import { Bus } from '../src/bus';


describe('A Bus can move...', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus();
  });

  it('3 spaces east', () => {
    bus.move_east();
    bus.move_east();
    bus.move_east();

    expect(bus.east).toEqual(3);
  });

  it('4 spaces east', () => {
    bus.move_east();
    bus.move_east();
    bus.move_east();
    bus.move_east();

    expect(bus.east).toEqual(4);
  });

  it('3 spaces west', () => {
    bus.move_west();
    bus.move_west();
    bus.move_west();

    expect(bus.east).toEqual(-3);
  });

  it('4 spaces west', () => {
    bus.move_west();
    bus.move_west();
    bus.move_west();
    bus.move_west();

    expect(bus.east).toEqual(-4);
  });

  it('3 spaces north', () => {
    bus.move_north();
    bus.move_north();
    bus.move_north();

    expect(bus.north).toEqual(3);
  });

  it('4 spaces north', () => {
    bus.move_north();
    bus.move_north();
    bus.move_north();
    bus.move_north();

    expect(bus.north).toEqual(4);
  });

  it('3 spaces south', () => {
    bus.move_south();
    bus.move_south();
    bus.move_south();

    expect(bus.north).toEqual(-3);
  });

  it('4 spaces south', () => {
    bus.move_south();
    bus.move_south();
    bus.move_south();
    bus.move_south();

    expect(bus.north).toEqual(-4);
  });
});

describe('When facing North, A Bus...', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus(0, 0, "NORTH");
  });

  it('moves north', () => {
    bus.move();
    expect(bus.north).toEqual(1);
  });

  it('turns left to face West', () => {
    bus.turn_left();
    expect(bus.direction).toEqual("WEST");
  });

  it('turns right to face East', () => {
    bus.turn_right();
    expect(bus.direction).toEqual("EAST");
  });
});

describe('When facing South, A Bus...', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus(0, 0, "SOUTH");
  });

  it('moves south', () => {
    bus.move();
    expect(bus.north).toEqual(-1);
  });

  it('turns left to face East', () => {
    bus.turn_left();
    expect(bus.direction).toEqual("EAST");
  });

  it('turns right to face West', () => {
    bus.turn_right();
    expect(bus.direction).toEqual("WEST");
  });
});

describe('When facing East, A Bus...', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus(0, 0, "EAST");
  });

  it('moves east', () => {
    bus.move();
    expect(bus.east).toEqual(1);
  });

  it('turns left to face North', () => {
    bus.turn_left();
    expect(bus.direction).toEqual("NORTH");
  });

  it('turns right to face South', () => {
    bus.turn_right();
    expect(bus.direction).toEqual("SOUTH");
  });
});

describe('When facing West, A Bus...', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus(0, 0, "WEST");
  });

  it('moves west', () => {
    bus.move();
    expect(bus.east).toEqual(-1);
  });

  it('turns left to face South', () => {
    bus.turn_left();
    expect(bus.direction).toEqual("SOUTH");
  });

  it('turns right to face North', () => {
    bus.turn_right();
    expect(bus.direction).toEqual("NORTH");
  });
});


describe('A Bus.can report..', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus(0, 0, "NORTH");
  });

  it('its location and direction', () => {
    const result = {
      x: 0,
      y: 0,
      direction: "NORTH"
    };

    expect(bus.report()).toEqual(result);
  });
});