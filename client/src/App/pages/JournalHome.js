//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import {Header } from 'semantic-ui-react';

class JournalHome extends Component {
    render() {
        return (
            <div className="App">
                <h1>Journal Home</h1>

			<div>
                {/* Link to List.js */}
                <Link to={'./JournalPrompts'}>
                    <button className="big ui button">Create New Entry</button>
                </Link>
			</div>
			
			<div>
				{/* Link to List.js */}
                <Link to={'./JournalPast'}>
                    <button className="big ui button">Read Old Entries</button>
                </Link>
			</div>
				
            </div>
        );
    }
}
export default JournalHome;
