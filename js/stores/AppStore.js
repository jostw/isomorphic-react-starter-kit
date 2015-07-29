/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import Immutable from "immutable";
import immutable from "alt/utils/ImmutableUtil";

import alt from "../app/alt";
import routes from "../app/routes";

import AppActions from "../actions/AppActions";

class AppStore {
    constructor() {
        this.bindListeners({
            updateTime: AppActions.updateTime
        });

        this.state = {
            routes: Immutable.List(routes),
            time: null
        };
    }

    updateTime(time) {
        this.setState({ time });
    }
}

export default alt.createStore({ immutable }.immutable(AppStore), "AppStore");
