// ============= 组件复合 ================

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

// 引入小组件
import ColumnLeft from '../component/columnLeft.js';
import ColumnRight from '../component/columnRight.js';

function Content(){
	return(
		<div className="content clearfix">
			<ColumnLeft/>
			<ColumnRight/>
		</div>
	)
};

ReactDOM.render(
	<Content/ >,
	document.getElementById("react-box2")
);
