import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

export default function CompBox(props){
	return(
		<div className="boxing clearfix">
			<p className="title">{props.txt}</p>
		</div>
	)
}
