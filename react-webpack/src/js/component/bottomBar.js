import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

export const bottomMsg = [
	{
		"copyright": "Copyright © 2007-2017 xxx 版权所有",
		"opera": "运营商：厦门xxx科技有限公司"
	}
];

export default function BottomBar(props){
	return(
		<div className="erp-bt">
			<span>{props.data.copyright}</span>
			<span className="ml20">{props.data.opera}</span>
		</div>
	)
}


