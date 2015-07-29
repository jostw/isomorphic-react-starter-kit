/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import alt from "../app/alt";
import AppActions from "../actions/AppActions";

class AppStore {
    constructor() {
        this.bindListeners({
            updateTime: AppActions.updateTime
        });

        this.state = {
            time: null
        };
    }

    updateTime(time) {
        this.setState({ time });
    }
}

export default alt.createStore(AppStore, "AppStore");
