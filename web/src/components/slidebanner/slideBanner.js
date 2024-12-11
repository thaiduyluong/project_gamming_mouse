import React, {useEffect}from "react";
import "./slideBanner.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Đảm bảo đã import CSS của thư viện

const product = [
  {
    image: "/images/tuyenthuxinh.png",
    title:
      "Tất cả chúng ta đều chơi theo cách riêng  " +
      "của mình. Vì lý do các nhân của chúng ta, hãy tận hưởng " +
      "chọn cảm giác giải trí, để không bỏ lỡ những khoảng khắc tuyệt vời nhất ",
    h1: "LET'S START PLAYING GAME",
  },
  {
    image: "/images/tuyển thủ.jpg",
    title:
      '"Nó giúp tôi có sự tự tin và chính xác nhất có thể để chúng tôi có thể giành chiến thắng.' +
      "Tôi từng nghĩ công nghệ không dây quá chậm để chơi game, nhưng giờ đây tôi đang đứng ở sàn đấu " +
      'thế giới và hoàn toàn tự tin về hiệu suất của chuột không dây LIGHTSPEED từ Logitech G."',
      h1: "LET'S START PLAYING GAME",
  },
  {
    image: "/images/ảnh3.png",
    title:
      "Tất cả chúng ta đều chơi theo cách riêng  " +
      "của mình. Vì lý do các nhân của chúng ta, hãy tận hưởng " +
      "chọn cảm giác giải trí, để không bỏ lỡ những khoảng khắc tuyệt vời nhất ",
      h1: "LET'S START PLAYING GAME",
  },
];

const settings = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
};

function SlideBanner() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Thời gian hiệu ứng
    }, []);
  return (
    <div className="container-slide">
      <Slide {...settings}>
        {product.map((item, index) => (
          <div key={index} className="image">
            <img src={item.image} alt="" />
            <div className="title" data-aos = 'fade-up'>
              <h1>{item.h1}</h1>
              <p>{item.title}</p>
              <button>TÌM HIỂU THÊM</button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default SlideBanner;
