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
import { Link } from "react-router";
import { List } from "immutable";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>{
                    this.props.routes.map((route, index) => {
                        return (
                            <li key={ index }>
                                <Link to={ route.name }>{ route.title }</Link>
                            </li>
                        );
                    })
                }</ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    routes: React.PropTypes.instanceOf(List).isRequired
};

export default Nav;
