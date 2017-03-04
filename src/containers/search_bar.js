import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

//remove export default, when making it a container
class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term: ""
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}
	//on+Element+event: Just a strategy
	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
		//get data from the api
	}
	//form tag is used so that we dont need to check for enter key or click 
	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<span className="input-group-addon"><i className="fa fa-search"></i></span>
				<input className="form-control" 
					value={this.state.term}
					onChange={this.onInputChange}
					placeholder="Get a five day forecast for your city"
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);