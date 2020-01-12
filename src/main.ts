import readline from 'readline';
import { Simulator } from './simulator';

// Create readline interface.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Start simulation and open input stream.
const sim = new Simulator();
console.log("Launching simulation... \nType 'QUIT' to exit.");
rl.prompt();

rl.on('line', (cmd) => {
  cmd = cmd.trim().toUpperCase();

  if (cmd.startsWith("PLACE ")) {
    // Validate arguments for PLACE command.
    let x, y, f = '';
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

    try {
      const args = cmd.substr(6).split(',');
      x = Number.parseInt(args[0]);
      y = Number.parseInt(args[1]);
      f = args[2].trim();
    } catch (e) {
      console.error(e);
    }

    if (typeof x === 'number' && typeof y === 'number' && directions.includes(f)) sim.place(x, y, f);
    else console.error("Invalid arguments.");

    rl.prompt();
  } else if (cmd === "MOVE") {
    sim.move();
    rl.prompt();
  } else if (cmd === "LEFT") {
    sim.left();
    rl.prompt();
  } else if (cmd === "RIGHT") {
    sim.right();
    rl.prompt();
  } else if (cmd === "REPORT") {
    const res = sim.report();
    if (typeof res === 'object') console.log(`The bus is parked at (${res.x}, ${res.y}), facing ${res.f}`);
    rl.prompt();
  } else if (cmd === "QUIT") {
    rl.close();
  } else {
    console.error('Unknown command.');
    rl.prompt();
  }
});

// Close stream and exit.
rl.on('close', () => {
  console.log('Exiting simulation...');
  process.exit(0);
});