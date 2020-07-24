// Landing page for functionality allowing students to:
// message other students (anon or no),
// form groups (group messaging),
// etc. TODO
// - overall encourages support group formation

import React from 'react';
import { Component } from 'react';
import wireframe from './wireframe.png';

const { render } = require('react-dom');

class CommunityHome extends React.Component {
    render() {
	return(
        <div>
			<div className="ui container row">
				<img className="ui massive image" src={wireframe} alt="wireframe" />
			</div>
			<div>This is a wireframe</div>
		</div>
		);
    }
}

export default CommunityHome;
