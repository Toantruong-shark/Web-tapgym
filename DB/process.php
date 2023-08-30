<?php
// Thực hiện kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost";
$username = "root";
$password = "";
$database = "dangkytapgym";

$conn = mysqli_connect($servername, $username, $password, $database);
$courses = $_POST['course']; // Mảng các khóa học đã chọn
$coursesString = implode(", ", $courses);

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

// Xử lý dữ liệu đăng ký
if (isset($_POST['submit'])) {
    $fullName = $_POST['fullName'];
    $phoneNumber = $_POST['phonenumber'];
    $email = $_POST['email'];
    // Chuyển đổi mảng khóa học thành chuỗi để lưu vào cơ sở dữ liệu
    $coursesString = implode(", ", $courses);
    $courses = $_POST['course']; // Mảng các khóa học đã chọn
    $totalPrice = $_POST['totalPrice'];

    // Tạo truy vấn INSERT để lưu thông tin đăng ký vào bảng
    $sql = "INSERT INTO dangky (fullName, phoneNumber, email, courses, totalPrice) VALUES ('$fullName', '$phoneNumber', '$email', '$coursesString', '$totalPrice')"; // Thay thế "ten-bang" bằng tên bảng thực của bạn

    if (mysqli_query($conn, $sql)) {
        echo "Đăng ký thành công!";
        echo '<a href="dangky.php" class="back-button">Quay lại</a>';
    } else {
        echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Đóng kết nối đến cơ sở dữ liệu
mysqli_close($conn);
?>