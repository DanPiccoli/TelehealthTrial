// form that students are directed to upon choosing "I am stressed"
// from the initial question asked "Hello, how are you?"
// Asks students what they are stressed about to redirect to relevant resources

import React, { Component } from 'react';
import { Field, reduxForm, formValues } from 'redux-form';
import {
    Form,
    Icon,
    Button,
    Input,
    Dropdown,
    Header,
    Grid,
    Container,
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { reportStress } from '../../actions';

class FormStress extends React.Component {
    onSubmit = (formValues) => {
        // calls action creator
        this.props.reportStress(formValues);
        // change these links for each induvidual university
        if (formValues.stressor === 'school') {
            this.props.history.push('/schoolwork-resources');
        } else if (formValues.stressor === 'job') {
            this.props.history.push('/job-resources');
        } else if (formValues.stressor === 'firstyear') {
            this.props.history.push('/first-year-resources');
        } else if (formValues.stressor === 'covid') {
            this.props.history.push('/covid-routine-resources');
        } else {
            // finances
            this.props.history.push('/financial-resources');
        }
    };

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error messge">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Row centered>
                        <Form
                            onSubmit={this.props.handleSubmit(this.onSubmit)}
                            className="ui form error"
                        >
                            <div className="ui container padded centered stackable grid">
                                <div className="ui container row left floated">
                                    <label>
                                        <Header>What are you stressed about?</Header>
                                    </label>
                                </div>
                                <div className="ui container row">
                                    <div column six wide center aligned>
                                        <Field name="stressor" component="select">
                                            <option></option>
                                            <option value="school">Schoolwork</option>
                                            <option value="job">Job</option>
                                            <option value="firstyear">
                                                First Year Student Life
                                            </option>
                                            <option value="covid">
                                                Routine affected by COVID-19
                                            </option>
                                            <option value="finances">
                                                Financial Situation
                                            </option>
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div className="column two wide center aligned">
                                <div className="ui container row two wide">
                                    <button className="ui button primary center aligned">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.stressor) {
        errors.stressor = 'You must select a stress point';
    }
    return errors;
};

FormStress = reduxForm({
    form: 'stress-report',
    validate,
    fields: [null],
})(FormStress);

FormStress = connect(null, { reportStress })(FormStress);

export default FormStress;
