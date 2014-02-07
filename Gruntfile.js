module.exports = function (grunt) {

    grunt.initConfig({
        phantomcss: {
            desktop: {
                options: {
                    screenshots: 'tests-outputs/desktop/screenshots/',
                    results: 'tests-outputs/desktop/results/'
                },
                src: [
                    'testsuites/*.js'
                ]
            },
            phone: {
                options: {
                    screenshots: 'tests-outputs/phone/screenshots/',
                    results: 'tests-outputs/phone/results/',
                    viewportSize: [320, 480]
                },
                src: [
                    'testsuites/*.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-phantomcss');


};