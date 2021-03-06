/*
 * isomorphic-react-starter-kit
 *
 * https://github.com/jostw/isomorphic-react-starter-kit
 *
 * Copyright (c) 2015 jos
 * Licensed under the MIT license.
 */

"use strict";

import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>There's no place like home.</h1>
                <div>{ this.props.time || this.props.data.time }</div>
            </div>
        );
    }
}

Home.propTypes = {
    time: React.PropTypes.string,
    data: React.PropTypes.object.isRequired
};

export default Home;
