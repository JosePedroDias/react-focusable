import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import FocusableRoot from "./FocusableRoot";
import FocusableHorizontalList from "./FocusableHorizontalList";
import FocusableVerticalList from "./FocusableVerticalList";
import FocusableLeaf from "./FocusableLeaf";

ReactDOM.render(
  <FocusableRoot>
    <FocusableHorizontalList selected={0}>
      <FocusableLeaf>A</FocusableLeaf>
      <FocusableLeaf>B</FocusableLeaf>
      <FocusableVerticalList selected={0}>
        <FocusableLeaf>C1</FocusableLeaf>
        <FocusableLeaf>C2</FocusableLeaf>
      </FocusableVerticalList>
    </FocusableHorizontalList>
  </FocusableRoot>,
  document.body
);
