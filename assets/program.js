document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("introMovie");
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const linksContent = document.querySelector(".links-content");


  /* ========================================
     Video
  ======================================== */

  // 自動再生を試行
  // muted + playsinline によりスマートフォンでも
  // 自動再生できる可能性を高める
  video.play().catch(() => {
    // ブラウザによって自動再生が拒否された場合は
    // controls からユーザーが再生できます
  });


  /* ========================================
     Scroll Indicator
  ======================================== */

  const updateScrollIndicator = () => {

    if (window.scrollY > 50) {
      scrollIndicator.classList.add("hidden");
    } else {
      scrollIndicator.classList.remove("hidden");
    }

  };

  window.addEventListener(
    "scroll",
    updateScrollIndicator,
    { passive: true }
  );

  updateScrollIndicator();


  /* ========================================
     Link Animation
  ======================================== */

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          linksContent.classList.add("visible");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  observer.observe(linksContent);

});