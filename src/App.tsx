import React, { useRef, useState } from 'react';
import './App.css';
import getPhotoUrl from './GetBackground';
import { Row, Col, Card,Button } from 'antd';
import { AlignLeftOutlined, DownOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';

function App() {
  const [wheel_num,setWheelNum] = useState(0);
  // 滚轮事件
  document.addEventListener('wheel', (event) => {
    setWheelNum(wheel_num+1);
    // 滚轮滑动两次进入新页面
    if (wheel_num > 1) {
      window.location.href = "http://blog.57u.tech";
      setWheelNum(0);
    }
  })
  const basicStyle = getBodyStyle()
  return (<div style={{
    ...basicStyle,
    width: '100%',
  }} >
    <div >
          <Card 
    title="Welcome to 57U's Page" 
    bordered={false} 
    style={{ width: '50vw',background:'#313638B0' }}>
      <p><GithubOutlined /> {HyperLink("https://github.com/57UU","Github")}</p>
      <p><AlignLeftOutlined/> {HyperLink("https://blog.57u.tech/","Blog")}</p>
      <p><LinkOutlined /> {HyperLink("https://blog.57u.tech/link/","友链")}</p>
    </Card>
    <div className='float-down-element' style={{textAlign:'center'}}>
      <div className='shadow-blurred'>My Blog</div>
      <br/>
      <DownOutlined className='shadow-blurred'/>
    </div>
    
    </div>

  </div>)
}
function HyperLink(target:string,text:string){
  return <a href={target}>{text}</a>
}
function getBodyStyle() {
  return {
    backgroundImage: `url('${getPhotoUrl()}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
  };
}
export default App;
