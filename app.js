function sendEmail() {
  var pesan = document.getElementById("pesan").value;
//   console.log(pesan)

  window.open("mailto:asyrofulbarokah@gmail.com?subject=subject&body="+pesan);
}
