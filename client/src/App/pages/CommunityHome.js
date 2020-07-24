// Landing page for functionality allowing students to:
// message other students (anon or no),
// form groups (group messaging),
// etc. TODO
// - overall encourages support group formation

import React from 'react';
import { Component } from 'react';
import { Grid } from 'semantic-ui-react';

const { render } = require('react-dom');

class CommunityHome extends React.Component {
    render() {
        return (
            <div className="App">
                <div class="ui inverted vertical labeled icon ui push left thin visible sidebar menu">
                    <a class="item">
                    Menu
                    </a>
                    <a class="item">
                    Stress Group
                    </a>
                    <a class="item">
                    Loneliness Group
                    </a>
                    <a class="item">
                    Motivation Group
                    </a>
                </div>
                <div class="ui center aligned container">
                    <div className="ui container row">
                        <h2 className="ui header ">
                            <div className=" content">
                                <br></br>
                                Support Group Messaging
                            </div>
                        </h2>
                    </div>
                    <div className="ui container row">
                        <br></br>
                    </div>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <form class="ui form">
                                    <div class="field">
                                        <label>Name: </label>
                                        <input type="text" name="first-name" placeholder="Name"></input>
                                    </div>
                                    <div class="field">
                                        <label>Message: </label>
                                        <textarea rows = "2"></textarea>
                                    </div>
                                    <button class = "ui button" type="submit">Submit</button>
                                </form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                </div>
                <div className="ui container row">
                        <h2 className="ui header ">
                            <div className=" content">
                                <br></br>
                                Message History
                            </div>
                        </h2>
                    </div>
            </div>
            
        );
    }
}

export default CommunityHome;
