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
import { List } from "immutable";

import connectToStores from "alt/utils/connectToStores";

import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

import Nav from "./Nav.jsx";

class App extends React.Component {
    static getStores() {
        return [AppStore];
    }

    static getPropsFromStores() {
        return AppStore.getState();
    }

    render() {
        return (
            <div>
                <Nav routes={ this.props.routes } />
                <RouteHandler time={ this.props.time } data={ this.props.data } />
                <button onClick={ this.updateTime }>update</button>
            </div>
        );
    }

    updateTime(e) {
        e.preventDefault();

        AppActions.updateTime(new Date().toISOString());
    }
}

App.propTypes = {
    routes: React.PropTypes.instanceOf(List).isRequired,
    time: React.PropTypes.string,
    data: React.PropTypes.object.isRequired
};

export default { connectToStores }.connectToStores(App);
