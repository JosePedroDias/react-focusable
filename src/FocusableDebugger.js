import React from "react";

export default class FocusableDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "",
      opacity: 0
    };
    this.props.gf(this, this.props.gfi);
    this.timer = setInterval(this.onTick, 50);
  }

  onTick = () => {
    if (this.state.opacity > 0) {
      const op = this.state.opacity - 0.1;
      if (op < 0.09) {
        this.setState({ direction: "", opacity: op });
      } else {
        this.setState({ opacity: op });
      }
    }
  };

  notifyFocusChange = delta => {
    let d;
    if (delta[0] === -1) d = "⬅";
    if (delta[0] === 1) d = "➡";
    if (delta[1] === -1) d = "⬆";
    if (delta[1] === 1) d = "⬇";
    if (d) {
      this.setState({
        opacity: 1,
        direction: d
      });
    }
  };

  render() {
    const Tag = this.props.el || "div";
    return (
      <Tag className="debugger" style={{ opacity: this.state.opacity }}>
        {this.state.direction}
      </Tag>
    );
  }
}
