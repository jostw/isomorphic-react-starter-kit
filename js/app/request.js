/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import request from "superagent";

export default (url, callback) => {
    request
        .get(url)
        .set("X-Requested-With", "XMLHttpRequest")
        .end((err, res) => {
            if (!err) {
                callback(res.body);
            }
        });
};
