## CSS Grid
Setting a container's display to grid will make all children grid items.
- **Ex**: container{ display: grid; }

### Grid Model
There is an image named Grid Model, go and see.

### Grid Template
They define the lines and track sizing.
- **grid-template-areas**: specifies named grid areas, establishing the cells in the grid and assigning them names.
- **grid-template-rows**: defines the line names and track sizing functions of the grid rows.
- **grid-template-columns**: defines the line names and track sizing functions of the grid columns.

### Grid Gaps
They define the gaps between the lines. It sets the gaps *(also called gutters)* between rows and columns. This property applies to multi-column, flex, and grid containers.
- column-gap
- row-gap
- gap

### Grid Columns
Defines an item's starting & ending position inside the column.
- **grid-column-start: line_number;** Specifies on which column to start displaying the item.
- **grid-column-end: line_number;** Specifies on which column-line to stop displaying the item, or how many columns to span.
- **Shorthand Property**
    - grid-column: *start_line_number/end_line_number*

### Grid Rows
Defines an item's starting & ending position inside the row.
- **grid-row-start: line_number;** Specifies on which row to start displaying the item.
- **grid-row-end: line_number;** Specifies on which row-line to stop displaying the item, or how many rows to span.
- **Shorthand Property**
    - grid-row: *start_line_number/end_line_number*

