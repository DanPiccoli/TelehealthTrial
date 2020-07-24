// Landing page for functionality allowing students to:
// message other students (anon or no),
// form groups (group messaging),
// etc. TODO
// - overall encourages support group formation

import React from 'react';
import { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
/*=======
import wireframe from './wireframe.png';
>>>>>>> deed60cbaec90e424f09595559130e53779e9b97
*/
const { render } = require('react-dom');

class CommunityHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            group:'Stress',
            name: '',
            message: ''
        };

        this.handleClickStress = this.handleClickStress.bind(this);
        this.handleClickLoneliness = this.handleClickLoneliness.bind(this);
        this.handleClickMotivation = this.handleClickMotivation.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClickStress(event) {
        this.state({
            group:'Stress'
        });
    }

    handleClickLoneliness(event) {
        this.state({
            group:'Loneliness'
        });
    }

    handleClickMotivation(event) {
        this.state({
            group:'Motivation'
        });
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleChangeMessage(event) {
        this.setState({
            message: event.target.value,
        });
    }

    handleSubmit(event) {
        alert('Test Message: Name:' + this.state.name + ", Message: " + this.state.message);
    }

    render() {

        return (
            <div className="App">
                <div class="ui inverted vertical labeled icon ui push left thin visible sidebar menu">
                    <a class="item">
                    Menu
                    </a>
                    <a class="item" onClick={this.handleClick}>
                    <b><u>Stress Group</u></b>
                    </a>
                    <Link to={'./communityL'}>
                        <a class="item">
                        Loneliness Group
                        </a>
                    </Link>
                    <Link to={'./CommunityM'}>
                        <a class="item">
                        Motivation Group
                        </a>
                    </Link>
                </div>
                <div class="ui center aligned container">
                    <div className="ui container row">
                        <h1 className="ui header">
                            <div className="content">
                                <br></br>
                                Support Group Messaging
                            </div>
                        </h1>
                        <h2 className="ui header">
                        <div className="content">
                                <br></br>
                                Current Group: Stress
                            </div>
                        </h2>
                    </div>
                    <div className="ui container row">
                        <br></br>
                    </div>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <form class="ui form" onSubmit={this.handleSubmit}>
                                    <div class="field">
                                        <label>Name: </label>
                                        <input type="text" placeholder="Name" onChange={this.handleChangeName}></input>
                                    </div>
                                    <div class="field">
                                        <label>Message: </label>
                                        <textarea rows = "2" value={this.state.message} onChange={this.handleChangeMessage} ></textarea>
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

/* ======
	return(
        <div>
			<div className="ui container row">
				<img className="ui massive image" src={wireframe} alt="wireframe" />
			</div>
			<div>This is a wireframe</div>
		</div>
		);
>>>>>>> deed60cbaec90e424f09595559130e53779e9b97
*/
    }
}

export default CommunityHome;
