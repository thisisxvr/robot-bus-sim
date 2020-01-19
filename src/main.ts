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
    const args = cmd.substr(6).split(',');
    const res = sim.place(args);
    if (res) console.error(res);

    rl.prompt();
  } else if (cmd === "MOVE") {
    const res = sim.move();
    if (typeof res === "string") console.error(res);
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
    else console.error(res);
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