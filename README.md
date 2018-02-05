# react-focusable

_WORK IN PROGRESS_

Trying to manage keyboard navigation hierarchically with React alone!

The use case for this solution is smart tvs and consoles.

![demo gif](focusable.gif "demo gif")

Spawn one instance of `FocusableRoot` somewhere.  
It must have at most 1 direct focusable (makes sense it is a focusable container. These exist now: `FocusableVerticalList`, `FocusableHorizontalList` and `FocusableGrid`).  
You can compose containers as needed and represent leaf notes (bottons, packshots, etc) via `FocusableLeaf`s.  
Focusables can be given props `onUp`, `onDown`, `onLeft`, `onRight`. These receive the respective direction when no natural child can handle the direction change. If such function returns true, the direction is exhausted there, otherwise it is passed to the parent (default behaviour).
`FocusableGrid` requires `itemsPerRow` attribute. Optional attributes: `canWrapLeft`, `canWrapRight`.  
Created `FocusableDebugger` because why not? Displays received `delta` direction, which is renders as an arrow emoji.

## TODO

* create `FocusableSpacial` (selecting chidren based on spacial position)
* create a simple way of delegating control to a different part of the tree (this one is hard...)
* would be great to refocus on mouse enter too (to seamlessly move from mouse to keyboard/remote)
