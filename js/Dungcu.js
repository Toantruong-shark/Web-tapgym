function them(button) {
    let row = button.parentNode.parentNode.cloneNode(true); // Sao chép node cha (tr)
    let btnXoa = row.getElementsByTagName("button")[0];// Tìm button trong node mới
    btnXoa.innerText = "Xóa"; // Sửa innerText của button
    btnXoa.setAttribute('onclick', 'xoa(this)');
    // Lấy giá trị số lượng từ input
    let soluong = row.getElementsByClassName("soluong")[0].value;
    // Tính giá tiền tương ứng với số lượng
    let gia = row.children[3].innerText;
    gia = parseInt(gia);
    gia = gia * soluong;
    row.children[3].innerText = gia;
    document.getElementById("cart").appendChild(row);
    document.getElementById("cart").style.display = "";
    document.getElementById("tong").style.display = ""; // Hiển thị dòng tổng tiền
    tinhTong(); // Gọi hàm tính tổng
}

function xoa(button) {
    let row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhTong(); // Gọi hàm tính tổng
    let cartRows = document.querySelectorAll("#cart tr");
    if (cartRows.length === 0) {
        document.getElementById("tong").style.display = "none"; // Ẩn dòng tổng tiền khi không có sản phẩm trong giỏ hàng
    }
}

function tinhTong() {
    let cart = document.getElementById("cart");
    let rows = cart.getElementsByTagName("tr");
    let tong = 0;

    for (let i = 0; i < rows.length; i++) {
        let price = rows[i].children[3].innerText;
        price = parseInt(price);
        tong += price;
    }

    document.getElementById("tongValue").innerText = tong; // Hiển thị tổng tiền vào tag span có id là tongValue
}

function daott(obj) {
    let row = obj.parentElement.parentElement;
    let btn = row.getElementsByTagName("button")[0];
    btn.disabled = !btn.disabled;
}
document.getElementById("cart").style.display = "none";