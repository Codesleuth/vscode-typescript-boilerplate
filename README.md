vscode-typescript-example
=========================

This project demonstrates a skeleton structure and necessary settings files to allow TypeScript development in [Visual Studio Code][vscode] (as of build 0.7.10). The project builds all TypeScript (`.ts`) files into a `build/js` directory in the root.

### Prerequisites
1. You need Node.js. [Go install it][nodejsdownload]
2. Ensure the required dependencies have been installed:
```bash
$ npm install
```

### Building
1. Clone the repository
2. Open VSCode and select the root of the cloned repository as the project folder
3. Build by either:
 * Hitting <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build, which is declared in the `.settings/tasks.json` file with the `isBuildCommand` marker
 * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and select the `Tasks: Run Build Task` option
 * Press <kbd>CTRL</kbd>/<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, delete the `>` and type `task build`
4. If there were no errors, you should see a new directory, `build`, in the root with the following content:
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

Your `.ts` files have been compiled to `.js` files within the `build` directory, and each should have a `.js.map` _sourcemap_ file alongside it to allow stack traces to correctly report the line in the original file. See [this StackOverflow article][sourcemapquestion] for an overview of what a sourcemap is.

## Testing
There's a sample test located in the `test` folder. You can run them by hitting <kbd>CTRL</kbd>/<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd> (or use the `Tasks` menu and run `Tasks: Run Test Task`)

### Running and Debugging
To run the project in debug mode, simply hit <kbd>F5</kbd>! Place breakpoints in your TypeScript code and view them in the debugger (<kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd> or <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>).

### License
MIT

[vscode]: https://code.visualstudio.com/
[nodejsdownload]: https://nodejs.org/download/
[sourcemapquestion]: http://stackoverflow.com/questions/21719562/javascript-map-files-javascript-source-maps