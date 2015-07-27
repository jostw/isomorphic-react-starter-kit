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
import Router from "react-router";

import Route from "./components/Route.jsx";

document.addEventListener("DOMContentLoaded", function() {
    Router.run(Route, Router.HistoryLocation, (Root) => {
        React.render(React.createElement(Root), document.getElementById("app"));
    });
});
