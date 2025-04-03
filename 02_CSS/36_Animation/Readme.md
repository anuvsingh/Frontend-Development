## CSS Animation
- To animate CSS elements.
- An animation lets an element gradually change from one style to another.
- **Syntax**
    - @keyframes *element_name*{
        from {*property_name*;}
        to {*property_name*;}
    }
- When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

- **CSS Shorthand Property**
    - animation: name|duration|timing-function|delay|iteration-count|direction|fill-mode|play-state;
    
- **Property Values**
    - *animation-name:* Specifies the name of the keyframe you want to bind to the selector.
    - *animation-duration:* Specifies how many seconds or milliseconds an animation takes to complete.
    - *animation-timing-function:* Specifies the speed curve of the animation.
    - *animation-delay:* Specifies a delay before the animation will start.
    - *animation-iteration-count:* Specifies how many times an animation should be played.
    - *animation-direction:* Specifies whether or not the animation should play in reverse on alternate cycles.
    - *animation-play-state:* Specifies whether the animation is running or paused.