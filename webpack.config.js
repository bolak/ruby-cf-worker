module.exports = {
    entry: "./index.rb",
    mode: 'production',
    target: "webworker",
    module: {
        rules: [
            {
                test: /\.rb$/,
                loader: 'opalrb-loader',
                options: {}
            }
        ]
    }
};