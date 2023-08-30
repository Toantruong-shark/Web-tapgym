
    function validateForm() {
        var fullName = document.getElementById("fullName").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var email = document.getElementById("email").value;
        var courses = document.getElementsByName("course[]");
        
        var hasSelectedCourse = false;
        for (var i = 0; i < courses.length; i++) {
            if (courses[i].checked) {
                hasSelectedCourse = true;
                break;
            }
        }
        
        var isValidForm = true;
        
        // Kiểm tra điều kiện của các trường
        if (fullName === "") {
            document.getElementById("fullNameError").innerHTML = "Vui lòng nhập Họ và Tên.";
            isValidForm= false;
        } else {
            document.getElementById("fullNameError").innerHTML = "";
        }
        
        if (phoneNumber === "") {
            document.getElementById("phoneNumberError").innerHTML = "Vui lòng nhập Số điện thoại.";
            isValidForm = false;
        } else {
            document.getElementById("phoneNumberError").innerHTML = "";
        }
        
        if (email === "") {
            document.getElementById("emailError").innerHTML = "Vui lòng nhập Email.";
            isValidForm = false;
        } else {
            document.getElementById("emailError").innerHTML = "";
        }
        
        if (!hasSelectedCourse) {
            document.getElementById("courseError").innerHTML = "Vui lòng chọn ít nhất một khóa học.";
            isValidForm = false;
        } else {
            document.getElementById("courseError").innerHTML = "";
        }
        
        // Hiển thị thông báo kết quả đăng ký
        if (isValidForm) {
            document.getElementById("resultMessage").innerHTML = "Đăng ký thành công!";
            document.getElementById("resultMessage").classList.remove("error");
            document.getElementById("resultMessage").classList.add("success");
        } else {
            document.getElementById("resultMessage").innerHTML = "Đăng ký không thành công. Vui lòng kiểm tra lại thông tin.";
            document.getElementById("resultMessage").classList.remove("success");
            document.getElementById("resultMessage").classList.add("error");
        }
    }
