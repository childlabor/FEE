// 可编辑表格

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

export default class ClickEditInput extends React.Component{
	constructor(props) {  
    super(props); // 必须项 
    this.state = { 
    	edited: false,
    	val: props.initVal 
    };
    this.handleDblClick = this.handleDblClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    
 }
	handleDblClick() {
		this.setState({
			edited: !this.state.edited,
			val: "请输入"
		});
	}
	handleBlur(event) {
		var eVal = event.target.value;
		this.setState({
			edited: false,
			val: eVal
		})
		if(eVal ==""){
			this.setState({
				edited: true
			});
			console.log("不能为空");
		}
	}

//	componentDidUpdate() {
//		this.state.edited && this.refs.editInput.focus();
//	}
	render(){
		var text = this.state.val;
		return(
			this.state.edited?
			<input
			className = "edit-p"
			onDoubleClick = {this.handleDblClick}
			onBlur = {this.handleBlur}
			placeholder = {text}
			ref = "editInput"
			/>
			:<p className="edit-p" onDoubleClick={this.handleDblClick}>{text}</p>
		)
	}
}

