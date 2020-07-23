// Student survey

import React from 'react';
// import { Component } from 'react';
// import { Field, reduxForm } from 'redux-form'; // Field is a component from reduxForm
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import Logo2Rect from './Logo2Rect.jpg';

class ResourceList extends React.Component {
    render() {
        return (
            <div className="ui container padded centered stackable grid">
                <div className="ui container row ten wide">
                    <Header className="ui huge header">All Resources</Header>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./professional-information'}>
                            <button className="big red ui button">
                                Professional Help
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./covid-routine-resources'}>
                            <button className="big ui button">
                                COVID-19 Routine Resources
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./financial-resources'}>
                            <button className="big ui button">Financial Resources</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./first-year-resources'}>
                            <button className="big ui button">
                                First Year Student Resources
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./job-resources'}>
                            <button className="big ui button">
                                Resources for working students
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./schoolwork-resources'}>
                            <button className="big ui button">
                                Schoolwork Resources
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./exercise-resources'}>
                            <button className="big ui button">Exercise Resources</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./mentor-program'}>
                            <button className="big ui button">Mentor Program</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./sleep-resources'}>
                            <button className="big ui button">Sleep Resources</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./nutrition-resources'}>
                            <button className="big ui button">Nutrition Resources</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <img className="ui small image" src={Logo2Rect} alt="Logo" />
                </div>
            </div>
        );
    }
}

export default ResourceList;
