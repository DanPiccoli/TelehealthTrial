//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class MySpace extends Component {
    render() {
        return (
            <div className="App">
                <h1>My Journal Home</h1>

                <div>
				{/* Link to List.js */}
                <Link to={'./JournalHome'}>
                    <button variant="raised">My Journal</button>
                </Link>
				</div>

				<div>
				{/* Link to List.js */}
                <Link to={'./MeditationPage'}>
                    <button variant="raised">Practice Meditation</button>
                </Link>
				</div>
				
				
				
				
            </div>
        );
    }
}
export default MySpace;
