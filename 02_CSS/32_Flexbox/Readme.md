## Flexbox
Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces.

### Why Flexbox?
- Vertically center a block of content inside its parent.
- Make all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
- Make all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.

### Flex-Direction
It sets how flex items are placed in the flex container, along which axix and direction.
- flexbox-direction: row; *(main axis, left to right)*
- flexbox-direction: row-reverse; *(main axis, right to left)*
- flexbox-direction: column; *(main axis, top to bottom)*
- flexbox-direction: column-reverse; *(main axis, bottom to top)*

### Justify Content
Tells how the browser distributes space between and around content items along the main-axis.
- justify-content: flex-start;
- justify-content: flex-end;
- justify-content: center;
- justify-content: space-between;
- justify-content: space-around;
- justify-content: space-evenly;
- and many more...

### Flex Wrap
Sets whether flex items are forced onto one line or can wrap onto multiple lines.
- flex-wrap: nowrap;
- flex-wrap: wrap;
- flex-wrap: wrap-reverse;
- and many more...

### Align Items
Distributes our items along the cross axis.

### Align Content
It sets the distribution of space between and around content items along a flexbox's cross-axis.
- align-content: flex-start or flex-end or center;
- align-content: space-between or space-around or evenly;
- align-content: baseline;

### Align Self
Aligns an item along the cross axis. It is only applied on individual.
- align-self: flex-start;
- align-self: flex-end;
- align-self: center;
- align-self: baseline;

### Flex Sizing
- flex basis: it sets the initial main size of a flex item.
    - flex-basis: 100px;
- flex grow: it specifies how much of the flex container's remaining space should be assigned to the flex item's main size.
    - flex-grow: 1;
- flex shrink: it sets the flex shrink factor of a flex item.
    - flex-shrink: 1;

### Flex Shorthand
- flex-grow|flex-shrink|flex-basis
    - **Ex:** flex: 2 2 100px;
- flex-grow|flex-basis
    - **Ex:** flex: 2 100px;
- flex-grow(unitless)
    - **Ex:** flex: 2;
- flex-basis
    - **Ex:** flex: 100px;