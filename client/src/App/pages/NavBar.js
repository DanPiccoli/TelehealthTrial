// Navigation Bar along top of every page

import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    state = {};

    handleClick = (event, { name }) => {
        this.setState({ activeItem: name });
    };

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary pointing>
                <Menu.Item
                    as={NavLink}
                    to="/"
                    name="Home"
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/survey"
                    name="Student Resource Matcher"
                    active={activeItem === 'StudentSurvey'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink}
                    to="/community"
                    name="CommunityHome"
                    active={activeItem === 'CommunityHome'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item
                    as={NavLink}
                    to="/JournalHome"
                    name="My Journal"
                    active={activeItem === 'My Journal'}
                    onClick={this.handleItemClick}
                />
				<Menu.Item
					as={NavLink}
					to"/MeditationPage"
					name="Guided Meditation"
					active={activeItem === 'Guided Meditation'}
					onClick={this.handleItemClick}
				/>
                <Menu.Item
                    as={NavLink}
                    to="/resources"
                    name="All Resources"
                    active={activeItem === 'ResourceList'}
                    onClick={this.handleItemClick}
                />
				
				<Menu.Item
                    as={NavLink}
                    to="/create"
                    name="Create Exercise"
                    active={activeItem === 'CreateExercise'}
                    onClick={this.handleItemClick}
                />
				
				<Menu.Item
                    as={NavLink}
                    to="/exerciselist"
                    name="Exercise List"
                    active={activeItem === 'ExercisesList'}
                    onClick={this.handleItemClick}
                />
				
            </Menu>
        );
    }
}

export default NavBar;
