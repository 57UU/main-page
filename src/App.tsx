import React, { useRef, useState } from 'react';
import './App.css';
import getPhotoUrl from './GetBackground';
import { Row, Col, Card, Button } from 'antd';
import { AlignLeftOutlined, DownOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';

function App() {
  const [wheel_num, setWheelNum] = useState(0);
  // 滚轮事件
  document.addEventListener('wheel', (event) => {
    setWheelNum(wheel_num + 1);
    // 滚轮滑动两次进入新页面
    if (wheel_num > 1) {
      window.location.href = "http://blog.57u.tech";
      setWheelNum(0);
    }
  })
  const basicStyle = getBodyStyle()
  return (<div style={{
    ...basicStyle,
    //width: 'auto',
    padding: '2rem',
  }} >
    <div >
      <Card
        title={<h3>Welcome to 57U's Page</h3>}
        bordered={false}
        className='adaptive-element'
        style={{
          background: '#313638B0',
          top: '20%'
        }}>
        <p><GithubOutlined /> {HyperLink("https://github.com/57UU", "Github")}</p>
        <p><AlignLeftOutlined /> {HyperLink("https://blog.57u.tech/", "Blog")}</p>
        <p><LinkOutlined /> {HyperLink("https://blog.57u.tech/link/", "友链")}</p>
      </Card>
    </div>
    <ScrollDownIndicator />


  </div>)
}
function ScrollDownIndicator() {
  return (
    <a className='float-down-element remove-underline' href='https://blog.57u.tech/'>
      <div  style={{ textAlign: 'center',color:'white' }} >
        <div className='shadow-blurred'>My Blog</div>
        <br />
        <DownOutlined className='shadow-blurred' />
      </div>
    </a>
  )
}
function HyperLink(target: string, text: string) {
  return <a href={target} className='hyperlink-color'>{text}</a>
}
function getBodyStyle() {
  return {
    backgroundImage: `url('${getPhotoUrl()}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    //alignItems: '20%',
    height: '100vh',
    justifyContent: 'center',
  };
}
export default App;
