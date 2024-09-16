import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import React from "react";
const cld = new Cloudinary({
    cloud: {
      cloudName: 'dozxc6jqp'
    }
  });
  
  // Retrieve the background image
  const background = cld.image('background_splpcs'); // Replace with your background image public ID

const layoutt=({ children }) => { //Children là mấu chốt
    return(
    <div style={{
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}>
        {children}
      </div>
    );
  }
  
  export default BackgroundWrapper;

