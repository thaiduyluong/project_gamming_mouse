import React from 'react';
import './header.scss'
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Header() {
    return (  
        <div className='container'>
            <div className='wrapper'>
                <div className='logo'>
                    <h1>Logitech</h1>
                </div>
                <div className='menu'>
                    <li>
                        <a href = "#">MUA</a>
                        <a href='#'>KHÁM PHÁ</a>
                        <a href='#'>HỖ TRỢ</a>
                    </li>
                </div>
                <div className='search'>
                    <button>
                        <h5>Tìm kiếm... </h5>
                        <span><IoIosSearch /></span>
                    </button>
                </div>
                <div className='user'>
                <FaUser />
                </div>
            </div>
        </div>
        
    );
}

export default Header;