# vscode-typescript-boilerplate

This project provides a skeleton structure and IDE settings files to help with TypeScript development in [Visual Studio Code][vscode] (as of build 0.9.1). The project builds all TypeScript (`.ts`) files into a `build` directory in the root.

## Project Features

The project currently provides the following features:

* TypeScript compilation with Code's build command, or via `npm run build`, providing source maps
* Mocha test structure, which can be run with Code or `npm test`, also with source maps
* Error detection and navigation within Code for both build and test problems (see [Code Tasks](https://code.visualstudio.com/Docs/editor/tasks))
* Debug settings (_currently a bug is preventing this from being reliable_)
* Type definitions provided by [`typings`][typings]
* Custom type definitions ready for your own declarations

### Project Structure

```text
.vscode/
    launch.json          # Defines launch tasks for debugging etc.
    tasks.json           # Defines tasks available e.g. build & test

build/                   # The output directory of JavaScript files
                         # when built from TypeScript

src/                     # The root of all TypeScript source code
    app/
        app.ts           # The main entry point for the project.
        mymodule.ts      # A sample module

    test/
        app.test.ts      # A sample test
        mymodule.test.ts # A sample module test with sinon spies

    typings/             # Typings downloaded using the typings command

    custom.d.ts          # An example of custom ambient typings

    tsconfig.json        # TypeScript compilation settings
    typings.json         # TypeScript package definition file for typings

package.json
README.md
```

## Getting Started

This repository is ready for you to clone and start building your code around it. Simply follow the guide below.

### Prerequisites

1. Clone, fork, or [download](//github.com/Codesleuth/vscode-typescript-boilerplate/releases) the project.
1. You need Node.js. [Go install it][nodejsdownload].
1. Ensure the required dependencies have been installed:
    ```bash
    npm install
    ```

1. You will need [`typings`][typings] to allow the TypeScript to compile without errors. It's recommended to install this globally:
    ```bash
    npm install typings -g
    ```

1. Change to the `src` directory and run `typings install` to fetch the required module type definitions defined in `typings.json`:
    ```bash
    cd src

    # if installed globally (recommended)
    typings install

    # otherwise
    ../node_modules/.bin/typings install
    ```

### Building

1. Open VSCode, hit <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, type `open folder` and select the root of this repository
1. Build with one of the following shortcuts:
   * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build, which is declared in the `.vscode/tasks.json` file with the `isBuildCommand` marker
   * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and select the `Tasks: Run Build Task` option
   * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>P</kbd> and type `task build`
1. If there were no errors, you should see a new directory, `build`, in the root with the following content:
  ```text
  build/
      app/
          app.js
          app.js.map
          mymodule.js
          mymodule.js.map
      test/
          app.test.js
          app.test.js.map
          mymodule.test.js
          mymodule.test.js.map
  ```

### Error Navigation

After building or testing, errors are captured (defined in the `.vscode/tasks.json` file) and can be viewed with <kbd>CTRL</kbd>/<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>.

Your `.ts` files have been compiled to `.js` files within the `build` directory, and each should have a `.js.map` _sourcemap_ file alongside it to allow stack traces to correctly report the line in the original file. See [this StackOverflow article][sourcemapquestion] for an overview of what a sourcemap is.

### Testing

There are sample tests located in the `test` folder. You can run them by hitting <kbd>CTRL</kbd>/<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd> (or use the `Tasks` menu and run `Tasks: Run Test Task`)

### Running and Debugging

To run the project in debug mode, simply hit <kbd>F5</kbd>! Place breakpoints in your TypeScript code and view them in the debugger (<kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>).

## Contribute

Yes, that would be great! Open a pull request and we'll go from there!

## License

MIT

[vscode]: https://code.visualstudio.com/
[nodejsdownload]: https://nodejs.org/download/
[sourcemapquestion]: http://stackoverflow.com/questions/21719562/javascript-map-files-javascript-source-maps
[typings]: https://www.npmjs.com/package/typings
