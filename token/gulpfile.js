function defaultTask(cb) {
    // place code for your default task here
    require('./build').buildAllPlatforms();
    cb();
  }
  
  exports.default = defaultTask