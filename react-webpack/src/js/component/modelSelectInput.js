// 模拟select

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

//var optionSelctor = ["选项1", "选项2", "选项3"];

export default class ModelSelect extends React.Component{
	render(){
		return(
			<div className="mod-select">
				<div className="box-select">
					<input className="input-select" placeholder="--请选择--" />
					<span className="icon-select"></span>
				</div>
				<div className="box-option">
					<ul className="option-select">
					{
						this.props.data.map(function(child, i){
							return(
								<li key={new Date().getTime() + i}>{child}</li>
							)
						})
					}
					</ul>
				</div>
			</div>
		)
	}
}
// 设置默认初始值
ModelSelect.defaultProps = {data: ["选项3", "选项2", "选项1"]};


