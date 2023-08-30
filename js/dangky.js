function register() {
    let fullName = document.getElementById("fullName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let course = Array.from(document.querySelectorAll('input[name="course[]"]:checked'), checkbox => checkbox.value);
    
    let fullNameError = document.getElementById("fullNameError");
    let phoneNumberError = document.getElementById("phoneNumberError");
    let emailError = document.getElementById("emailError");
    let courseError = document.getElementById("courseError");

    let isValid = true;

    if (!isValidFullName(fullName)) {
        fullNameError.textContent = "Họ và Tên không hợp lệ";
        isValid = false;
    } else {
        fullNameError.textContent = "";
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        phoneNumberError.textContent = "Số điện thoại không hợp lệ";
        isValid = false;
    } else {
        phoneNumberError.textContent = "";
    }

    if (!isValidEmail(email)) {
        emailError.textContent = "Email không hợp lệ";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (course.length === 0) {
        courseError.textContent = "Vui lòng chọn ít nhất một khóa học";
        isValid = false;
    } else {
        courseError.textContent = "";
    }

    if (isValid) {
        let totalPrice = calculate();
        alert("Đăng ký thành công! Tổng tiền: " + totalPrice);
        if (confirm("Bạn có muốn mua dụng cụ không?")) {
            window.location.href = "Dungcu.html";
        }
    }
}

function isValidFullName(fullName) {
    return fullName.trim() !== "";
}

function isValidPhoneNumber(phoneNumber) {
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function calculate() {
    let checkboxes = document.querySelectorAll('input[name="course[]"]:checked');
    let totalPrice = 0;

    checkboxes.forEach(function (checkbox) {
        totalPrice += parseInt(checkbox.value);
    });

    document.getElementById("totalPrice").value = totalPrice;
    return totalPrice;
}