import React from 'react';
import { Layout, Menu } from 'antd';
import header_icon from '../../assets/images/base/header.png'
import './header.scss'
const { Header } = Layout;


export default () => {    
    
    return(
        
        <Header>
            <div className="logo" >
                <img src={header_icon} width={55} height={55} />
                <div className='logo-text'>Cloud Tool Box</div>
            </div>
          {/* <div className="logo" /> */}
          <Menu style={{float: 'right'}} mode="horizontal">
            <Menu.Item key="3">首页</Menu.Item>
            <Menu.Item key="1">格式工厂</Menu.Item>
            <Menu.Item key="2">快捷搜索</Menu.Item>
          </Menu>
        </Header>
        // <img src={header_icon} width={80} height={80} />
        // </div>

    )

};
