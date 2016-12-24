var glob = require("glob");

// use babel-polyfill as the initial entry to convert any TypeScript to ES5
var files = ['babel-polyfill'];

// also add any React tsx files to the entry point
files.push.apply(files, glob.sync("./src/**/*.tsx"));

module.exports = {
    entry: files,
    output: {
        filename: "build/SiteAssets/dev/scripts/bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // This will convert from TypeScript to ES5 via Babel
            { test: /\.tsx?$/, loader: "babel-loader?presets[]=es2015!ts-loader" },
        ],  

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};