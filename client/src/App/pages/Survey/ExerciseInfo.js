// resource page students are directed to upon
// choosing  "No" when asked if they exercise regularly

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

class ExerciseInfo extends React.Component {
    render() {
        return (
            <div className="ui container padded centered stackable grid">
                <div className="ui container row ten wide">
                    <h2 className="ui center aligned icon header">
                        <i className="basketball ball icon"></i>
                        Exercise Resources
                    </h2>
                </div>

                <div className="ui container row">
                    <h4 className="centered">Tranquil Exercise Log</h4>
                </div>
                <p>Keep track of your workouts and push toward your personal goals</p>

                <div className="ui container row">
                    <div className="column six wide center aligned">
                        <Link to={'./create'}>
                            <button className="big ui button">
                                Add an exercise session to your log
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./exerciselist'}>
                            <button className="big ui button">
                                View your exercise log
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="ui container row">
                    <div className="column six wide center aligned ">
                        <Link to={'./community'}>
                            <button className="big ui button">
                                Join the Tranquil X IU Community
                            </button>
                        </Link>
                        <p>
                            Motivate yourself and others by joining virtual workout
                            groups, exercise challenges, and more!
                        </p>
                    </div>
                </div>
                <h4 className="ui container row">IU Campus Resources</h4>
                <div className="ui container padded row">
                    <div column eight wide center aligned>
                        <p>
                            <Header>
                                IU Campus Gyms
                                <p>
                                    <a href="https://recsports.indiana.edu/home.php">
                                        IU Rec Sports Homepage
                                    </a>
                                </p>
                            </Header>
                        </p>
                        <p>
                            <Header>
                                IU Campus Exercise Facilities COVID-19 info
                                <p>
                                    <a href="https://recsports.indiana.edu/facility-information/coronavirus.php">
                                        COVID-19 live information
                                    </a>
                                </p>
                            </Header>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExerciseInfo;
