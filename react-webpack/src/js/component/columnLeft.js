import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

var settingMsg = [
	{
		"url": "../../images/stamp.png",
		"desc": "头像",
		"name": "zhengyuling"
	}
];

var settingDropMsg = ["修改密码","用户管理","退出系统"];

var navLeftData = [
	{href: "#", text: "专利交易需求表", item: ["权限列表1", "权限列表2", "权限列表3"]},
	{href: "##", text: "今日跟新需求"},
	{href: "###", text: "专利交易签约表"},
	{href: "####", text: "抽成审核表"},
	{href: "#####", text: "专利交易财务报表"},
	{href: "####", text: "应收应付表"},
	{href: "###", text: "应收未收表"},
	{href: "##", text: "应付未付表"},
	{href: "#", text: "实收实付表"}
]

function SettingStamp(props){
	return(
		<div className="setting-stamp">
			<img src={props.data[0].url} alt={props.data[0].desc}/>
		</div>
	)
};

function SettingName(props){
	return(
		<div className="setting-name">
			{props.data[0].name}
			<i></i>
		</div>
	)
};

class SetBox extends React.Component{
	render(){
		return(
			<div className="set-box">
				<ul>
				{
					this.props.data.map(function(child, i){
						return(
							<li key={new Date().getTime() + i}>
								<i className={"set-box-icon set-box-icon" + (i+1)}></i>
								{child}
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
};

function Setting(){
	return(
		<div className="setting">
			<SettingStamp data={settingMsg} />
			<SettingName data={settingMsg} />
			<SetBox data={settingDropMsg} />
		</div>
	)
};

class NavLeft extends React.Component{
	render(){
		return(
			<ul className="nav-l">
			{
				this.props.data.map(function(child, i){
					return(
						<li key={new Date().getTime() + i}>
							<a href={child.href}>
							 	{child.text}
							 	<i className="nav-add">+</i>
							</a>
							{
								(child.item !=="" && child.item !==undefined)?
								<ul className="nav-items">
								{
									child.item.map(function(child, i){
										return(
											<li key={new Date().getTime() + i}>{child}</li>
										)
									})
								}	
								</ul>: null
							}
						</li>
					)
				})
			}
			</ul>
		)
	}
}

export default function ColumnLeft(){
	return(
		<div className="col-l">
			<div className="col-l-scroll">
				<div className="col-l-box">
					<Setting />
					<NavLeft data={navLeftData} />
				</div>
			</div>
		</div>
	)
}


