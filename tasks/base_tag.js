/*
 * grunt-base-tag
 * 
 *
 * Copyright (c) 2016 CCG
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('base_tag', 'add base tag', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      basePath: ''
    });

    var basePath = options.basePath;
    var headTag = /<head/;
    var baseTag = /<base/;

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        
        var originalFileContent = grunt.file.read(filepath);

        if(baseTag.test(originalFileContent)){
          return;
        }

        var originalFileArr = originalFileContent.split(grunt.util.normalizelf('\n'));

        originalFileArr.forEach(function(value, index, arr){
          if(headTag.test(value)){
            arr[index] = value + 
                         grunt.util.normalizelf('\n') + 
                         '<base href="'+basePath+'">';
            return;
          }
        })

        originalFileContent = originalFileArr.join(grunt.util.normalizelf('\n'));

        grunt.file.write(filepath, originalFileContent);
        grunt.log.writeln('File "'+filepath+'" created.');
      })
    });
  });

};










