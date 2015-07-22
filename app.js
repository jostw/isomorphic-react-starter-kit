/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import fs from "fs";
import path from "path";

import express from "express";

const index = fs.readFileSync(path.resolve(__dirname, "template/index.html")).toString();
const app = express();

app.get("/", (req, res) => {
    res.send(index);
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});
