import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider, theme } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
