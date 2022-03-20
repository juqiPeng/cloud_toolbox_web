import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Header from './header'
import './home.scss'
const { Content, Footer} = Layout;



const Home = () => {    
    
    return(
        <Layout>
        <Header />
        <Content className="site-layout" style={{ padding: '0 150px', marginTop: 55 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 720 }}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Cloud Tool Box ©2022 Created by Juqi.Peng</Footer>
      </Layout>
    )
};

export default Home