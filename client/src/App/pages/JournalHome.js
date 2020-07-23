//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import {Header } from 'semantic-ui-react';

class JournalHome extends Component {
    render() {
        return (
            <div className="App">
			 <div className="ui container padded centered stackable grid">
                <div className="ui container row ten wide">
                    <Header className="ui huge header">Journal Homepage</Header>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./JournalPrompts'}>
                            <button className="big red ui button">
                                Create New Entry
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./JournalPast'}>
                            <button className="big ui button">
                                Read Old Entries
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
			
            </div>
        );
    }
}
export default JournalHome;