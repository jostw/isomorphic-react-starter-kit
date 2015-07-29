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

class AppActions {
    updateTime(time) {
        return time;
    }
}

export default alt.createActions(AppActions);
