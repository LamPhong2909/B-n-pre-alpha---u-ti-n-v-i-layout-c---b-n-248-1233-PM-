import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


// Configure your Cloudinary instance
const Bar = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dozxc6jqp'
    }
  });

  // Retrieve your icons
  const homeIcon = cld.image('Home_o1fvgm');
  const scanIcon = cld.image('Scan_jjwxdd');
  const moreIcon = cld.image('Them_fnoeie');

  return ( //Return là trả về giá trị cho advanced image nó render
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', borderTop: '1px solid #ddd' }}>  {/*Lâm Phong yêu cầu học và nhớ property đi */ }
      
      {/* Trang chủ */}
      <NavLink 
        to="/Home"
        style={{ margin: '0 px' }}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <AdvancedImage cldImg={homeIcon} alt="Home" style={{  width: '74px', height: '46px' }} />
      </NavLink>

      {/* Scan */}
      <NavLink 
        to="/scan"
        style={{ margin: '0 10px' }}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <AdvancedImage cldImg={scanIcon} alt="Scan" style={{ width: '87px', height: '58px' }} />
      </NavLink>

      {/* Thêm */}
      <NavLink 
        to="/About"
        style={{ margin: '0 10px' }}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <AdvancedImage cldImg={moreIcon} alt="More Info" style={{ width: '37px', height: '46px' }} />
      </NavLink>

    </nav>
  );
};

export default Bar;