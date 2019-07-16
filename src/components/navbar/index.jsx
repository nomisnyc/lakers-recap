import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';

import "./css.scss";

const sections = [
    'News',
    'Team',
    'Schedule',
    'Tickets',
    'Multimedia',
    'Laker girls',
    'Community',
    'Fans',
  ];

export default class NavBar extends Component {
    render() {
		return (
            <div>
                <AppBar position="static">
                    <Toolbar component="nav" variant="dense" className="navbar">
                    {sections.map(section => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section}
                        variant="body2"
                        href="#"
                        className="toolbar-link"
                    >
                        {section.toUpperCase()}
                    </Link>
                    ))}
                        SEARCH |
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
		);
	}
};