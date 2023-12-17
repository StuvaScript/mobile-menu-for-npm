**THE ACTUAL PACKAGE**

- This code is looking for the class of "outer-nav-for-mobile-menu". It needs <li> (list items) children to work correctly. It will make that element's visibility hidden. If it's the child of another element, it's up to you to target that parent element with a media query paremeter of "min-width: 450px" and a "position: absolute" to remove it from the document flow when this mobile menu kicks in.

- You can't style the element that has the class of "outer-nav-for-mobile-menu" directly. You need to target it with your own class name so it doesn't override the mobile menu.
