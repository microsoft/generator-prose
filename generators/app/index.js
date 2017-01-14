'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-prose') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your grammar name'
      },
      {
        type: 'input',
        name: 'semantics',
        message: 'The name of the library with operator implementations',
        default: 'Semantics',
        store: true
      },
      {
        type: 'input',
        name: 'learning',
        message: 'The name of the library with learning helpers',
        default: 'Learning',
        store: true
      },
      {
        type: 'input',
        name: 'scoreFeature',
        message: 'The name of the program feature that is used for ranking',
        default: 'Score',
        store: true
      },
      {
        type: 'input',
        name: 'scoreHolder',
        message: 'The class that implements ranking functions',
        default: 'RankingScore',
        store: true
      },
      {
        type: 'confirm',
        name: 'buildGrammar',
        message: 'Would you like to build your grammar DLL automatically and reference it in the project?',
        store: true
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('solution/Solution.sln'),
      this.destinationPath(path.join(this.props.name, this.props.name + '.sln')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/app/App.csproj'),
      this.destinationPath(path.join(this.props.name, this.props.name, this.props.name + '.csproj')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/app/Grammar.grammar'),
      this.destinationPath(path.join(this.props.name, this.props.name, this.props.name + '.grammar')),
      this.props
    );

    const semanticsNamespace = this.props.name + '.' + this.props.semantics;
    this.fs.copyTpl(
      this.templatePath('solution/semantics/Semantics.csproj'),
      this.destinationPath(path.join(this.props.name, semanticsNamespace, semanticsNamespace + '.csproj')),
      this.props
    );

    const learningNamespace = this.props.name + '.' + this.props.learning;
    this.fs.copyTpl(
      this.templatePath('solution/learning/Learning.csproj'),
      this.destinationPath(path.join(this.props.name, learningNamespace, learningNamespace + '.csproj')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/learning/RankingScore.cs'),
      this.destinationPath(path.join(this.props.name, learningNamespace, this.props.scoreHolder + '.cs')),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('solution/app/Program.cs'),
      this.destinationPath(path.join(this.props.name, this.props.name, 'Program.cs')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/app/Properties/AssemblyInfo.cs'),
      this.destinationPath(path.join(this.props.name, this.props.name, 'Properties', 'AssemblyInfo.cs')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/semantics/Semantics.cs'),
      this.destinationPath(path.join(this.props.name, semanticsNamespace, this.props.semantics + '.cs')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/semantics/Properties/AssemblyInfo.cs'),
      this.destinationPath(path.join(this.props.name, semanticsNamespace, 'Properties', 'AssemblyInfo.cs')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/learning/Witnesses.cs'),
      this.destinationPath(path.join(this.props.name, learningNamespace, 'Witnesses.cs')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/learning/Properties/AssemblyInfo.cs'),
      this.destinationPath(path.join(this.props.name, learningNamespace, 'Properties', 'AssemblyInfo.cs')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/app/packages.config'),
      this.destinationPath(path.join(this.props.name, this.props.name, 'packages.config')),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('solution/learning/packages.config'),
      this.destinationPath(path.join(this.props.name, learningNamespace, 'packages.config')),
      this.props
    );
  },

  install: function () {
    //this.installDependencies();
  }
});
