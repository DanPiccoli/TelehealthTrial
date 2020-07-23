// App homepage

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';
import { Image } from 'semantic-ui-react';

import Logo2Rect from './Logo2Rect.jpg';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="ui container padded centered stackable grid">
                    <p></p>

                    <div className="ui container row">
                        <h2 className="ui header ">
                            <div className=" content">
                                IU Mental Health Services Powered By
                            </div>
                        </h2>
                    </div>
                    <div className="ui container row">
                        <img className="ui large image" src={Logo2Rect} alt="Logo" />
                    </div>
                    <div className="ui container row">
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
