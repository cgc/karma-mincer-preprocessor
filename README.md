# karma-mincer-preprocessor

> Preprocessor to use http://github.com/nodeca/mincer for compilation.

## Installation

The easiest way is to keep `karma-mincer-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-coffee-preprocessor": "~0.0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-mincer-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['mincer']
    },

    mincerPreprocessor: {
      options: {
        // paths mincer will use to search for assets in
        paths: []
      }
    }
  });
};
```
