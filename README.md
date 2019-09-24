# ERT StyleGuide Sample Project

The provided html examples were styled with the ERT WebStyle CSS UI Toolkit to provide a small guideline/example of how to use the ERT StyleGuide and ERT WebStyle CSS UI Toolkit.

# Table of Contents

* [Technology Overview](#technology-overview)
* [Overview] (#overview)
* [Getting started](#getting-started)

# Technology Overview

The example will be compiled to a static web page and a CSS UI UI Toolkit
- implemented using [SASS](http://sass-lang.com/)
- and build with [Gulp] (http://gulpjs.com/)

## Dependencies

What you need to run this app:
* `node` and `npm` (For example use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v5.1.x`+) and NPM (`4.0.x`+) with the newest version!

## Folder Structure

Under ./App/ you will find the source files.
The SASS files for styling are also in this folder (in the folder scss).
The style.scss SASS file is the stylesheet of index.html and will be compiled during the build process to the corresponding css file.

During the build all required files (fonts, images and js) are copied from the ert-webstyle npm package to the build folder.

The ert-webstyle folder has all files of the ERT Webstyle CSS UI Toolkit.

# Overview

During compilation of the files in the app folder, everything required is
transfered to the build folder and the browsersync website is served from there.
If you change something in the source "app" folder, the website is compiled again and refreshed with browsersync through a watcher gulp task.

# Getting Started

Commands for bash

## Navigate into Project folder

First navigate into SampleProject folder on the console/bash.

## Install all dependent NPM packages

For the installation of the npm package there has to be a .npmrc file (contains the link to the nexus server) located in the root of your project. You can use the one provided in this sample project.

`npm install`

## Start the application

After all dependencies and modules have been installed you can now run the app:

`gulp`

This gulp script will compile the current StyleGuide example of the SampleProject and starts an local Webserver using `browsersync` which will watch all local changes, build and reload for you.
The local adress is `http://localhost:9999`.

# Development

## Using the ERT Webstyle UI Toolkit

If you have installed the `ert-webstyle` NPM Package (ERT WebStyle CSS UI Toolkit) you can use it in your project by importing the styles in your style (S)CSS file. Therefore it is strongly recommended that you also use SASS, because it is much easier this way to include the styles.

With SASS you can just use the `@import` command at the beginning of your sass/scss file.
For example: `@import "../../node_modules/ert-webstyle/sass/molecules/toolbar";` to include the styles of the toolbar molecule.

For references how the corresponding sass files of the elements are named look into the sass folder in the `ert-webstyle` package.
The names and uses of the elements can be found in the StyleGuide page.

After this you can add your custom styles after the imports.

For an example just have a look at the included styles.scss in the sass folder.

## Build with Gulp

The tasks for Gulp are found in the tasks folder in the gulp folder. The config.js is for configuration of locations and other parameters for the gulp tasks.
