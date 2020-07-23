//This is where all the past entries will show up (eventually)


import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const { render } = require('react-dom');


const Entry = props => (
  <tr>
    <td>{props.entry.prompt}</td>
    <td>{props.entry.response}</td>
	<td>{props.exercise.date.substring(0,10)}</td>
  </tr>
)

class JournalPast extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {entries: []};
	}
	
	componentDidMount(){
		axios.get('https://t2serve.herokuapp.com/entries/')
		.then(response => {
        this.setState({ entries: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  
  entryList() {
    return this.state.entries.map(currententry => {
      return <Entry entry={currententry} key={currententry._id}/>;
    })
  }
	
    render() {
        return(
		
		 <div>
        <h3>Logged Entries</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Prompt</th>
              <th>Response</th>
			  <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.entryList() }
          </tbody>
        </table>
      </div>
	  )
		
    }
}

export default JournalPast;
