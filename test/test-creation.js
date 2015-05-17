var path = require('path'),
    helpers = require('yeoman-generator').test;

describe('browserify module generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('browserify:app', ['../../generators/app']);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // root files
            '.editorconfig',
            '.gitignore',
            '.jshintrc',
            'gulpfile.js',
            'package.json',
            'README.md',
            'CONTRIBUTING.md',
            'LICENSE',
            // gulp files
            'gulp/tasks/build.js',
            'gulp/tasks/clean.js',
            'gulp/tasks/dev.js',
            'gulp/tasks/jsdoc.js',
            'gulp/tasks/jshint.js',
            'gulp/tasks/scripts.js',
            'gulp/tasks/test.js',
            'gulp/tasks/watch.js',
            'gulp/util/bundle.js',
            'gulp/util/handleErrors.js',
            'gulp/util/jsdoc.conf.json',
            // src files
            'src/index.js',
            // test files
            'test/fixtures/.gitkeep',
            'test/unit/index.test.js'
        ];

        helpers.mockPrompt(this.app, {
            'someOption': true
        });

        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
