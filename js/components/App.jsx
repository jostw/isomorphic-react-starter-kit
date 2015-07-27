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
import { RouteHandler } from "react-router";

import Nav from "./Nav.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <RouteHandler data={ this.props.data } />
            </div>
        );
    }
}

export default App;
