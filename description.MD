Main process - unique process that handle all windows, stops only when we're closing our app itself. That is Node runtime proces, electrn has build in node inside.

Renderer process - chromium - it is view of our app - as it will be a browser, we can use HTML CSSJS

Renderer - sub process - we can have many of them! ( main as a server and renderes as a client )


Bozon is a simple, easy to use tool that unifies the existing build tools for Electron development. Simplify building, compiling, running, testing, and packaging your Electron applications.
Features

    Scaffolding - Generate ready to use project structure for your new Electron application.
    Running - Run your electron application with Hot Reload in development environment.
    Testing - Build Application for test env and run feature tests for your Electron application.
    Packaging - Build, package and publish your Electron app for Mac, Windows and Linux platforms.

Bozon uses Webpack to bundle source code for main and renderer processes as well as preload script. It adds webpack.config.js file to your project so that you can further configure webpack, add new rules, loaders etc. Jest along with Spectron are used to run your unit and feature tests within real Electron application. For packaging and publishing applications bozon uses electron-builder under the hood.



