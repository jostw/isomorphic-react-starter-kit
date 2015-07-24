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
import browserSync from "browser-sync";

const isDev = process.argv[2] && process.argv[2].match("dev");
const app = express();

app.get("/", (req, res) => {
    let index = fs.readFileSync(path.resolve(__dirname, "template/index.html")).toString();

    if (isDev) {
        index = index.replace("<script src=\"/js/script.js\"></script>", "<script src=\"http://localhost:3001/js/script.js\"></script>");
        index = index.replace("<!-- webpack-dev-server -->", "<script src=\"http://localhost:3001/webpack-dev-server.js\"></script>");
        index = index.replace("<!-- browser-sync -->", "<script async src=\"http://localhost:3002/browser-sync/browser-sync-client.js\"></script>");
    }

    res.send(index);
});

app.use(express.static("public"));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);

    if (isDev) {
        const bs = browserSync.create();

        bs.watch("template/").on("change", bs.reload);

        bs.init({
            logSnippet: false,
            reloadOnRestart: true,

            port: 3002
        });
    }
});
