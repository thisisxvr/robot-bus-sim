import React from "react";
interface Props {
  title?: string
};

export class CommandLine extends React.Component<Props> {
  render() {
    return (
      <div className="cmd">
        {/* <input type="text" onKeyDown={this.handleKeyDown}/> */}
      </div>
    );
  }
};