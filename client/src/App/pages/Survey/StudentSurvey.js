// Student survey

import React from 'react';
// import { Component } from 'react';
// import { Field, reduxForm } from 'redux-form'; // Field is a component from reduxForm
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import Logo2Rect from '../Logo2Rect.jpg';

import './Survey.css';

class StudentSurvey extends React.Component {
    render() {
        return (
            <div className="ui container padded centered stackable grid">
                <div className="ui container row ten wide">
                    <Header className="ui huge header">Hello, how are you?</Header>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./stressor-survey'}>
                            <button className="big ui button">I am stressed</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./mentor-program'}>
                            <button className="big ui button">I am lonely</button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./survey-sleep'}>
                            <button className="big ui button">
                                I am tired or unmotivated
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./professional-information'}>
                            <button className="big ui button">
                                I would like professional help
                            </button>
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

export default StudentSurvey;
