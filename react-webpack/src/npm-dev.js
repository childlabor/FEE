// 开发环境 

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';


// js导入   最终render的复合组件
import './js/scaffold/topBar.js';
import './js/scaffold/content.js';
import './js/component/modelSelectInput.js';
import './js/component/editTable.js';
import './js/component/warningMsgBox.js';

// css导入
import './css/reset.css';
import './css/erp0.css';


// 热替换

// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-wrapper')
  );
};

render(topBar);
render(content);
render(modelSelectInput);
render(editTable);
render(warningMsgBox);

// 模块热替换的 API
if(module.hot) {
  module.hot.accept('./js/scaffold/topBar', () => {
    render(topBar)
  });
}

if(module.hot) {
  module.hot.accept('./js/scaffold/content', () => {
    render(content)
  });
}

if(module.hot) {
  module.hot.accept('./js/component/modelSelectInput', () => {
    render(modelSelectInput)
  });
}

if(module.hot) {
  module.hot.accept('./js/component/editTable', () => {
    render(editTable)
  });
}

if(module.hot) {
  module.hot.accept('./js/component/warningMsgBox', () => {
    render(warningMsgBox)
  });
}
