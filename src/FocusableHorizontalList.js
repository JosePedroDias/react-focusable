import React from "react";

export default class FocusableHorizontalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "selected" in props ? props.selected : 0
    };
    this.props.gf(this, this.props.gfi);
  }

  componentWillReceiveProps(props) {
    this.props.gf(this, this.props.gfi);
    if (isFinite(props.selected)) {
      this.setState({ selected: props.selected });
    }
  }

  notifyFocusChange = delta => {
    if (this.focusedEls && this.focusedEls.length > 0) {
      const el = this.focusedEls[this.state.selected];
      const res = el && el.notifyFocusChange(delta);
      if (res) {
        return true;
      }

      if (delta[1] !== 0) {
        if (delta[1] === -1 && "onUp" in this.props) {
          return this.props.onUp(delta);
        }
        if (delta[1] === 1 && "onDown" in this.props) {
          return this.props.onDown(delta);
        }
        return false;
      }

      const nextSelected = this.state.selected + delta[0];
      if (nextSelected < 0) {
        if ("onLeft" in this.props) {
          return this.props.onLeft(delta);
        }
      } else if (nextSelected >= this.focusedEls.length) {
        if ("onRight" in this.props) {
          return this.props.onRight(delta);
        }
      } else {
        this.setState({ selected: nextSelected });
        return true;
      }
    }
  };

  getFocused = (el, idx) => {
    this.focusedEls[idx] = el;
  };

  render() {
    const Tag = this.props.el || "div";
    this.focusedEls = [];
    let foundIdx = -1;
    return (
      <Tag
        className={[
          this.props.klass ? this.props.klass : "",
          this.props.focused ? "focused" : ""
        ]
          .join(" ")
          .trim()}
      >
        {React.Children.map(this.props.children, el => {
          if (
            el.type &&
            el.type.name &&
            el.type.name.indexOf("Focusable") !== -1
          ) {
            ++foundIdx;
            const focused = foundIdx === this.state.selected;
            return React.cloneElement(el, {
              focused: focused,
              selected:
                "selected" in el.props && focused ? el.props.selected : -1,
              gf: this.getFocused,
              gfi: foundIdx
            });
          }
          return el;
        })}
      </Tag>
    );
  }
}
