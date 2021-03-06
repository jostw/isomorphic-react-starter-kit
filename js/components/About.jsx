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

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>The first rule of Fight Club is: you do not talk about Fight Club.</h1>
                <div>{ this.props.time || this.props.data.time }</div>
            </div>
        );
    }
}

About.propTypes = {
    time: React.PropTypes.string,
    data: React.PropTypes.object.isRequired
};

export default About;
