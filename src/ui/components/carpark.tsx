import React from "react";
interface Props {
  index: string
  direction: string
  value?: string
}

class ParkingSpot extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <div id={this.props.index} className={`parking-spot direction-${this.props.direction}`}>{this.props.value}</div>
      </React.Fragment>
    );
  }
}

export class Carpark extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  renderSpot(idx: string, direction = "null", value = "") {
    if (idx === this.props.index) {
      direction = this.props.direction
      value = "🚍";
    };
    return <ParkingSpot index={idx} direction={direction} value={value} />;
  }

  render() {
    return (
      <div className="carpark" >
        <div className="parking-row">
          {this.renderSpot('0-4')}
          {this.renderSpot('1-4')}
          {this.renderSpot('2-4')}
          {this.renderSpot('3-4')}
          {this.renderSpot('4-4')}
        </div>
        <div className="parking-row">
          {this.renderSpot('0-3')}
          {this.renderSpot('1-3')}
          {this.renderSpot('2-3')}
          {this.renderSpot('3-3')}
          {this.renderSpot('4-3')}
        </div>
        <div className="parking-row">
          {this.renderSpot('0-2')}
          {this.renderSpot('1-2')}
          {this.renderSpot('2-2')}
          {this.renderSpot('3-2')}
          {this.renderSpot('4-2')}
        </div>
        <div className="parking-row">
          {this.renderSpot('0-1')}
          {this.renderSpot('1-1')}
          {this.renderSpot('2-1')}
          {this.renderSpot('3-1')}
          {this.renderSpot('4-1')}
        </div>
        <div className="parking-row">
          {this.renderSpot('0-0')}
          {this.renderSpot('1-0')}
          {this.renderSpot('2-0')}
          {this.renderSpot('3-0')}
          {this.renderSpot('4-0')}
        </div>
      </div>
    );
  }
};