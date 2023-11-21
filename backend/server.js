const express = require('express');
var mysql = require('mysql2');
const bodyParser = require('body-parser');
var check = require('./function/check');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const accountSid = 'AC9fac6a6c6679afead675da37cde18d8d';
const authToken = '67fe73dfb2aa9a043018b7131656e89e';
const client = require('twilio')(accountSid, authToken);
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '382526',
  port: '3306',
  database: 'restaurant'
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});
app.get('/hotpot', (req, res) => {
  let sql = 'SELECT * FROM `menu_hotpot` ';
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
  // connection.end();
});
app.get('/grill', (req, res) => {
  let sql = 'SELECT * FROM `menu_grill` ';
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
  // connection.end();
});
app.get('/dessert', (req, res) => {
  let sql = 'SELECT * FROM `menu_dessert` ';
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;

    res.end(JSON.stringify(results));
  });

  // connection.end();
});
app.get('/feedback', (req, res) => {
  let sql = 'SELECT * FROM `feedback` ';
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});
app.post('/check_booking', (req, res) => {
  // console.log(req.body);
  let sql = 'SELECT* FROM `booking` ';
  connection.query(sql, (err, results) => {
    if (err) console.log(err);
    const values = JSON.parse(JSON.stringify(results));
    if (check.booking(req.body, values) === -2) {
      res.end('-2');
    } else if (check.booking(req.body, values) === 0) {
      res.end('0');

      // res.end(`Xin lỗi ngày ${req.body.date}, vào thời điểm lúc ${req.body.time}h, bàn số ${req.body.table} đã có người đặt, quý khách vui lòng chọn vào khung giờ khác! `);
    } else if (check.booking(req.body, values) === -1) {
      res.end('-1');
      // res.end(`Vào ngày ${req.body.date}, lúc ${req.body.time}h , quý khách đã đặt bàn rồi, vui lòng kiểm tra lại!`)
    } else {
      res.end('1');
      // res.end('Đặt bàn thành công!');
    }
  });
});
app.post('/booking', (req, res) => {
  console.log('Booking');
  console.log(req.body);
  const { phone, date, time, people, name, number_table } = req.body;

  const sms =
    '\n==ĐẶT BÀN==\n\n' +
    'Tôi tên là: ' +
    name +
    '\nSĐT: ' +
    phone +
    '\nĐã đặt bàn vào ngày: ' +
    date +
    '\nVào lúc: ' +
    time +
    ' h' +
    '\nBàn số: ' +
    number_table +
    '\nSố lượng người: ' +
    people +
    '\n\n====TRÂN TRỌNG====';

  // insert into database
  let sql = `INSERT INTO booking(name, phone, date,  time, people, number_table)  VALUES (?, ? , ?, ?, ?, ?)`;

  let values = [name, phone, date, time, people, number_table];
  connection.query(sql, values, (err, result, fields) => {
    if (err) console.log(err);
    console.log(result);
  });

  // send message to my phone

  client.messages
    .create({
      body: sms,
      from: '+14242537790',
      to: '+84911962958'
    })
    .then(message => {
      console.log('Đã gửi tin nhắn');
      console.log(message.sid);
      res.end('Đã gửi tin nhắn');
    })
    .catch(err => {
      console.log(err);
    });
});
app.post('/check_feedback', (req, res) => {
  let sql = 'SELECT* FROM `feedback` ';
  connection.query(sql, (err, results) => {
    if (err) console.log(err);
    const values = JSON.parse(JSON.stringify(results));
    if (check.feedback(req.body, values) === -1) {
      res.end('-1');
    } else {
      res.end('1');
    }
  });
});
app.post('/feedback', (req, res) => {
  console.log('FeedBack');
  console.log(req.body);
  const { name, content, phone } = req.body;
  let sql = `INSERT INTO feedback(name, content,phone)  VALUES (?, ?, ? )`;
  console.log(sql);
  let values = [name, content, phone];
  connection.query(sql, values, (err, result, fields) => {
    if (err) console.log(err);
    console.log(result);
  });

  res.end('Ok');
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
