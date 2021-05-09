module.exports = {
    presets: [
        "@babel/preset-env",
        {
            exclude: ['@babel/transform-runtime'],
        }
    ],
    plugins: [
        [
            "@babel/transform-runtime",
            {
                "helpers": false,
            }
        ]
    ]
};