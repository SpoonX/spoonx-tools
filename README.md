# Archived

It was fun while it lasted, but we have to stop maintaining these repositories. We haven't used these projects for quite some time and maintaining them is becoming harder to do.

You deserve better, and for that reason we've decided to archive some repositories, which includes this one.

Feel free to fork and alter the repositories, and go forth making awesome stuff.

# spoonx-tools

[![Build Status](https://travis-ci.org/SpoonX/spoonx-tools.svg)](https://travis-ci.org/SpoonX/spoonx-tools)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/spoonx-tools)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

This module basically just bundles all the packages, needed to build an aurelia plugin, into a single repo. No need to update all repositories of your aurelia-plugins once a build tool changes. Spoonx-tools is the only devDependency and updating that will do that for you.

The options for spoonx-tools can be set in `spoonx.js`. There are some other files needed to get started with writing your plugin. Best is, to just clone the [aurelia-plugin-skeleton](https://github.com/SpoonX/aurelia-plugin-skeleton), and start from there.

## Features
- contains all gulp tasks needed to build your plugin
- contains a karma testing setup
- sensible eslint rules
- all settings combined in `spoonx.js`
- testing express server routes are to be set in the plugin's `gulpfile.js`.

## Documentation

Type `gulp help` for the available tasks.

For a starter plugin project, see [aurelia-plugin-skeleton](https://github.com/SpoonX/aurelia-plugin-skeleton).
