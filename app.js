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

let index = fs.readFileSync(path.resolve(__dirname, "template/index.html")).toString();

index = index.replace("<script src=\"/js/script.js\"></script>", "<script src=\"http://localhost:8080/js/script.js\"></script>");
index = index.replace("<!-- webpack-dev-server -->", "<script src=\"http://localhost:8080/webpack-dev-server.js\"></script>");

const app = express();

app.get("/", (req, res) => {
    res.send(index);
});

app.use(express.static("public"));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});
