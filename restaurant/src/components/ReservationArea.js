import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
export default function ReservationArea() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    axios
      .post('/check_booking', data)
      .then(res => {
        let response = JSON.stringify(res.data);
        console.log('response');
        console.log(response);
        if (response === '-2') {
          alert(
            `Số điện thoại ${data.phone} đã có người sử dụng, vui lòng nhập số điện thoại khác!`
          );
        }
        if (response === '0') {
          alert(
            `Xin lỗi ngày ${data.date}, vào thời điểm lúc ${data.time}h, bàn số ${data.number_table} đã có người đặt, quý khách vui lòng chọn vào khung giờ khác! `
          );
        }
        if (response === '-1') {
          alert(
            `Vào ngày ${data.date}, lúc ${data.time}h , quý khách đã đặt bàn rồi, vui lòng kiểm tra lại!`
          );
        }
        if (response === '1') {
          alert('Đặt  bàn thành công!');
          axios
            .post('/booking', data)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const style_validate = {
    color: 'red'
  };
  return (
    <div className="Reservation_area">
      <div className="rev_icon_1 d-none d-md-block">
        <img src="img/icon/4.png" alt="" />
      </div>
      <div className="rev_icon_2 d-none d-md-block">
        <img src="img/icon/5.png" alt="" />
      </div>
      <div className="rev_icon_3 d-none d-md-block">
        <img src="img/icon/6.png" alt="" />
      </div>
      <div className="container p-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-75">
              <h3>Đặt Bàn</h3>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-xl-6 col-lg-6">
            <div className="map_area">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.422777631438!2d105.75468847885134!3d20.975683387953943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x96fe772983bfa7ca!2zUXVhbmcgTHV54bq_biBRdcOhbg!5e0!3m2!1svi!2sus!4v1581783213505!5m2!1svi!2sus"
                  frameBorder='0'
                  allowFullScreen=""
                  title="map"
                ></iframe>
              </div>
              <div className="box-map-title" style={{ marginTop: 25 }}>
                <h3 style={{ marginBottom: 8 }}>Lẩu nướng HG</h3>
                <div className="inline">
                  <p>5</p>
                </div>
                <div className="inline" style={{ marginLeft: 10 }}>
                  <div className="icon">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
                <div className="inline" style={{ marginLeft: 20 }}>
                  <p> · Nhà hàng</p>
                </div>
                <p>Km 10 Đường Nguyễn Trãi, Hà Đông, Hà Nội</p>
                <div>
                  <p className="inline" style={{ color: '#d93025' }}>
                    Đang mở{' '}
                  </p>
                  <p className="inline" style={{ marginLeft: 20 }}>
                    {' '}
                    · Mở 18h30-1h00 Th2 - CN
                  </p>
                </div>
                <div>
                  <p className="inline">Bình dân</p>
                  <p className="inline" style={{ marginLeft: 20 }}>
                    · Nhóm
                  </p>
                </div>
                <div className="map-contact" style={{ marginTop: 10 }}>
                  <p className="inline">
                    <i
                      className="fa fa-volume-control-phone fa-2x"
                      aria-hidden="true"
                    ></i>
                    <span style={{ marginLeft: 15, fontSize: 20 }}>
                      Liên hệ
                    </span>
                  </p>
                  <p
                    className="inline"
                    style={{ marginLeft: 20, fontSize: 20 }}
                  >
                    0911962958
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Đặt chỗ ngồi */}
          <div className="col-lg-6">
            <div className="book_Form">
              <h3>Đặt chỗ ngay bây giờ </h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                  <div className="col-lg-6">
                    <div className="input_field mb_15">
                      <input
                        name="name"
                        ref={register({
                          required: true,
                          maxLength: 20,
                          minLength: 10
                        })}
                        placeholder="Tên"
                      />
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'required' &&
                          'Vui lòng nhập vào ô này!'}{' '}
                      </div>
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'maxLength' &&
                          'Vui lòng kiểm tra lại tên!'}
                      </div>
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'minLength' &&
                          'Vui lòng kiểm tra lại tên!'}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field mb_15">
                      <input
                        name="phone"
                        ref={register({
                          required: true,
                          maxLength: 11,
                          minLength: 10
                        })}
                        placeholder="Số điện thoại "
                        type="number"
                      />
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'required' &&
                          'Vui lòng nhập vào ô này!'}
                      </div>
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'maxLength' &&
                          'Số điện thoại không hợp lệ!'}
                      </div>
                      <div style={style_validate}>
                        {errors.phone &&
                          errors.phone.type === 'minLength' &&
                          'Số điện thoại không hợp lệ!'}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <div
                        // role="wrapper"
                        className="gj-datepicker gj-datepicker-md gj-unselectable"
                      >
                        <input
                          name="date"
                          type="date"
                          ref={register({ required: true })}
                        />
                        <div
                          style={{
                            color: 'red',
                            marginTop: 18,
                            marginBottom: 15
                          }}
                        >
                          {errors.date &&
                            errors.date.type === 'required' &&
                            'Vui lòng lựa chọn ngày ăn!'}
                        </div>
                        <span
                          className="fa fa-calendar-o"
                        // role="right-icon"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <div className="input_field">
                        <select name="time" ref={register({ required: true })}>

                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                          <option value="23:00">23:00</option>
                        </select>
                        <div style={{ color: 'red' }}>
                          {errors.time &&
                            errors.time.type === 'required' &&
                            'Vui lòng lựa chọn giờ!'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <select
                        name="number_table"
                        ref={register({ required: true })}
                      >
                        <option value="" disabled hidden>
                          Bàn số ?
                        </option>
                        <option value="1"> 1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                        <option value="6">6 </option>
                        <option value="7">7 </option>
                        <option value="8"> 8 </option>
                      </select>
                      <div style={style_validate}>
                        {errors.number_table &&
                          errors.number_table.type === 'required' &&
                          'Vui lòng lựa chọn số bàn sẽ ăn!'}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="input_field">
                      <select name="people" ref={register({ required: true })}>
                        <option value="" disabled hidden>
                          Bạn đi với bao nhiêu người?
                        </option>
                        <option value="5 "> {`< 5`} </option>
                        <option value="5 ">5 </option>
                        <option value="10 ">10 </option>
                        <option value="> 15 "> 15 </option>
                      </select>
                      <div style={style_validate}>
                        {errors.people &&
                          errors.people.type === 'required' &&
                          'Vui lòng lựa chọn số lượng người!'}
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <button className="sumbit_btn" type="submit">
                      Đặt bàn
                    </button>
                  </div>

                  <div className="col-xl-12">
                    <div className="col-lg-12">
                      <div className="single_add d-flex">
                        <div className="icon">
                          <img src="img/svg_icon/address.svg" alt="" />
                        </div>
                        <div className="ifno">
                          <h4>Địa chỉ</h4>
                          <p>
                            Km 10 Đường Nguyễn Trãi, Hà Đông, Hà Nội
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single_add d-flex">
                        <div className="icon">
                          <img src="img/svg_icon/head.svg" alt="" />
                        </div>
                        <div className="ifno">
                          <h4>Liên hệ</h4>
                          <p>0911962958</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single_add d-flex"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
