import React from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
import { NavLink } from "react-router-dom";


const Logo = () => {
    const cld = new Cloudinary({
        cloud: { cloudName: 'dozxc6jqp' }
    })
        ;

    const emblem = cld.image('Logo_hyqz85');

    return (
        <div className="logo">

            <AdvancedImage cldImg={emblem} alt="logo" style={{
                width: "87px",
                height: "88px",
            }
            }
            />
        </div>
    )
}
export default Logo
