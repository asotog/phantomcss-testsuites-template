# PhantomCSS Testsuites Template

This is a project to start working with PhantomCSS tests.

Uses [grunt-phantomcss](https://github.com/chrisgladd/grunt-phantomcss) under the hood to execute the testing tasks which is a wrapper of [PhantomCSS](https://github.com/Huddle/PhantomCSS)

## Installation

- Install nodejs, see  [http://nodejs.org/](http://nodejs.org/)

- Install [grunt](http://gruntjs.com/) command line interface, `sudo npm install -g grunt-cli`

- Clone this repo, `git clone https://github.com/asotog/phantomcss-testsuites-template.git project-name-tests` to whatever location in your machine

- Get inside the new created folder, `cd project-name-tests`

- Install dependencies with nodejs package manager, `sudo npm install`

## Usage

Start coding phantomcss tests in `testsuites/testsuite-general.js`, multiple files can be placed on this folder to execute different components tests, finally run inside `project-name-test` the command `grunt phantomcss:desktop` or `grunt phantomcss:phone`, desktop and phone subtasks are set in the `Gruntfile.js` file, additionally this file can be modified to add more subtasks or to change default viewport dimensions
