### Inline Elements
- Takes up only necessary with.
- Don't start from new line.
- Only use as much horizontal space as required by the content. Do not accept width and height CSS properties.
- Margins will work horizontally, but not vertically.
- Padding works on all sides, but the top and bottom may overlap other elements.

### Block Elements
- Takes up the full-width available(whole block).
- Start from new line.
- Take up as much horizontal space as possible *(the full width of the container or browser window if there is no container).*
- Will respect width and height CSS properties.
- Horizontal and vertical margins both work.

## Display Property
It sets whether an element is treated as a block or inline element and the layout used for its children.
**Example**
    - display: block;
    - display: inline-block; : style will be applied as block element but elements will behave like inline.
    - display: none;
    - display: flex;
    - display: grid;