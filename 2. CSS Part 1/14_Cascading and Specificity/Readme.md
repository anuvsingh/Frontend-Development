## What is Cascade in CSS?
The CSS cascade algorithm's job is to select CSS declaration in order to determines in order to determine the correct values for CSS properties.
- The **cascade** is an algorithm that defines how user agents combine property values originating from different sources. The cascade defines the origin and layer that takes precedence when declarations in more than one origin, cascade layer, or scope block set a value for a property on an element.


## CSS Specificity
If there are two or more CSS rules that point to the same element, the selector with the highest specificity will "win", and its style declaration will be applied to that HTML element.
### Specificity Hierarchy
Every CSS selector has a position in the specificity hierarchy are: 
### Specificity Hierarchy

| Priority                          | Example                       | Description                                                                 |
|-----------------------------------|--------------------------     |-----------------------------------------------------------------------------|
| **Inline style**                  | `<h1 style="color: pink;">`   | Highest priority, directly applied with the `style` attribute               |
| **Id selectors**                  | `#navbar`                     | Second highest priority, identified by unique `id` attribute of an element  |
| **Classes and pseudo-classes**    | `.test`, `:hover`             | Third highest priority, targeted using class names                          |
| **Attributes**                    | `[type="text"]`               | Low priority, applies to attributes                                         |
| **Elements and pseudo-elements**  | `h1`, `::before`, `::after`   | Lowest priority, applies to HTML elements and pseudo-elements               |

### More Specificity Rules
- **Equal specificity: the latest rule wins** - If the same rule is written twice into the external style sheet, then the latest rule wins
- ID selectors have a higher specificity than attribute selectors.
- **Contextual selectors are more specific than a single element selector** - The embedded style sheet is closer to the element to be styled.
- **A class selector beats any number of element selectors** - a class selector such as .intro beats h1, p, div, etc.
- **The universal selector and inherited values** - The universal selector (*) and inherited values do not impact the specificity weight value.

## ! important
To show the most specific thing in document.
**Example**
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}