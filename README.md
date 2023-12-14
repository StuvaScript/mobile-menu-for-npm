**Creating an npm package**

- Create a new git repo for your npm package.

- Make sure you have an 'index.js' file and a 'README.md' file.

- In the package folder type 'npm init -y' to generate 'package.json' file

- Change name of package to have '@stuvascript/' in front of the package name to scope it to your npm account. Also make sure the package name is what you want because it defaults to what you saved it as locally.

- Change version to '0.1.0' to indicate its not ready yet.

- Give it a brief description

- Add your npm name as the author.

- Change license to 'MIT'

- type 'npm whoami' and your npm name should pop up. If not, type 'npm login' or go login on the site.

- Your package needs to have 'export' or 'export default' on the functions for them to be imported by another project and utilized. See your other packages for examples. (normally you would use 'module.exports' for this but you're utilizing ES6 modules and not Common.js right now.)

- To test your package **UPDATE THIS TO HAVE NPM LINK AND ALL THAT**

- To publish your SCOPED package PUBLICLY, type 'npm publish --access public' to publish it to the npm registry. Each time you make an update and publish again, make sure you update the semantic versioning.

- When your package is complete, change the version to '1.0.0'

- To use in a project, pretty sure you need Webpack to do any sort of browser stuff since node.js is a backend tool.

- Type 'npm init -y' in the new project. To install the package type 'npm i {name of project}' whereas {name of project} is the actual package name. On your package's page there will be an 'Install' spot on the right that you can copy pasta instead if you want.

- In your new project, Use the 'import' function to import the functions from the package. (normally you would use the 'require' function assigned to a variable for this but you're utilizing ES6 modules and not Common.js right now.)

**THE ACTUAL PACKAGE**

This code is looking for the class of outer-nav-for-mobile-menu. It needs <li> (list items) children to work correctly. It will make that element's visibility hidden. If it's the child of another element, it's up to you to target that parent element with a media query (of what size?) with a position: absolute to remove it from the document flow when this mobile menu kicks in.
