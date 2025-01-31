# robot-bus-sim
Simulates a robot operated bus moving in a carpark, of dimensions 5 units x 5 units. 

There are no other obstructions in the carpark. The bus is free to roam around the carpark, but is prevented from exiting. The application accepts a fixed set of [commands](#Commands). All arguments are required.

## Dependencies
- TypeScript
- React
- Jest
- ts-node

## Installation
```
$ git clone
$ npm install
```

### CLI:
`$ npm run-script launch`
### Web UI:
`$ npm run-script serve` and browse to `http://localhost:1234`.

## Commands
- `PLACE {X,Y,F}` will put the bus in the carpark in position {(X,Y)} and facing {NORTH, SOUTH, EAST or WEST}.
- `MOVE` will move the bus one unit forward in the direction it is currently facing.
- `LEFT` and `RIGHT` will rotate the bus 90 degrees in the specified direction without changing the position of the bus.
- `REPORT` will announce the X, Y and F of the bus.
- The first valid command to the bus must be a PLACE command. After that, any sequence of commands may be issued, in any order, including another PLACE command. The app discards all commands in the sequence until a valid PLACE command has been executed.
- The origin (0,0) is the SOUTH-WEST most corner.
- The bus cannot exit the carpark during movements. This also includes the initial placement of the bus.

### Example
```
> PLACE 1,2,EAST
> MOVE
> MOVE
> LEFT
> MOVE
> REPORT
The bus is parked at (3, 3), facing NORTH
```

## License
MIT