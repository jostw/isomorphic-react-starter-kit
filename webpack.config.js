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

module.exports = {
    entry: {
        script: path.resolve(__dirname, "js/app.js")
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].js"
    }
};