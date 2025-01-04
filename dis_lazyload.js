document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.removeAttribute('loading'); // 移除懒加载属性
  });
});
