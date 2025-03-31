import React, {useEffect} from 'react';
import './banner.scss'
import AOS from 'aos';
import "aos/dist/aos.css"

function Banner() {

    useEffect (() =>  {
        AOS.init({duration: 1000})

    }, [])
    return ( 
        <div className="container-banner">
            <div className="wrapper-banner">
                <div className="content-banner" data-aos = 'flip-left'>
                    <h1>SỰ TIẾN HÓA TIẾP THEO CỦA <br/> MỘT CHÚ CHUỘT VÔ ĐỊCH</h1>
                    <p>Hoàn toàn thuận cả hai tay, có hình dạng đối xứng. Hiệu suất cực <br/>
                     nhanh, chính xác và phong cách tùy chỉnh dành cho các game thủ <br/> cạnh tranh.</p>
                     <button>
                        MUA SẮM PRO 2 LIGHTSPEED
                     </button>
                </div>

                <div className="img-product">
                    <img src="/images/Remove-bg.ai_1733825046102.png"/>
                </div>
            </div>
        </div>
     );
}

export default Banner;

// sửa code