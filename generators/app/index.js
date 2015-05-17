var generators = require('yeoman-generator'),
    chalk = require('chalk');

module.exports = generators.Base.extend({
    initializing: function () {
        this.pkg = require('../../package.json');
    },

    prompting: function () {
        var done = this.async();

        this.log(chalk.magenta('... Pixi Plugin NPM Module ...'));

        var prompts = [
            {
                type: 'input',
                name: 'projectName',
                message: 'Name of the project'
            },
            {
                type: 'input',
                name: 'userName',
                message: 'Author\'s name'
            },
            {
                type: 'input',
                name: 'userEmail',
                message: 'Author\'s email'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description of the project'
            },
            {
                type: 'input',
                name: 'gitUrl',
                message: 'GitHub page url'
            }
        ];

        this.prompt(prompts, function (props) {
            this.config = props;

            done();
        }.bind(this));
    },

    writing: function () {
        // dotfiles
        this.copy('_editorconfig', '.editorconfig');
        this.copy('_gitignore', '.gitignore');
        this.copy('_jshintrc', '.jshintrc');

        // root files
        this.copy('gulpfile.js', 'gulpfile.js');
        this.template('package.json', 'package.json');
        this.template('README.md', 'README.md');
        this.template('CONTRIBUTING.md', 'CONTRIBUTING.md');
        this.template('LICENSE', 'LICENSE');

        // gulp directory
        this.directory('gulp');

        // src files
        this.directory('src');

        // test files
        this.directory('test');
    },

    end: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});
