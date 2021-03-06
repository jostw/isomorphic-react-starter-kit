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

import "../css/style.css";

import React from "react";
import Router from "react-router";

import request from "./app/request";
import Route from "./components/Route.jsx";

document.addEventListener("DOMContentLoaded", () => {
    Router.run(Route, Router.HistoryLocation, (Root, state) => {
        request.get(state.path, (data) => {
            const root = React.createElement(Root, { data: data });

            React.render(root, document.getElementById("app"));
        });
    });
});
