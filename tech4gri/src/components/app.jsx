//PAGE là các trang được làm riêng còn đây là nơi để ROUTING




//ĐÂY LÀ NƠI QUY ĐỊNH ROUTING CỦA CÁC PAGE
import React from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages/Home'; // HomePage bị chỉ định là index --> đổi
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
import Index from '../pages/index'; // 1 ERROR
import Layout from '../pages/Layout';
import Home from '../pages/Home'

const MyApp = () => { //hình như ở đây routing chứ chưa viết gì 
  return (
    <RecoilRoot>  {/*  */}
      <App>
        <SnackbarProvider>
          <ZMPRouter>
              <AnimationRoutes> 
                <Route path="/Home" element={<HomePage />} />  
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<Form />} />
                <Route path="/user" element={<User />} />
                <Route path="/scan" element={<Index />} />
              </AnimationRoutes>
              <Layout/>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}

export default MyApp;
