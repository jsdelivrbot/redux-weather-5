import axios from 'axios';

const API_KEY ='162a0e71704e0b2dc08db4443fda7fff';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER"; //to avoid problem in reducer where we return state based on 
//action in switch case
//city arg to get search term and pass it in ajax request
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}, us`;
	const request = axios.get(url);

	console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}