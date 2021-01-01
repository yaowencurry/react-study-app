import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import { createStore, applyMiddleware } from 'redux';
// import reducer from "./store/reducers/counter";
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import 'antd/dist/antd.css';
import "./assets/style/global.scss";

//async action操作的中间件
import thunk from "redux-thunk";

//async action操作的中间件
// import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))

const render = () => {
  console.log('0',store);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render);