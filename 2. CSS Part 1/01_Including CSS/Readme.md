### There are 3 methods to include styles that are:

- **Inline Style:** Inline styles are written directly within an HTML element's style attribute. *Disadvantage*-  The styles are limited to a single element and cannot be reused elsewhere, managing styles becomes cumbersome when working with large codebases because all the styles are scattered throughout the HTML.

- **Internal CSS(Style Tag):** Internal styles are defined within a <style> tag inside the <head> section of the HTML document. *Disadvantage*- If you need the same styles on multiple pages, you'll have to copy them to each page, leading to code duplication.

- **External Stylesheet:** External styles are written in a separate .css file and linked to the HTML file using a <link> tag. *Disadvantage*- The browser must make an extra HTTP request to fetch the CSS file, which could slightly increase load time, for small creating an external stylesheet might feel unnecessary.
