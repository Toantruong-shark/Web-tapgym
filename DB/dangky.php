<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Đăng ký</title>
    <link rel="stylesheet" href="../css/dangky.css">
    <script src="../js/dangky.js"></script>
</head>
<body>
<header>
    <a href="TrangChu.html"><img src="../anh/logo2.jpg" alt=""></a>          
</header>
<form action="process.php" method="post">
          <nav>
            <ul class="menu">
                <li><a href="TrangChu.html"> HOME </a></li>
                <li><a href="service.html"> DỊCH VỤ </a></li>
                <li><a href="TienIch.html"> TIỆN ÍCH </a></li>
                <li><a href="KhuyenMai.html"> KHUYẾN MÃI </a></li>
                <li><a href="DungCu.html"> MUA DỤNG CỤ </a></li>
                <li><a href="http://localhost/BaiTapLon/DB/dangky.php"> ĐĂNG KÝ </a></li>
                <div class="search">
                    <input type="search" placeholder="Search..." maxlength="3000">
                    <button type="button">Tìm kiếm</button>
                </div>
            </ul>
        </nav>
    <div class="formdk">
        <h2>Đăng ký tập thử</h2>
        <div class="form-group">
            <label for="fullName">Họ và Tên:</label>
            <input type="text" id="fullName" name="fullName" required>
            <span id="fullNameError" class="error"></span>
        </div>
        <div class="form-group">
            <label for="phoneNumber">Số điện thoại:</label>
            <input type="text" id="phoneNumber" name="phonenumber" required>
            <span id="phoneNumberError" class="error"></span>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <span id="emailError" class="error"></span>
        </div>
        <div class="form-group">
            <label>Khóa học:</label>
            <div>
                <input type="checkbox" id="course1" name="course[]" value="100000" onchange="calculate()">
                <label for="course1">GYM & CARDIO</label>
            </div>
            <div>
                <input type="checkbox" id="course2" name="course[]" value="200000" onchange="calculate()">
                <label for="course2">Yoga</label>
            </div>
            <div>
                <input type="checkbox" id="course3" name="course[]" value="100000" onchange="calculate()">
                <label for="course3">Dance & Zumba</label>
            </div>
            <div>
                <input type="checkbox" id="course4" name="course[]" value="400000" onchange="calculate()">
                <label for="course4">Kick fit</label>
            </div>
            <div>
                <input type="checkbox" id="course5" name="course[]" value="100000" onchange="calculate()">
                <label for="course5">Muay Thai</label>
            </div>
            <div>
                <input type="checkbox" id="course6" name="course[]" value="500000" onchange="calculate()">
                <label for="course6">GroupX bản quyền</label>
            </div>
            <span id="courseError" class="error"></span>
        </div>
        <div class="form-group">
            <label for="totalPrice">Tổng giá:</label>
            <input type="text" id="totalPrice" name="totalPrice" readonly>
        </div>
        <div class="form-group">
            <button type="submit" name="submit">Đăng ký</button>
            <a href="http://127.0.0.1:5500/TrangChu.html">Quay lại trang chủ</a>
        </div>
    </div>
</form>
</body>
</html>