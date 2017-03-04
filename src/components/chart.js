import React from 'react';
import { Sparklines,SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
	return _.round(_.sum(data)/data.length);
}

const Chart = function(props){
	return (
		<div>
			<Sparklines data={props.data} width={180} height={120}>
			  <SparklinesLine color={props.color} />
			  <SparklinesReferenceLine avg={props.avg} />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>		
		</div>
	)
}

export default Chart;