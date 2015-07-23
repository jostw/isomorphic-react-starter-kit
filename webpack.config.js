/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

var path = require("path");
var webpack = require("webpack");

var isDev = process.argv[1].match("webpack-dev-server");

module.exports = {
    entry: {
        script: (function() {
            var script = path.resolve(__dirname, "js/app.js");

            if (isDev) {
                script = ["webpack/hot/dev-server", script];
            }

            return script;
        })()
    },

    resolve: {
        root: [path.resolve(__dirname, "bower_components")]
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules|modernizr/,
                loader: "babel"
            }
        ]
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["_originalSource"])
        )
    ],

    output: {
        path: path.resolve(__dirname, "public/js"),
        publicPath: "http://localhost:8080/js/",

        filename: "[name].js"
    }
};
