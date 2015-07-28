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

import { port } from "./config";
import config from "./js/app/config";
import request from "./js/app/request";
import Route from "./js/components/Route.jsx";

const isDev = ((argv) => argv && argv.match("dev"))(process.argv[2]);
const app = express();

let requestCount, requestTime;

app.get(config.path.home, (req, res, next) => {
    if (req.xhr) {
        requestCount++;

        res.send({ time: requestCount > 2 ? new Date() : requestTime });
    } else {
        next();
    }
});

app.get(config.path.about, (req, res, next) => {
    if (req.xhr) {
        requestCount++;

        res.send({ time: requestCount > 2 ? new Date() : requestTime });
    } else {
        next();
    }
});

app.use(express.static("public"));

app.use((req, res) => {
    const router = Router.create({ location: req.url, routes: Route });

    let index = fs.readFileSync(path.resolve(__dirname, "template/index.html")).toString();

    if (isDev) {
        index = index.replace("<script src=\"/js/script.js\"></script>", "<script src=\"http://localhost:" + port.webpack + "/js/script.js\"></script>");
        index = index.replace("<!-- browser-sync -->", "<script async src=\"http://localhost:" + port.browserSync + "/browser-sync/browser-sync-client.js\"></script>");
    }

    router.run((Root) => {
        const url = "http://" + req.headers.host + req.url;

        requestCount = 0;
        requestTime = new Date();

        request.get(url, (data) => {
            const root = React.createElement(Root, { data: data });

            index = index.replace("<!-- react -->", React.renderToString(root));

            res.send(index);
        });
    });
});

const server = app.listen(port.app, () => {
    const host = server.address().address;

    console.log("Server listening at http://%s:%s", host, port.app);

    if (isDev) {
        const browserSyncServer = browserSync.create();

        browserSyncServer.watch("template/").on("change", browserSyncServer.reload);

        browserSyncServer.init({
            logSnippet: false,
            reloadOnRestart: true,

            port: port.browserSync
        });
    }
});
