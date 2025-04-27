// script.js

function addToCart(productName) {
    alert(productName + " đã thêm vào giỏ hàng!");
  }

/* giỏ hàng */
document.addEventListener("DOMContentLoaded", function() {
    function updateTotal() {
      const rows = document.querySelectorAll("#cart-items tr");
      let total = 0;
      rows.forEach(row => {
        const priceText = row.querySelectorAll('td')[1].innerText.replace('đ', '').replace(/\./g, '');
        const quantity = row.querySelector('input').value;
        total += parseInt(priceText) * parseInt(quantity);
      });
  
      document.getElementById('total-price').innerText = total.toLocaleString('vi-VN') + 'đ';
    }
  
    // Xóa sản phẩm
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", function () {
        this.closest("tr").remove();
        updateTotal();
      });
    });
  
    // Cập nhật tổng tiền khi thay đổi số lượng
    document.querySelectorAll("#cart-items input").forEach(input => {
      input.addEventListener("input", updateTotal);
    });
  });
  