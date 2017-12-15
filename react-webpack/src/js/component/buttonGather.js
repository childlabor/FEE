import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

export const buttonMsg = [
	{"classname": "demand-btn", "txt": "筛选"},
	{"classname": "btn-rights add-btn-character", "txt": "提交"}
]

export default function	Button(props){
	return(
		<button type="button" className={props.data.classname}>{props.data.txt}</button>
	)
}
