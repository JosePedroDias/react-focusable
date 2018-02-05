import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import FocusableRoot from "./FocusableRoot";
import FocusableDebugger from "./FocusableDebugger";
import FocusableHorizontalList from "./FocusableHorizontalList";
import FocusableVerticalList from "./FocusableVerticalList";
import FocusableLeaf from "./FocusableLeaf";

function log(delta) {
  console.log("log", delta);
}
function logAndExhaust(delta) {
  console.log("logAndExhaust", delta);
  return true;
}

ReactDOM.render(
  <div>
    <FocusableRoot>
      {/* this root exists only to display the directional keys in the DOM */}
      <FocusableDebugger />
    </FocusableRoot>
    <FocusableRoot>
      {/* actual root driving keys to focusable offspring */}
      <FocusableHorizontalList selected={0}>
        <FocusableLeaf>A</FocusableLeaf>
        <FocusableLeaf>B</FocusableLeaf>
        <FocusableVerticalList selected={0}>
          <FocusableLeaf>C1</FocusableLeaf>
          <FocusableHorizontalList selected={0}>
            <FocusableLeaf>C2a</FocusableLeaf>
            <FocusableLeaf>C2b</FocusableLeaf>
          </FocusableHorizontalList>
        </FocusableVerticalList>
        <FocusableLeaf>D</FocusableLeaf>
        <FocusableHorizontalList
          selected={0}
          onLeft={log}
          onRight={logAndExhaust}
        >
          <FocusableLeaf>E2a</FocusableLeaf>
          <FocusableLeaf>E2b</FocusableLeaf>
        </FocusableHorizontalList>
        <FocusableLeaf>F</FocusableLeaf>
      </FocusableHorizontalList>
    </FocusableRoot>
  </div>,
  document.querySelector("#root")
);
