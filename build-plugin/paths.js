var path = require('path');
var fs = require('fs');
var assign = Object.assign || require('object.assign');

var userPath = {};
try {
  userPath = require('../../../spoonx').path;
} catch(_) {
  console.info('No user path settings found.')
}

// hide excessive warning //
require('events').defaultMaxListeners = 10;

var appRoot = userPath.root || 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

var paths = {
  root: appRoot,
  source: appRoot + '**/*.js',
  style: 'styles/**/*.css',
  output: 'dist/',
  doc:'./doc',
  theme: './node_modules/typedoc-markdown-theme/bin',
  test: 'test/**/*.js',
  exampleSource: 'doc/example/',
  exampleOutput: 'doc/example-dist/',
  packageName: pkg.name,
  ignore: [],
  useTypeScriptForDTS: false,

  // eg. non-concated local imports (aka start with ./) in the main file as
  // they will get removed during the build process
  importsToAdd: [],

  // imports that are only used internally. no need to export them in the d.ts
  importsToIgnoreForDts: [],

  // js to be transpiled, but not be concated and keeping their relative path
  jsResources: [appRoot + 'components/'],

  // other resources that are just copied over and keeeping their relative path
  resources: appRoot + '{**/*.css,**/*.html}',

  sort: true,
  concat: true
};

// merge settings
assign(paths, userPath);

// files to be transpiled (and concated if selected)
paths.mainSource = [paths.source].concat(paths.jsResources.map(function(resource) {return '!' + resource;}));

module.exports = paths;
