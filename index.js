// BÀI TẬP NỘP: TÍNH THUẾ THU NHẬP CÁ NHÂN 
// SƠ ĐỒ 3 KHỐI 
/**
 * INPUT:Nhập vào họ tên, tổng thu nhập năm, số người phụ thuộc (con nhỏ, bố mẹ già,...)
 * 
 * PROCESS: 1. Nhận giá trị từ input
 *          2. Sử dụng if để tính thu nhập chịu thuế theo tổng thu nhập
 *          3. In giá trị thuế người đó phải nộp ra màn hình.
 * 
 * OUTPUT: Thuế thu nhập cá nhân phải trả theo quy định
 * 
 */

console.log("ex3: Tính thuế thu nhập cá nhân (triệu vn)");

function ex3() {
    var fullName = prompt("vui lòng nhập tên của bạn: ", "");
    var totalIncome = prompt("Vui lòng nhập tổng thu nhập / năm (triệu đồng): ", "");
    var NumpersonDependent = prompt("Số người phụ thuộc đăng kí theo quy định là :", "")
    var incomeTaxes = (totalIncome - 4 - NumpersonDependent * 1.6);
    var personalIncomeTax;
    if (incomeTaxes <= 60) {
        personalIncomeTax = incomeTaxes * 0.05;
    } else if (incomeTaxes > 60 && incomeTaxes <= 120) {
        personalIncomeTax = 60 * 0.05 + (incomeTaxes - 60) * 0.1;
    } else if (incomeTaxes > 120 && incomeTaxes <= 210) {
        personalIncomeTax = 60 * 0.05 + 60 * 0.1 + (incomeTaxes - 120) * 0.15;
    } else if (incomeTaxes > 210 && incomeTaxes <= 384) {
        personalIncomeTax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (incomeTaxes - 210) * 0.2;
    } else if (incomeTaxes > 384 && incomeTaxes <= 624) {
        personalIncomeTax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + (incomeTaxes - 384) * 0.25;
    } else if (incomeTaxes > 624 && incomeTaxes <= 960) {
        personalIncomeTax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (incomeTaxes - 624) * 0.3;
    } else {
        60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (incomeTaxes - 960) * 0.35;

    }
    console.log("Họ tên: ", fullName);
    console.log("Tổng thu nhập/ năm :", totalIncome);
    console.log("Số thuế phải nộp theo quy định / năm là:", personalIncomeTax);
}


// Ex4: Tính tiền cáp 
// SƠ ĐỒ 3 KHỐI 
/**
 * INPUT
 * 
 * 
 * PROCESS:
 * 
 * 
 * OUTPUT:
 */