/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});
