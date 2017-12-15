import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import BottomBar, {bottomMsg} from './bottomBar.js';
import Button, {buttonMsg} from './buttonGather.js';
import InputBoxWithWarn from './warningMsgBox.js';
import ModelSelect from './modelSelectInput.js';
import CompBox from './compBox.js';
import Table, {tableData} from './tables.js';

export default function ColumnRight(){
	return(
		<div className="col-r fl">
			<div className="col-r-main">
				{ /* TODO: 插入页面内容 */ }
				<div className="boxing clearfix">
					<p className="title">按钮:</p>
					<Button data={buttonMsg[0]} />
					<Button data={buttonMsg[1]} />
				</div>
				<div className="boxing clearfix">
					<p className="title">可编辑文本:</p>
					<InputBoxWithWarn />
				</div>
				<div className="boxing clearfix">
					<p className="title">select模拟:</p>
					<ModelSelect />
				</div>
				
				<Table data={tableData[0]} />
			</div>
			<BottomBar data={bottomMsg[0]} />
		</div>
	)
}


