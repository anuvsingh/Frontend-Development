## Z-index
- The z-index CSS property sets the z-order of a positioned element and its descendants or flex and grid items. 
- Overlapping elements with a larger z-index cover those with a smaller one.
- The z-index can only be applied on which there is position property and also position cannot be static.
- The z-index property is specified as either the keyword *auto* or an *integer*.
- **auto**
    - The box does not establish a new local stacking context. The stack level of the generated box in the current stacking context is 0.
- **integer**
    - This integer is the stack level of the generated box in the current stacking context. The box also establishes a local stacking context. This means that the z-indexes of descendants are not compared to the z-indexes of elements outside this element.