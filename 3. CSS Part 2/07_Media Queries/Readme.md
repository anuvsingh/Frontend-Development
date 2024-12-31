## Media Queries 
- Help create a responsive website
- Media queries allow you to apply CSS styles depending on a device's media type (such as print vs. screen) or other features or characteristics such as screen resolution or orientation, aspect ratio, browser viewport width or height, user preferences such as preferring reduced motion, data usage, or transparency.
- You can set orientation also like landscape, portrait, etc...
- **Example**
    - @media (orientation: landscape){
        <!-- property -->
    }

- **Syntax**
    - @media ______ {
        /* … */
    }

- Media types define the broad category of device for which the media query applies: all, print, screen.
- Media features describe a specific characteristic of the user agent, output device, or environment: 
    - any-hover
    - any-pointer
    - aspect-ratio
    - color
    - color-gamut
    - color-index
    - device-aspect-ratio Deprecated
    - device-height Deprecated
    - device-width Deprecated
    - display-mode
    - dynamic-range
    - forced-colors
    - grid
    - height
    - hover
    - inverted-colors
    - monochrome
    - orientation
    - overflow-block
    - overflow-inline
    - pointer
    - prefers-color-scheme
    - prefers-contrast
    - prefers-reduced-motion
    - prefers-reduced-transparency
    - resolution
    - scripting
    - update
    - video-dynamic-range
    - width.