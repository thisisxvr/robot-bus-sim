import { Bus } from '../src/bus';


describe('A Bus...', () => {
  let bus: Bus;

  beforeEach(() => {
    bus = new Bus();
  });

  it('moves 3 spaces east', () => {
    bus.move_east();
    bus.move_east();
    bus.move_east();

    expect(bus.position).toEqual(3);
  });

  it('moves 4 spaces east', () => {
    bus.move_east();
    bus.move_east();
    bus.move_east();
    bus.move_east();

    expect(bus.position).toEqual(4);
  });

  it('moves 3 spaces west', () => {
    bus.move_west();
    bus.move_west();
    bus.move_west();

    expect(bus.position).toEqual(-3);
  });

  it('moves 4 spaces west', () => {
    bus.move_west();
    bus.move_west();
    bus.move_west();
    bus.move_west();

    expect(bus.position).toEqual(-4);
  });
});