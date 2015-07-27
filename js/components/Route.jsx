/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import React from "react";
import { Route } from "react-router";

import App from "./App.jsx";
import routes from "../app/routes";

export default (
    <Route handler={ App }>{
        routes.map((route, index) => {
            return (
                <Route key={ index } name={ route.name } path={ route.path } handler={ route.handler } />
            );
        })
    }</Route>
);
