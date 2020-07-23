//Page to take user to journaling suite or meditation resources

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




//alert('Prompt Two!');

class JournalPrompts extends React.Component {
	
	 constructor(props) {
    super(props);
	
	this.onChangePrompt = this.onChangePrompt.bind(this);
    this.onChangeResponse = this.onChangeResponse.bind(this);
    //this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
	
    this.state = {
      prompt: 'p1',
	  response: 'essay goes here',
	  //date: new Date(),
	  
    };
	
	onChangePrompt(e) {
    this.setState({
      prompt: e.target.value
    })
  }
  
  onChangeResponse(e) {
    this.setState({
      username: e.target.response
    })
  }
  
  
  onSubmit(e) {
    e.preventDefault();

    const response = {
      prompt: this.state.prompt,
	  response: this.state.response
    }

    console.log(user);

    axios.post('http://t2serve.herokuapp.com/enntries/add', response)
      .then(res => console.log(res.data));

    this.setState({
      prompt: 'p1',
	  response: 'essay goes here'
    })
  }

  }

  
			
	
	render() {
		return(
			<div className="App">


				<h1>Please Select one of the Prompts Below</h1>

		<div>
        <label>
		
          <select name="prompt" value={this.state.prompt} onChange={this.onChangePrompt}>
            
			<option value="p1">
				Describe something that happened in the last week you have strong feelings about. What happened? What did you do in response?
			</option>
			
            <option value="p2">
				Describe a goal you have for the next [time frame]. What steps do you need to take in order to achieve it? How can you start to do so now?
			</option>
			
            <option value="p3">
				Write about a song you have been listening to a lot recently. Why do you think you are drawn to it?
			</option>
			
            <option value="p4">
				What is the last dream you had that you remember?
			</option>
			
			<option value="p5">
				Describe something you're looking forward to this week:
			</option>
			
			<option value="p6">
				Think about the last time you had strong conflict with someone. What did you do to resolve it? What did you learn from that experience for the next time a similar situation occurs?
			</option>
          
		  </select>
        </label>
	  </div>
	  
	  
	  
	  
	  
	  <div>
	  
	  <form onSubmit={this.onSubmit}>
        <label>
		<div>
          Essay:
		</div>
          <textarea rows="6" cols="70" name="essay" value={this.state.essay} onChange={this.onChangeResponse} />
        </label>
		<div>
        <input type="submit" value="Submit" />
		</div>
	  </form>
	  
	  </div>
		

		
		
		
		
		
		
			</div>
			
		);
	}
}

export default JournalPrompts;
