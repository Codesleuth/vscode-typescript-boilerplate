vscode-typescript-boilerplate
=========================

This project provides a skeleton structure and IDE settings files to help with TypeScript development in [Visual Studio Code][vscode] (as of build 0.9.1). The project builds all TypeScript (`.ts`) files into a `build` directory in the root.

## Project Structure
The project currently provides the following features:
* TypeScript compilation with Code's build command, or via `npm run build`, providing source maps
* Mocha test structure, which can be run with Code or `npm test`, also with source maps
* Error detection and navigation within Code for both build and test problems (see [Code Tasks](https://code.visualstudio.com/Docs/editor/tasks))
* Debug settings (_currently a bug is preventing this from being reliable_)
* Type definitions provided by [`tsd`][tsd]
* Custom type definitions ready for your own declarations

### Project Structure
```
.vscode/
    launch.json     # Defines launch tasks for debugging etc.
    tasks.json      # Defines tasks available e.g. build & test
    
custom_typings/     # Place your custom typings within this directory
    tsd.d.ts        # Custom typings should be added to this file, e.g.:
                    #   /// <reference path="mymodule.d.ts" />
                    
src/                # The root of all TypeScript source code
    lib/
        mymodule.ts # A sample module
        
    test/
        app.test.ts # A sample test
        
    _ref.d.ts       # The root type definition file.
                    #   Reference this in all your TypeScript files.
                    
    app.ts          # The main entry point for the project.
    tsconfig.json   # TypeScript compilation settings
    
package.json
README.md
tsd.json            # TypeScript package definition file for tsd
```

## Getting Started
This repository is ready for you to clone and start building your code around it. Simply follow the guide below.

### Prerequisites
1. Clone, fork, or [download](/Codesleuth/vscode-typescript-boilerplate/releases) the project.
2. You need Node.js. [Go install it][nodejsdownload]
3. Ensure the required dependencies have been installed:
    ```bash
    $ npm install
    ```

4. You will need [`tsd`][tsd] to allow the TypeScript to compile without errors. It's recommended to install this globally:
    ```bash
    $ npm install tsd -g
    ```

5. Run `tsd install` to fetch the required module type definitions defined in `tsd.json`:
    ```bash
    # if installed globally (recommended)
    $ tsd install

    # otherwise
    $ ./node_modules/.bin/tsd install
    ```

### Building
1. Open VSCode and select the root of the repository as the project folder
2. Build with one of the following shortcuts:
 * Hitting <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build, which is declared in the `.settings/tasks.json` file with the `isBuildCommand` marker
 * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and select the `Tasks: Run Build Task` option
 * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, delete the `>` and type `task build`
3. If there were no errors, you should see a new directory, `build`, in the root with the following content:
```
build/
    lib/
        mymodule.js 
        mymodule.js.map
    test/
        app.test.js
        app.test.js.map
    app.js
    app.js.map
```

### Error Navigation
After building or testing, errors are captured (defined in the `.settings/tasks.json` file) and can be viewed with <kbd>CTRL</kbd>/<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>.

Your `.ts` files have been compiled to `.js` files within the `build` directory, and each should have a `.js.map` _sourcemap_ file alongside it to allow stack traces to correctly report the line in the original file. See [this StackOverflow article][sourcemapquestion] for an overview of what a sourcemap is.

### Testing
There's a sample test located in the `test` folder. You can run them by hitting <kbd>CTRL</kbd>/<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd> (or use the `Tasks` menu and run `Tasks: Run Test Task`)

### Running and Debugging
To run the project in debug mode, simply hit <kbd>F5</kbd>! Place breakpoints in your TypeScript code and view them in the debugger (<kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>).

## Contribute
Yes, that would be great! Open a pull request and we'll go from there!

## License
MIT

[vscode]: https://code.visualstudio.com/
[nodejsdownload]: https://nodejs.org/download/
[sourcemapquestion]: http://stackoverflow.com/questions/21719562/javascript-map-files-javascript-source-maps
[tsd]: https://www.npmjs.com/package/tsd
