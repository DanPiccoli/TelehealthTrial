// App compnent - includes the browser router and NavBar

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Component Imports
import NavBar from './NavBar';

import Home from './Home';
import CommunityHome from './CommunityHome';

import MySpace from './MySpace';
import MeditationPage from './MeditationPage';
import JournalHome from './JournalHome';
import JournalPrompts from './JournalPrompts';
import JournalPast from './JournalPast';
import StudentSurvey from './Survey/StudentSurvey';
import FormStress from './Survey/FormStress';
import CovidRoutineInfo from './Survey/stress-resources/CovidRoutineInfo';
import FinanceInfo from './Survey/stress-resources/FinanceInfo';
import FirstYearInfo from './Survey/stress-resources/FirstYearInfo';
import JobInfo from './Survey/stress-resources/JobInfo';
import SchoolworkInfo from './Survey/stress-resources/SchoolworkInfo';
import MentorProg from './Survey/MentorProg';
import ProfessionalInfo from './Survey/ProfessionalInfo';
import FormSleep from './Survey/FormSleep';
import SleepInfo from './Survey/SleepInfo';
import FormEating from './Survey/FormEating';
import EatingInfo from './Survey/EatingInfo';
import FormExercise from './Survey/FormExercise';
import ExerciseInfo from './Survey/ExerciseInfo';
import FormStressTired from './Survey/FormStressTired';
import ResourceList from './ResouceList';

import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

class App extends Component {
    render() {
        const App = () => (
            <div className="ui container">
                <BrowserRouter>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/survey" component={StudentSurvey} />
                    <Route path="/stressor-survey" component={FormStress} />
                    <Route path="/covid-routine-resources" component={CovidRoutineInfo} />
                    <Route path="/financial-resources" component={FinanceInfo} />
                    <Route path="/first-year-resources" component={FirstYearInfo} />
                    <Route path="/job-resources" component={JobInfo} />
                    <Route path="/schoolwork-resources" component={SchoolworkInfo} />
                    <Route path="/mentor-program" component={MentorProg} />
                    <Route
                        path="/professional-information"
                        component={ProfessionalInfo}
                    />
                    <Route path="/survey-sleep" component={FormSleep} />
                    <Route path="/sleep-resources" component={SleepInfo} />
                    <Route path="/survey-eating-habits" component={FormEating} />
                    <Route path="/nutrition-resources" component={EatingInfo} />
                    <Route path="/survey-exercise" component={FormExercise} />
                    <Route path="/exercise-resources" component={ExerciseInfo} />
                    <Route path="/survey-stress-yn" component={FormStressTired} />
                    <Route path="/community" component={CommunityHome} />
                    <Route path="/MySpace" component={MySpace} />
                    <Route path="/MeditationPage" component={MeditationPage} />
                    <Route path="/JournalHome" component={JournalHome} />
                    <Route path="/JournalPrompts" component={JournalPrompts} />
                    <Route path="/JournalPast" component={JournalPast} />
                    <Route path="/resources" component={ResourceList} />

                    <Route path="/exerciselist" exact component={ExercisesList} />
                    <Route path="/edit/:id" component={EditExercise} />
                    <Route path="/create" component={CreateExercise} />
                    <Route path="/user" component={CreateUser} />
                </BrowserRouter>
            </div>
        );
        return <App />;
    }
}

export default App;
