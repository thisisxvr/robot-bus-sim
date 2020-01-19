import * as React from "react";
import { render } from "react-dom";
import { Header } from './components/Header';
import { Game } from './components/game';

const App: React.FunctionComponent = () => (
  <React.Fragment>
    <Header title="robot-bus-sim v0.1.0" />
    <Game />
  </React.Fragment>
);

render(<App />, document.getElementById("root"));