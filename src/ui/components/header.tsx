import React from "react";
interface Props {
  title: string
};

export class Header extends React.Component<Props> {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
};