// script.js

function addToCart(productName) {
    alert(productName + " đã thêm vào giỏ hàng!");
  }

  /* --- Slide khuyến mãi --- */
  const slide = document.querySelector('.promo-slide');
  const images = document.querySelectorAll('.promo-img');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  let index = 0;
  let autoSlideInterval;

  function showSlide(i) {
    if (slide) {
      slide.style.transform = `translateX(-${i * 100}%)`;
    }
  }

  function nextSlide() {
    index = (index + 1) % images.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide(index);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  if (slide && images.length > 0 && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
    startAutoSlide();
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
  
