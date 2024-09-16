import React from 'react';
import { Outlet } from 'react-router-dom';
import Bar from './Bar'; // Thanh điều hướng
import { Cloudinary } from '@cloudinary/url-gen/index';
import { AdvancedImage } from '@cloudinary/react';
import './layout.css';
import Logo from './Logo';


//TIPS :Because this is LAYOUT which mean it will remain constants in pages so before doing anything please gather everything like icons or any fuckthings

const Layout = () => {// Because we're calling a function here (arrow technique)
  const cld= new Cloudinary({cloud:{cloudName:'dozxc6jqp'}

  });
  const backgroundImage=cld.image('background_splpcs');


 


  return (
    //Khúc div đơn thuần chỉ là ừ nói tổng thể cái app nó có style ra sao 

  

    <div className='Layout' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 


       <div className='Background' >
        <AdvancedImage cldImg={backgroundImage} alt="background" style={{
          width:'360px', 
          height:'800px',
                  position: 'absolute',
          top:'-50px',
        zIndex:-10000
        }}></AdvancedImage>
      </div> 




      <div className='backgroundtest'> {/*Đây là mà anh Kiệt bỏ h1 h2 vô á */}
          <header id="Searchbar" style={{ //function icons
            display: 'list-item',
            justifyContent: 'space-between', // This distributes the space between the items
            alignItems:'center',            // Vertically centers the items
            padding: '10px',
            borderBottom: '0px solid #ddd',
            position: 'absolute',
            width: '100%',
            height: '70%',
                  top: -11, // Dùng cho đám function icon
                  left: -7,
                  zIndex:-10
          }}
        > 
          <Logo/>
        </header>
      </div>


      <main style={{ flex: 1, padding: '20px', marginTop: '60px', marginBottom: '60px', overflowY: 'auto' }}>
        <Outlet /> {/*Nó là bấm vào các icon function  ví dụ như lời khuyên , nhật ký trồng cây*/}
      </main>


      <footer style={{ backgroundColor: '#000000', padding: '10px', borderTop: '0px solid #ddd', position: 'fixed', width: '100%', bottom: 0, left: 0, zIndex: 1000, height: '100px' }}>
        <Bar />
      </footer> {/* Kiểu thằng footer mà mày xài xuyên suốt á */ }
    </div>
  
  );//Cái khúc bar là đây là khâu cuối để styling nó à background nó màu gì còn cái phần lấy API là đã xong
}

export default Layout;
