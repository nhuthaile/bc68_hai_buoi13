// Tính tiền lương nhân viên

document.getElementById("btn_tinhTienLuong").onclick = function () {
  const ngayLuong = 100000;
  const ngayCong = document.getElementById("ngayCong").value * 1;
  document.getElementById(
    "ketQuaTienLuong"
  ).textContent = `Tổng tiền lương là ${(ngayCong * ngayLuong).toLocaleString(
    "vi-VN"
  )} VND`;
};

// Tính giá trị trung bình
document.getElementById("btn_giaTrungBinh").onclick = function () {
  let soThu1 = document.getElementById("soThu1").value * 1;
  let soThu2 = document.getElementById("soThu2").value * 1;
  let soThu3 = document.getElementById("soThu3").value * 1;
  let soThu4 = document.getElementById("soThu4").value * 1;
  let soThu5 = document.getElementById("soThu5").value * 1;
  let tong = soThu1 + soThu2 + soThu3 + soThu4 + soThu5;

  document.getElementById("ketQuaTB").innerHTML = `Giá trị trung bình là: ${
    tong / 5
  }`;
};

// Tính quy đổi ra tiền VND

document.getElementById("btn_ketQuaVnd").onclick = function () {
  let tyGia = 23500;
  let soUsd = document.getElementById("soUsd").value * 1;

  let soVnd = tyGia * soUsd;

  document.getElementById(
    "ketQuaVnd"
  ).innerHTML = `Số tiền quy đổi là ${soVnd.toLocaleString("vi-VN")} VND`;
};

// Tính chu vi và diện tích hình chữ nhật
document.getElementById("btn_hinhChuNhat").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;

  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById("ketQuaChuVi").innerHTML = `Chu vi là: ${chuVi} m `;

  document.getElementById(
    "ketQuaDienTich"
  ).innerHTML = `Diện tích là: ${dienTich} m2`;
};

// Tính Tổng 2 Ký Số
document.getElementById("btn_tongKySo").onclick = function () {
  let soNhapVao = document.getElementById("soHaiChuSo").value * 1;
  let kySo1 = Math.floor(soNhapVao / 10);
  let kySo2 = soNhapVao - kySo1 * 10;

  let tong = kySo1 + kySo2;

  document.getElementById("ketQuaKySo").innerHTML = `Tổng 2 ký số là: ${tong}`;
};
