/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import config from "./config";

import Home from "../components/Home.jsx";
import About from "../components/About.jsx";

export default [
    {
        title: "Home",
        name: "home",
        path: config.path.home,
        handler: Home
    }, {
        title: "About",
        name: "about",
        path: config.path.about,
        handler: About
    }
];
