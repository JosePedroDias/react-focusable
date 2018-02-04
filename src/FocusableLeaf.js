import React from "react";

export default class FocusableLeaf extends React.Component {
  constructor(props) {
    super(props);
    this.props.gf(this, this.props.gfi);
  }

  componentWillReceiveProps(props) {
    this.props.gf(this, this.props.gfi);
  }

  notifyFocusChange = delta => {
    return false;
  };

  render() {
    return (
      <div className={this.props.focused ? "focused" : ""}>
        {this.props.children}
      </div>
    );
  }
}
