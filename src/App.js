import React from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import Header from './page/base/header'
import routes from './routes/index'
import history from './utils/history';
import PrivateRoute from './routes/privateRoute'
const { Content, Footer} = Layout;



const App = () => {    
    
    return(
        <Layout>
        <Header />
        <Content className="site-layout" style={{ padding: '0 150px', marginTop: 55 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 720 }}>
          <Router history={history}>
          <Switch>
              {routes.map((route, i) =>
                route.needsAuth ? (
                  <PrivateRoute
                    path={route.path}
                    // isLoggedIn={isLoggedIn}
                    component={route.component}
                    key={i}
                  />
                ) : (
                  <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    key={i}
                  />
                ),
              )}
            </Switch>
          </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Cloud Tool Box ©2022 Created by Juqi.Peng</Footer>
      </Layout>
    )
};

export default App