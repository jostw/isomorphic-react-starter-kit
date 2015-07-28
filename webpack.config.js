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

var config = require(path.resolve(__dirname, "config"));

var isDev = process.argv[1].match("dev");

module.exports = {
    entry: {
        script: (function() {
            var script = path.resolve(__dirname, "js/app.js");

            if (isDev) {
                script = [
                    "webpack-dev-server/client?http://localhost:" + config.port.webpack,
                    "webpack/hot/dev-server",
                    script
                ];
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
                loader: "jshint!babel"
            }
        ]
    },

    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["_originalSource"])
        )
    ],

    devServer: {
        port: config.port.webpack
    },

    output: {
        path: path.resolve(__dirname, "public/js"),
        publicPath: "http://localhost:" + config.port.webpack + "/js/",

        filename: "[name].js"
    }
};
