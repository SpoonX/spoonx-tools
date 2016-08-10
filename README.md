# spoonx-tools

[![Build Status](https://travis-ci.org/SpoonX/spoonx-tools.svg)](https://travis-ci.org/SpoonX/spoonx-tools)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/spoonx-tools)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

This module basically just bundles all the packages needed to universally build an aurelia plugin into a single repo. No need to update all repositories of your aurelia-plugins once a build tool changes and spoonx-tools is the only devDependency and that will do that for you.

The options for spoonx-tools can be set in 'spoonx.json'. There are some other files needed to get started with writing your plugin. Best is, to just clone the [aurelia-plugin-skeleton](https://github.com/SpoonX/aurelia-plugin-skeleton), and start from there.

## Features
- contains all gulp tasks needed to build your plugin
- contains a karma testing setup
- sensible eslint rules
