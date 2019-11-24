function javascript(){

  var product_ = document.getElementById("item").value;
  var itemSize = document.getElementById("size").value;
  var amount = document.getElementById("quantity").value;
  var name_ = document.getElementById("name").value;
  var address_ = document.getElementById("Address").value;
  var postcode_ = document.getElementById("postcode").value;
  var payment_ = document.getElementById("payment").value;
  var price_ = document.getElementById("price").value;


var mysql = require('mysql');
var con = mysql.createConnection({
  host: "mysql-server-1",
  user: "rm141",
  password: "F48I2StlNu",
  database: "rm141"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO orders(name, address, postcode, payment, item, size, quantity, price) VALUES (name_,address_,postcode_,payment_,product_,itemSize,amount,price_)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
window.open("order.html");




}
