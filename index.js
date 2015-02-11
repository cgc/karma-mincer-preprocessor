var Mincer = require('mincer');
var path = require('path');

var createMincerPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.mincer');
  var defaultOptions = {
    paths: []
  };
  var options = helper.merge(defaultOptions, args.options || {}, config.options || {});

  var environment = new Mincer.Environment();
  options.paths.forEach(environment.appendPath, environment);

  return function(content, file, done) {
    var result = null;
    var map;
    var datauri;

    log.debug('Processing "%s".', file.originalPath);

    try {
      result = environment.findAsset(file.originalPath);
    } catch (e) {
      log.error('%s\n  at %s', e.message, file.originalPath);
      return done(e, null);
    }

    done(null, result.toString());
  };
};

createMincerPreprocessor.$inject = ['args', 'config.mincerPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:mincer': ['factory', createMincerPreprocessor]
};
