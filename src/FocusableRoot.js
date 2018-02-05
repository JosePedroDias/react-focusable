import React from "react";

export default class FocusableRoot extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", ev => {
      const kc = ev.keyCode;
      const delta = [0, 0];
      if (kc === 37) {
        delta[0] = -1;
      } else if (kc === 39) {
        delta[0] = 1;
      } else if (kc === 38) {
        delta[1] = -1;
      } else if (kc === 40) {
        delta[1] = 1;
      } else {
        return;
      }
      if (this.focusedEl) {
        this.focusedEl.notifyFocusChange(delta);
      }
    });
  }

  getFocused = (el, idx) => {
    this.focusedEl = el;
  };

  render() {
    let foundFocusable = false;
    return (
      <div>
        {React.Children.map(this.props.children, el => {
          if (el.type && el.type.name.indexOf("Focusable") !== -1) {
            if (foundFocusable) {
              throw new Error(
                "FocusableRoot should only have at most 1 focusable leaf"
              );
            }
            foundFocusable = true;
            return React.cloneElement(el, {
              focused: true,
              selected: 0,
              gf: this.getFocused,
              gfi: 0
            });
          }
          return el;
        })}
      </div>
    );
  }
}
