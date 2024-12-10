import './showProduct.scss'

function ShowProduct() {

    const products = [
        {
          image: "./images/image_-_2024-07-10t085519.webp", 
          title: "HÌNH DẠNG THAY ĐỔI CUỘC CHƠI",
          description: "Nó không chỉ là công nghệ; Đó là một phần mở rộng của bạn. DEX có hình thức bất đối xứng, tiện dụng được chế tạo để điều khiển toàn bộ tay phải và khéo léo.",
          link: "MUA SẮM PRO X SUPERLIGHT 2 DEX ►",
        },
        {
          image: "./images/Logitech-G915-X-TKL.webp", 
          title: "KIỂU DÁNG THẤP. NÂNG TẦM.",
          description: "MỚI! G915 X LIGHTSPEED TKL cung cấp những cải tiến mới nhất trong công nghệ chơi game với những cải tiến thế hệ tiếp theo và thiết kế nhỏ gọn, được thiết kế để chơi trên cao.",
          link: "TRẢI NGHIỆM ►",
        },
        {
          image: "./images/tai-nghe-logitech-cua-nuoc-nao-co-tot-khong 14-800x533.jpg", 
          title: "KHÔNG RÀO CẢN",
          description: "Giới thiệu Dòng PRO được nâng cấp hoàn toàn mới. Như thường lệ, được thiết kế với sự hợp tác của những người chơi thể thao điện tử hàng đầu thế giới - và được chế tạo để giành chiến thắng.",
          link: "MUA SẮM THIẾT BỊ MỚI NHẤT VÀ TUYỆT VỜI NHẤT ►",
        },
      ];
  return (
    <div className="product-container">
        {products.map((product, index) => (
            <div key={index} className="product-card">
                <img src={product.image} alt = {product.title} className="product-img"/>
                <div className="product-content">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <a href="#" className="product-link">{product.link}</a>
                </div>
            </div>

        ))}
    </div>
    
  );
}

export default ShowProduct;
