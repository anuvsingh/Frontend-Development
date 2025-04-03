## Selectors
The CSS selectors module defines the patterns to select elements to which a set of CSS rules are then applied along with their specificity. The CSS selectors module provides us with more than 60 selectors and five combinator.

### Universal Selector
To select everything in a document. For universal selector, we use asterisk(*).

### Element Selector
It selects all elements of the same type i.e, if we write h1 so it CSS will pe applied to all h1 of the webpage.

### Id Selector
The CSS ID selector matches an element based on the value of the element's id attribute. In order for the element to be selected, its id attribute must match exactly the value given in the selector. Id should be start with hash(#) and then write id name. We give unique id for any element.

### Class Selector
The CSS class selector matches elements based on the contents of their class attribute. It should start with dot(.) and then write class name.
**Syntax -** .class_name { style properties }

### Attribute Selector
Selects elements based on the presence or value of a given attribute.
**Syntax are:-**
- **[attr]** : Represents elements with an attribute name of attr.
- **[attr~=value]** : Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.
- **[attr|=value]**: Represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen, - (U+002D). It is often used for language subcode matches.
- **[attr^=value]**: Represents elements with an attribute name of attr whose value is prefixed (preceded) by value.
- **[attr$=value]** : Represents elements with an attribute name of attr whose value is suffixed (followed) by value.
- **[attr*=value]**: Represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string.
- **[attr operator value i]**: Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).
- **[attr operator value s]**: Adding an s (or S) before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).

## Combinator
The final selectors we will look at are called combinator. Combinator are used to combine other selectors in a way that allows us to select elements based on their location in the DOM relative to other elements (for example, child or sibling).

### Descendant Combinator
The descendant combinator typically represented by a single space( ) character combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc.) element matching the first selector. Selectors that utilize a descendant combinator are called **descendant selectors**.

### Child Combinator
The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. Multiple child cannot be there.
*Example:* selector1 > selector2 { /* style properties */ }
<!-- The white space around the > combinator is optional but recommended. -->

