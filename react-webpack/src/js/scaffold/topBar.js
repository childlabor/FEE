import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

// 顶部条

	var navList = [
		{text: "首页", href: "#"},
		{text: "专利交易", href: "##"},
		{text: "区域市场", href: "###"},
		{text: "政策奖励", href: "####"},
		{text: "发票管理", href: "#####"},
		{text: "系统管理", href: "######"}
	];
	
	var topMsgNum = [6,2,4];
	
	function TopLogo(props){  
		return(
			<div className="top-logo fl">
				<i></i>
				<span>{props.name}</span>
			</div>
		)
	};
	
	// es6写法
	class TopNav extends React.Component{
		handleClick() {
	    alert("点击事件");
	    // TODO: 点击添加类名。。。??
	  }
		render() {
			return (
				<ul className="top-nav fl">
				{
					this.props.data.map(function(child, i){
						return (
							<li className="fl" key={new Date().getTime() + i}>
								<a href={child.href} onClick={this.handleClick}>
									<span className={"top-nav-icon top-nav-icon" +(i+1)}></span>
									{child.text}
								</a>
							</li>
						)
					}.bind(this))
				}
				</ul>
			)
		}
	};
	
	class TopMsg extends React.Component{
		render(){
			return(
				<div className="top-msg fr">
				{
					this.props.data.map(function (child, i){
						return(
							<div className = {"badge fl badge" + (i+1)} key={new Date().getTime() + i}>
								<span className={"badge-num badge-num" + (i+1)}>{child}</span>
							</div>
						)
					})
				}
				</div>
			)
		}
	};
	
	function TopBar() {
		return (
			<div className="top-bar clearfix">
				<TopLogo name="ERP" />
				<TopNav data={navList} />
				<TopMsg data={topMsgNum} />
			</div>
		)
	};
	
	ReactDOM.render(
		<TopBar/>,
		document.getElementById("react-box1")
	);