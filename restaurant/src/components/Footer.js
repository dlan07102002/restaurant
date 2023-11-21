import React from 'react';
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-3 ">
              <div className="footer_widget">
                <div className="footer_logo">
                  <Link to="/">
                    <img src="img/footer_logo.png" alt="" />
                  </Link>
                </div>
                <p>
                  Km 10 Đường Nguyễn Trãi, <br />  Hà Đông, Hà Nội
                  <br />
                  <Link to="/">+84911962958</Link>
                  <br />
                  <Link to="/">datban@gmail.com</Link>
                </p>
                <p></p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=611WYDonzTU">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4 offset-xl-1">
              <div className="footer_widget">
                <h3 className="footer_title">Lẩu nướng HG quán</h3>
                <ul>
                  <li>
                    <Link to="/menu">Thực đơn</Link>
                  </li>
                  <li>
                    <Link to="/about">Giới thiệu</Link>
                  </li>
                  <li>
                    <Link to="/booking"> Đặt bàn</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title">Đăng ký</h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Nhâp email của bạn" />
                  <button type="submit">Đăng ký</button>
                </form>
                <p className="newsletter_text">
                  Đăng ký email để nhận được thông báo về các chương trình khuyến mại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
