import './gamingProduct.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function GamingProduct() {
    const product = [
        {
            imageDefault: "./images/tai-nghe-chup-tai-gaming-logitech-g431-71-den-xanh-6-2.jpg",
            imageHover: './images/tai-nghe-chup-tai-gaming-logitech-g-pro-den-12.jpg',
            title: 'TAI NGHE CHƠI GAME'
        },
        {
            imageDefault: "./images/f710-feature-6.webp",
            imageHover: './images/tay-cam-choi-game-logich-f710.jpg',
            title: 'TAI CẦM CHƠI GAME'
        },
        {
            imageDefault: "./images/chuot-logitech-2.jpg",
            imageHover: './images/chuot-may-tinh-logitech-su-dang-cap-da-duoc-chung-10-800x450.jpg',
            title: 'CHUỘT CHƠI GAME'
        },
        {
            imageDefault: "./images/g913-tkl-wireless2_a1090886908148388061ef8d345c87d3_2f9c529d5fb7403da9d886b280428537.webp",
            imageHover: './images/53337_thiet-ke-cua-ban-phim-logitech-g913-tkl-lightspeed-wireless-rgb-brown-switch.png',
            title: 'BÀN PHÍM CHƠI GAME'
        },
        {
            imageDefault: "./images/hình-1.jpg",
            imageHover: './images/image_-_2024-07-10t085519.webp',
            title: 'LÓT CHUỘT CHƠI GAME'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4 ,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="container-gaming">
            <div className="wrapper-gaming">
                <div className="introduce">
                    <h1>THIẾT BỊ CHƠI GAME UY TÍN</h1>
                    <p>Chúng tôi đem đến cho các bạn những giây phút chơi game đỉnh cao</p>
                </div>

                <div className="slide-product">
                    <div className='slide-container'>
                        <Slide {...settings}>
                            {product.map((product, index) => (
                                <div key={index} className='product-cart'>
                                    <div className='product-img'>
                                        <img src={product.imageDefault} className='img-default'/>
                                        <img src={product.imageHover} className='img-hover'/>
                                        <button>MUA NGAY</button>
                                    </div>
                                    
                                    <div className='product-title'>
                                        <h3>{product.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamingProduct;
