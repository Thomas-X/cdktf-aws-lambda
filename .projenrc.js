const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Thomas Zwarts',
  authorAddress: 'thomas.zwarts@albelli.com',
  defaultReleaseBranch: 'main',
  name: 'cdktf-aws-lambda',
  repositoryUrl: 'git@github.com:Thomas-X/cdktf-aws-lambda.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();