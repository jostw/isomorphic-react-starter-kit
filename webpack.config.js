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

module.exports = {
    entry: {
        script: path.resolve(__dirname, "js/app.js")
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
        filename: "[name].js"
    }
};
