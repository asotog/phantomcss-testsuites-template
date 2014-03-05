module.exports = function (grunt) {

    grunt.initConfig({
        phantomcss: grunt.file.readJSON('phantomcss.json')
    });

    grunt.loadNpmTasks('grunt-phantomcss');


};