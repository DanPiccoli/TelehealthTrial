// App homepage

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Project Home</h1>

                
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./professional-information'}>
                            <button className="big red ui button">
                                Professional Help
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
