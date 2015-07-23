/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import "normalize.css";
import "imports?this=>window!modernizr";

import "../css/vendor/boilerplate.css";
import "./vendor/plugins";

import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>Hello React!</div>
        );
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    React.render(<App />, document.getElementById("app"));
});
