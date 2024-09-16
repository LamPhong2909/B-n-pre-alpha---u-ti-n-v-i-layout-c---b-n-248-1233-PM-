import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { NavLink } from "react-router-dom";
import './home.css';

const Home = () => {
    const cld = new Cloudinary({
        cloud: { cloudName: 'dozxc6jqp' }
    });

    const searchIcon = cld.image('bar_search_hjac0m');
    const calendarIcon = cld.image('timecare_kajvsp');
    const scanIcon = cld.image('Scan_mngzut');
    const shareIcon = cld.image('Share_xkwyye');
    const diaryIcon = cld.image('Nhatky_e4bhno');
    const dataIcon = cld.image('Database_qojg8p');
    const adviceImage = cld.image('Advice_u38c2v');
    const greenLeaves = cld.image('Back_top_ieqfvz');

    return (
        <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', borderTop: '0px solid #ddd', color: 'white' }}>

            <div classname="title" style={{ position: 'absolute', top: '95px', left: '15px', zIndex: 100, text: 'white', fontSize: '21px',  }} >
                <strong>Danh mục </strong>
            </div>
            <div className="title" style={{ position: 'absolute', top: '350px', left: '15px', zIndex: 100, text: 'white', fontSize: '20px' }}>
                <strong>Hướng dẫn </strong>

            </div>
            {/* Background Image */}
            <div className="background-container">
                <AdvancedImage cldImg={greenLeaves} alt="Hình nền" style={{ width: '567px', height: '111px', position: 'absolute', position: 'absolute', top: -23, left: 0 ,zIndex: -50}} />
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <AdvancedImage cldImg={searchIcon} alt="Tìm kiếm" style={{ width: '352px', height: '39px', position: 'absolute', top: '118px', left: '5px' }} />
            </div>

            {/* White Background Box */}
            <div className="white-box" style={{ position: 'absolute', width: '350px', height: '160px', backgroundColor: 'white', top: '180px', padding: '20px', borderRadius: '15px' }}>

                {/* Icons Inside the White Box */}
                <div className="icon-container">
                    <NavLink to="/scan" className={({ isActive }) => (isActive ? 'active' : '')} style={{ margin: '0 10px' }}>
                        <AdvancedImage cldImg={scanIcon} alt="Quét" style={{ width: '61px', height: '52px', position: 'absolute', top: '15px', right: '25px',zIndex:3000 }} />
                    </NavLink>
                    <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')} >
                        <AdvancedImage cldImg={adviceImage} alt="Lời khuyên" style={{ width: '64px', height: '56px', position: 'absolute', top: '15px', left: '145px' }} />
                    </NavLink>
                    <AdvancedImage cldImg={diaryIcon} alt="Nhật ký trồng cây" style={{ width: '75px', height: '72px', position: 'absolute', top: '12px', left: '28px' }} />
                    <AdvancedImage cldImg={dataIcon} alt="Dữ liệu thực vật" style={{ width: '96px', height: '67px', position: 'absolute', top: '80px', left: '28px' }} />
                    <AdvancedImage cldImg={shareIcon} alt="Chia sẻ cho bạn bè" style={{ width: '51px', height: '55px', position: 'absolute', top: '90px', right: '25px' }} />
                    <AdvancedImage cldImg={calendarIcon} alt="Lịch chăm sóc" style={{ width: '83px', height: '56px', position: 'absolute', top: '90px', left: '143px' }} />
                </div>
            </div>


            {/* test thôi nhớ phải xóa*/}


        </nav>
    );
}

export default Home;