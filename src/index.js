import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
ReactDOM.render(

  <Provider store={store}>

  <StyledEngineProvider theme={theme} >
    <App />
  </StyledEngineProvider>
  </Provider>,
  document.querySelector("#root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
