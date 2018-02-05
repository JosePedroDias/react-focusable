import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import FocusableRoot from "./FocusableRoot";
import FocusableDebugger from "./FocusableDebugger";
import FocusableHorizontalList from "./FocusableHorizontalList";
import FocusableVerticalList from "./FocusableVerticalList";
import FocusableGrid from "./FocusableGrid";
import FocusableLeaf from "./FocusableLeaf";

function log(delta) {
  console.log("log", delta);
}
function stop(delta) {
  console.log("stop", delta);
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
      <FocusableHorizontalList klass="h" selected={0}>
        <FocusableLeaf>A</FocusableLeaf>

        <FocusableGrid klass="grid" itemsPerRow={2} selected={0}>
          <FocusableLeaf>Ba1</FocusableLeaf>
          <FocusableLeaf>Bb1</FocusableLeaf>

          <FocusableLeaf>Bc1</FocusableLeaf>
          <FocusableLeaf>Ba2</FocusableLeaf>

          <FocusableLeaf>Bb2</FocusableLeaf>
        </FocusableGrid>

        <FocusableVerticalList selected={0}>
          <FocusableLeaf>C1</FocusableLeaf>

          <FocusableHorizontalList klass="h" selected={0}>
            <FocusableLeaf>C2a</FocusableLeaf>
            <FocusableLeaf>C2b</FocusableLeaf>
          </FocusableHorizontalList>
        </FocusableVerticalList>

        <FocusableLeaf>D</FocusableLeaf>

        <FocusableHorizontalList
          klass="h"
          selected={0}
          onLeft={log}
          onRight={stop}
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
