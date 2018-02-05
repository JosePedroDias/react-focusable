import React from "react";

export default class FocusableLeaf extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.gf && this.props.gfi) {
      this.props.gf(this, this.props.gfi);
    }
  }

  componentWillReceiveProps(props) {
    if (this.props.gf && this.props.gfi) {
      this.props.gf(this, this.props.gfi);
    }
  }

  notifyFocusChange = delta => {
    if (delta[0] === -1 && this.props.onLeft) {
      return this.props.onLeft(delta);
    }
    if (delta[0] === 1 && this.props.onRight) {
      return this.props.onRight(delta);
    }
    if (delta[1] === -1 && this.props.onUp) {
      return this.props.onUp(delta);
    }
    if (delta[1] === 1 && this.props.onDown) {
      return this.props.onDown(delta);
    }
    return false;
  };

  render() {
    const Tag = this.props.el || "div";
    return (
      <Tag
        className={[
          this.props.klass ? this.props.klass : "",
          this.props.focused ? "focused" : ""
        ]
          .join(" ")
          .trim()}
      >
        {this.props.children}
      </Tag>
    );
  }
}
