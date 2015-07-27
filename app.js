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

import React from "react";
import Router from "react-router";

import config from "./js/app/config";
import Route from "./js/components/Route.jsx";

const isDev = ((argv) => argv && argv.match("dev"))(process.argv[2]);
const app = express();

app.use(express.static("public"));

app.use((req, res) => {
    const router = Router.create({ location: req.url, routes: Route });

    let index = fs.readFileSync(path.resolve(__dirname, "template/index.html")).toString();

    if (isDev) {
        index = index.replace("<script src=\"/js/script.js\"></script>", "<script src=\"http://localhost:" + config.port.webpack + "/js/script.js\"></script>");
        index = index.replace("<!-- browser-sync -->", "<script async src=\"http://localhost:" + config.port.browserSync + "/browser-sync/browser-sync-client.js\"></script>");
    }

    router.run((Handler) => {
        index = index.replace("<!-- react -->", React.renderToString(React.createElement(Handler)));

        res.send(index);
    });
});

const server = app.listen(config.port.app, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);

    if (isDev) {
        const browserSyncServer = browserSync.create();

        browserSyncServer.watch("template/").on("change", browserSyncServer.reload);

        browserSyncServer.init({
            logSnippet: false,
            reloadOnRestart: true,

            port: config.port.browserSync
        });
    }
});
