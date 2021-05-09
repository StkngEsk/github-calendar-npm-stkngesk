module.exports = {
    presets: [
        "@babel/preset-env",
        {
            exclude: ['@babel/transform-runtime'],
        }
    ],
    plugins: [
        ["@babel/transform-runtime",{
            "absoluteRuntime": false,
            "corejs": false,
            "helpers": false,
            "regenerator": true,
            "version": "7.0.0-beta.0"
          }]
    ]
};