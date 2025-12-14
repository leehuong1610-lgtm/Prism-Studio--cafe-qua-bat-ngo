let qua = ["vevip", "voucher", "banh", "sticker"];
let lopphu = document.getElementById("overlay");
let action1 = document.getElementById("muahang");
let vevip = document.getElementById("vip");
let voucher = document.getElementById("voucher");
let banh = document.getElementById("banh");
let sticker = document.getElementById("sticker");
let back = document.getElementById("back1");
let tieptuc = false;
let tiensize;
let tongtien = 0;
let phuongthuc = false;

function tinhTien() {
    let size = document.getElementById("size").value;
    let soluong = Number(document.getElementById("soluong").value);
    let thanhtien = document.getElementById("thanhtien");
    let tiensize = 0;

    if (size === "s") tiensize = 35000;
    else if (size === "m") tiensize = 45000;
    else if (size === "l") tiensize = 50000;
    else if (size === "xl") tiensize = 55000;

    return soluong * tiensize;
}

function randomqua() {
    return qua[Math.floor(Math.random() * qua.length)];
}

function hideAll() {
    vevip.style.display = "none";
    voucher.style.display = "none";
    banh.style.display = "none";
    sticker.style.display = "none";
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tongtien = tinhTien();
    thanhtien.textContent = tongtien.toLocaleString("vi-VN") + " VNĐ";

    if (action1.textContent.trim() === "Tiếp tục") {
        hideAll();
        let quarandom = randomqua();
        let popup;

        switch (quarandom) {
            case "vevip": popup = vevip; break;
            case "voucher": popup = voucher; break;
            case "banh": popup = banh; break;
            case "sticker": popup = sticker; break;
        }

        popup.style.display = "flex";
        lopphu.style.display = "flex";
        action1.textContent = "Đặt hàng";
        action1.style.background = "#01820B";

        setTimeout(() => {
            popup.style.display = "none";
            lopphu.style.display = "none";
        }, 2000);
        thanhtien.textContent = tongtien.toLocaleString("vi-VN") + " VNĐ";

    } else {
        Swal.fire({
            title: "Đặt hàng thành công !",
            icon: "success",
            draggable: true
        });
        action1.style.display = "none";
        back.style.display = "flex";
    }
});

