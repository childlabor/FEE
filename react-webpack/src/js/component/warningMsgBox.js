// 警告提示框

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import ClickEditInput from '../component/editTable.js';

function WarnMsgBox(props) {
	return(
		<span className="effective">{props.tips}</span>
	)
}

export default class InputBoxWithWarn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edited: false,
			val: "双击编辑",
			tipsPassword: "",
			tipsName: ""
		};
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleBlurPassword = this.handleBlurPassword.bind(this);
		this.handleBlurName = this.handleBlurName.bind(this);
	}
	handleChangePassword(event) {
		var eVal = event.target.value;
		let tips = "";
		if(!/^\d{6,10}$/.test(eVal)) {
			tips = "请输入6~10位数字"
		}
		this.setState({
			edited: false,
			val: eVal,
			tipsPassword: tips
		})
	}
	handleChangeName(event) {
		var eVal = event.target.value;
		let tips = "";

		if(!/^\d{6,12}$/.test(eVal)) {
			tips = "请输入6~12位数字"
		}
		this.setState({
			edited: false,
			val: eVal,
			tipsName: tips
		})
	}
	handleBlurPassword(event) {
		var eVal = event.target.value;
		let tips = "";
		if(!/^\d{6,12}$/.test(eVal)) {
			tips = "请输入6~12位数字"
		}
		if(eVal === "") {
			tips = "不能为空"
		}
		this.setState({
			edited: false,
			val: eVal,
			tipsPassword: tips
		})
	}
	handleBlurName(event) {
		var eVal = event.target.value;
		let tips = "";

		if(!/^\d{6,10}$/.test(eVal)) {
			tips = "请输入6~10位数字"
		}
		if(eVal === "") {
			tips = "不能为空"
		}
		this.setState({
			edited: false,
			val: eVal,
			tipsName: tips
		})
	}
	render() {
		return(
			<div>
				<fieldset
				onChange={this.handleChangePassword}
				onBlur={this.handleBlurPassword}>
					<ClickEditInput initVal="双击输入密码" />
					{
						(this.state.tipsPassword!=="")?
						<WarnMsgBox tips={this.state.tipsPassword}/>:null
					}
				</fieldset>
				<fieldset
				onChange={this.handleChangeName}
				onBlur={this.handleBlurName}>
					<ClickEditInput initVal="双击输入用户名" />
					{
						(this.state.tipsName!=="")?
						<WarnMsgBox tips={this.state.tipsName}/>:null
					}
				</fieldset>
			</div>
		)
	}
}
