module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        client: {
            chai: {
                includeStack: true
            }
        },

        //匹配对应的test文件和css文件，如果不加载test.css 测试代码如果要测试css是不行的
        //加上**匹配dist文件夹下的所有目录比如 a/b/c/d/e.js 都可匹配到
        files: [
            'dist/**/*.test.js',
            'dist/**/*.test.css'
        ],


        exclude: [],

        preprocessors: {},


        reporters: ['progress'],


        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,
        //告诉karma要打开哪个浏览器 我们这里装的chrome
        browsers: ['ChromeHeadless'],

        singleRun: false,

        concurrency: Infinity
    })
}
