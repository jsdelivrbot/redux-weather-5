import {FETCH_WEATHER} from '../actions/index';
//state default value is decided based on what kind of data we want to show.
// export default function(state=null, action){
export default function(state=[], action){	
	// console.log(action);
	switch(action.type){
	case FETCH_WEATHER:
		//return state.push(action.payload.data);
		// return state.concat([action.payload.data]);
		return [action.payload.data, ...state];
	}
	return state;

}