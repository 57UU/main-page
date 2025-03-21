import { useEffect, useState } from 'react';
import './App.css';
import getPhotoUrl from './GetBackground';
import { Card, Button, FloatButton } from 'antd';
import { AlignLeftOutlined, CloudOutlined, DownOutlined, GithubOutlined, LinkOutlined, ReloadOutlined, TableOutlined } from '@ant-design/icons';
import Projects from './Projects';
import Pages from './Pages';



export default function Entry() {
  const [page, setPage] = useState(Pages.Home)
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(-1);
  switch (page) {
    case Pages.Home:
      return <div key="home" className="fade-in"><Home setPage={setPage} backgroundImageIndex={backgroundImageIndex} setBackgroundImageIndex={setBackgroundImageIndex} /></div>
    case Pages.Projects:
      return <div key="projects" className="fade-in"><Projects setPage={setPage} /></div>
  }
}


function Home({ setPage, backgroundImageIndex,setBackgroundImageIndex }: {
    setPage: (page: Pages) => void,
    backgroundImageIndex: number,
    setBackgroundImageIndex: (index: number) => void,
  }) {

  const [wheel_num, setWheelNum] = useState(0);

  const [basicStyle, setBasicStyle] = useState(getBodyStyle(backgroundImageIndex,setBackgroundImageIndex))
  const gotoProjects = () => {
    setPage(Pages.Projects)
  }
  // 滚轮事件
  useEffect(() => {
    const callback = (event: { deltaY: number; ctrlKey: any; metaKey: any; }) => {
      if (event.deltaY < 0 || event.ctrlKey || event.metaKey) {
        setWheelNum(0);
        return;
      }
      setWheelNum(wheel_num + 1);
    }
    document.addEventListener('wheel', callback)
    return () => {
      document.removeEventListener('wheel', callback)
    }
  }, [wheel_num])//only run one time
  // 滚轮事件
  useEffect(() => {
    console.log("wheel:" + wheel_num)
    // 滚轮滑动两次进入新页面
    if (wheel_num > 1) {
      window.location.href = ("http://blog.57u.tech")
      setWheelNum(0);
    }
  }, [wheel_num])

  //const basicStyle = getBodyStyle()
  return (<div style={{
    ...basicStyle,
    //width: 'auto',
    //padding: '2rem',
  }} >
    <div >
      <FloatButton
        shape="circle"
        type="primary"
        icon={<ReloadOutlined />}
        onClick={() => {
          setBasicStyle(getBodyStyle(-1,setBackgroundImageIndex))
        }}
      />
      <Card
        title={<h3 className='white'>Welcome to 57U's Page</h3>}
        bordered={false}
        className='adaptive-element white'
        style={{
          background: '#313638B0',
          top: '20%'
        }}>
        <p><AlignLeftOutlined /> {HyperLink("https://blog.57u.tech/", "Blog")}</p>
        <p><GithubOutlined /> {HyperLink("https://github.com/57UU", "Github")}</p>
        <p><CloudOutlined /> {HyperLink("https://weather.57u.tech/", "Weather")}</p>
        <p><TableOutlined /> {HyperLink("https://truth-table.57u.tech/", "Truth Table Generator")}</p>
        <p><LinkOutlined /> {HyperLink("https://blog.57u.tech/link/", "More Links")}</p>
        <div style={{ paddingTop: "20px", textAlign: 'center' }} ><Button onClick={gotoProjects} type="primary" shape="round" icon="🏅 My Projects" size={"middle"} /></div>
      </Card>

    </div>

    <ScrollDownIndicator />


  </div>)
}
function ScrollDownIndicator() {
  return (
    <a className='float-down-element remove-underline' href='https://blog.57u.tech/'>
      <div style={{ textAlign: 'center', color: 'white' }} >
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
function getBodyStyle(index: number,setImageIndex:(index:number)=>void) {
  let result=getPhotoUrl(index)
  setImageIndex(result.index)
  return {
    backgroundImage: `url('${result.img}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    //alignItems: '20%',
    height: '100vh',
    justifyContent: 'center',
  };
}

