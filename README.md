# grunt-base-tag

> add base tag

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-base-tag --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-base-tag');
```

## The "base_tag" task

### Overview
In your project's Gruntfile, add a section named `base_tag` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  base_tag: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.basePath
Type: `String`
Default value: `''`

base 标签 href 的内容

### Usage Examples

#### Default Options
在这个例子里，运行结果会把 example 目录下的所有 html 文件都加上 <base href="http://...">

```js
grunt.initConfig({
  base_tag: {
    options: {
      'basePath': "http://..."
    },
    dist: ['example/*.html']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2016-02-25&npsp;&npsp;&npsp;v0.0.2&npsp;&npsp;&npsp;init

## License
Copyright (c) 2016 CCG. Licensed under the MIT license.
