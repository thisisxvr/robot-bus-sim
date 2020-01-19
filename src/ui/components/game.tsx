import React, { KeyboardEvent } from "react";
import { Carpark } from './carpark';
import { Simulator } from '../../simulator';

interface Props { }

interface State {
  sim: Simulator
  error: string
  position: string
  direction: string
}

export class Game extends React.Component<Props, State> {
  private input: React.RefObject<any>;

  constructor(props: Props) {
    super(props);

    this.input = React.createRef();
    this.state = {
      sim: new Simulator(),
      error: " ",
      position: " ",
      direction: " ",
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.keyCode !== 13) return;

    // If the user has hit the return key, process the command.
    const target = e.target as HTMLInputElement;
    const cmd = target.value.trim().toUpperCase();

    if (cmd.startsWith("PLACE ")) {
      const args = cmd.substr(6).split(',');
      let err = this.state.sim.place(args);

      if (typeof err === "string") {
        this.setState({ ...this.state, error: err });
      } else {
        const res = this.state.sim.report();
        if (typeof res === "string") this.setState({ ...this.state, error: res });
        else {
          const { x, y, f } = res;
          this.setState({ ...this.state, position: `${x}-${y}`, direction: f });
        }
      }

    } else if (cmd === "MOVE") {
      const res = this.state.sim.move();

      if (typeof res === "string") {
        this.setState({ ...this.state, error: res });
      } else {
        const pos = this.state.sim.report();
        if (typeof pos === "string") this.setState({ ...this.state, error: pos });
        else this.setState({ ...this.state, position: `${pos.x}-${pos.y}`, direction: pos.f, error: " " });
      }
    } else if (cmd === "LEFT") {
      const res = this.state.sim.left();
      this.updateGame(res);
    } else if (cmd === "RIGHT") {
      const res = this.state.sim.right();
      this.updateGame(res);
    } else if (cmd === "REPORT") {
      const res = this.state.sim.report();
      if (typeof res === 'object') {
        this.setState({ ...this.state, error: `The bus is parked at (${res.x}, ${res.y}), facing ${res.f}` });
      } else {
        this.setState({ ...this.state, error: res });
      }
    } else {
      this.setState({ ...this.state, error: 'Unknown command.' });
    }

    target.value = '';
  }

  updateGame(res: any) {
    if (typeof res === "string") {
      this.setState({ ...this.state, error: res });
    } else if (!res) {
      res = this.state.sim.report();
    }

    const { x, y, f } = res;
    this.setState({ ...this.state, position: `${x}-${y}`, direction: f, error: " " });
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    return (
      <React.Fragment>
        <Carpark index={this.state.position} direction={this.state.direction} />
        <div className="header"><h2 className="info">{this.state.error}</h2></div>
        <input type="text" ref={this.input} onKeyDown={this.handleKeyDown} placeholder="Enter a command..." />
      </React.Fragment>
    );
  }
}