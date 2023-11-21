import React from 'react';

export default function AboutArea() {
  return (
    <div className="about_area">
      <div className="icon_1 d-none d-md-block">
        <img src="img/icon/1.png" alt="" />
      </div>
      <div className="icon_2 d-none d-md-block">
        <img src="img/icon/2.png" alt="" />
      </div>
      <div className="icon_3 d-none d-md-block">
        <img src="img/icon/3.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_info_wrap">
              <h3>Lẩu nướng HG</h3>
              <span className="long_dash"></span>
              <p>
                Lẩu nướng HG sẽ đưa bạn đến yên bình, nơi những con phố bình
                dị, với những món ăn dân dã, giá cả hợp lý, Nếu đã một lần
                thưởng thức thịt nướng tại Lẩu nướng HG bạn sẽ không
                thể quên được hương vị “ngất ngây” của những món thịt bò Mỹ,
                mực tươi…. ăn kèm với đó là món kim chi siêu cay, giúp quý
                khách thưởng thức những món thịt nướng mà không bị ngấy, ăn
                hết lại muốn gọi thêm. Bí quyết của quán nằm ở nước sốt me chấm
                thịt nướng, nước sốt được làm từ me tươi nấuvới quế tạo mùi
                hương nồng nhẹ cay cay, tạo cảm giác ngon miệng khi chấm kèm
                với thịt nướng.Ngoài nướng nổi tiếng nhiều năm nay, hiện nay
                nhà hàng có bán thêm những món lẩu, tất cả các món ăn được ghi
                rõ ở thực đơn, chúc quý khách ăn ngon miệng!
              </p>
              <ul className="food_list">
                <li>
                  <img src="img/svg_icon/salad.svg" alt="" />
                  <span>Món lẩu </span>
                </li>
                <li>
                  <img src="img/svg_icon/tray.svg" alt="" />
                  <span>Món nướng</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_img">
              <div className="img_1">
                <img src="img/about/about_1.png" alt="" width='460px' height='440px' />
              </div>
              <div className="small_img">
                <img src="img/about/about_2.png" alt="" width='321px' height='324px' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
