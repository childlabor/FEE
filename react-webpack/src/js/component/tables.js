import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

export const tableData = [
	{
		"classname": "erp-table tran-table cust-table no-padding-td",
		"id": "table-fix",
		"thead": ["完成日期", "合同编号", "姓名", "部门", "业务阶段", "操作"],
		"pClass": "line-p",
		"tr": [
			{
				"td": [
					{"p": ["1"]},
					{"p": ["2","22"]},
					{"p": ["3"]},
					{"p": ["4"]},
					{"p": ["5"]},
					{"p": ["删除", "编辑"], "tag": "ope"}
				]
			},{
				"td": [
					{"p": ["11"]},
					{"p": ["22","222"]},
					{"p": ["33"]},
					{"p": ["44"]},
					{"p": ["55"]},
					{"p": ["删除", "编辑"], "tag": "ope"}
				]
			}
		]
	}
]

export default class Table extends React.Component{
	render(){
		var pClass = this.props.data.pClass;
		return(
			<table className={this.props.data.classname} id={this.props.data.id}>
				<thead>
					<tr>
						{
							this.props.data.thead.map(function (child, i){
								return(
									<td key={new Date().getTime() + i}>{child}</td>
								)
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						this.props.data.tr.map(function(child, i){
							return(
								<tr key={new Date().getTime() + i}>
									{
										child.td.map(function(child, i){
											var tag = child.tag;
											return(
												<td key={new Date().getTime() + i}>
												{
													child.p.map(function(child, i){
														return(
															(tag!==undefined)?
															<a href="#" className={tag} key={new Date().getTime() + i}>{child}</a>:
															<p className={pClass} key={new Date().getTime() + i} >{child}</p>
														)
													})
												}
												</td>
											)
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	}
}
