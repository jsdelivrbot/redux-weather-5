//why container because it needs to access redux store data

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

//table table-hover are bootstrap classes which style the table
//in return in jsx always add curly braces for js variables
class WeatherList extends Component {

	renderWeather(city_data) {
		const name = city_data.city.name;
		const temps = _.map(city_data.list.map((weather) => {return weather.main.temp;}), (temp) => {return temp-273;});
		const pressures = city_data.list.map((weather) => {return weather.main.pressure;});
		const humidities = city_data.list.map((weather) => {return weather.main.humidity;});
		// const lat = city_data.city.coord.lat;
		// const lon = city_data.city.coord.lon;
		//es6 
		const {lat, lon} = city_data.city.coord;

		return (
			<tr key={city_data.city.name}>
				<td>
				<GoogleMap lat={lat} lon={lon} />
				{/*{city_data.city.name}*/}
				</td>
				<td><Chart data={temps} color="orange" units="&deg;C" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="blue" units="%" /></td>
			</tr>
		)

	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// function mapStateToProps(state){
// 	return {
// 		weather: state.weather
// 	}
// }

//es6 syntax
function mapStateToProps({weather}){
	return {weather};
}


export default connect(mapStateToProps)(WeatherList);