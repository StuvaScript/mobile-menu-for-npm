# Mobile Menu

A nifty mobile menu for all your mobile projects!

## Getting Started

### View The Project

Visit [the live project](https://stuvascript.github.io/mobile-menu/). If you're not using a mobile device, open the dev tools with F12 on Windows or Cmd + Opt + I on macOS and change the window size to see the mobile menu in action!

### Prerequisites

I'm pretty sure you need Webpack for this to work on your browser.

### Installing

Make sure you have npm installed by going to the root directory of your project and typing the following CLI command:

```
npm init -y
```

Then install this project using the following CLI command:

```
npm i @stuvascript/mobile-menu
```

## To Use

### JavaScript

You can use the `import` syntax to call the package. Here is what it would look like:

```Javascript
import mobile-menu from '@stuvascript/mobile-menu';
```

### HTML

In your HTML file, you need:

1. An element to have the class of "outer-nav-for-mobile-menu". This is what the package looks for to actually work. Semantically this should be a `<nav>` element but really it can be anything.

2. That element needs to have `<li>` children. This is what the package will read and copy to the mobile menu for navigation.

### Notes

- If your element that has the class of "outer-nav-for-mobile-menu" is the child of another element, it's up to you to target that parent element with a media query parameter of "min-width: 450px" and a "position: absolute" to remove it from the document flow when this mobile menu kicks in.

- Your element that has the class of "outer-nav-for-mobile-menu" CAN'T be styled directly. You need to target that element with your own class name so it doesn't override the mobile menu styles.

### Examples

Here is an example of what your HTML could look like:

```HTML
<nav class="outer-nav-for-mobile-menu class-for-styling">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Products</li>
    <li>Contact</li>
    <li>Team</li>
    <li>Funky Monkey</li>
  </ul>
</nav>
```

You can see there is the correct class name and an extra class name for you to style.

Here's an example of what your CSS could look like if your element that has the class of "outer-nav-for-mobile-menu" has a parent element:

```CSS
@media (width <= 450px) {

  .wrapper-element {
    position: absolute;
  }

}
```

This "media query" and "position: absolute" are needed so that the parent element will disappear from the document flow and make the rest of the page look better.

## Built With

Vanilla JavaScript and CSS

### With assistance from:

- node.js
- Webpack
- Prettier
- ES Lint

## Author

- **Stuvascript** - [Portfolio](https://stuvascript.github.io/portfolio/)

## License

This project is licensed under the MIT License - see the [MIT License](https://choosealicense.com/licenses/mit/) file for details

## Acknowledgments

- Shoutout to The Odin Project for helping me on my coding journey
