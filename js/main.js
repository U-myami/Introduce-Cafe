// hamburgermenu
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// hamburgermenuが押された
hamburger.addEventListener("click", () => {
  // activeclass追加・削除
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// slide
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// next
nextBtn.addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex++;

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }

  slides[currentIndex].classList.add("active");
});

//prev
prevBtn.addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  slides[currentIndex].classList.add("active");
});

// menu
const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

tabBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", () => {
    // 一旦active全削除
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // クリックした要素にactive追加
    tabBtn.classList.add("active");
    contents[index].classList.add("active");
  });
});

// gallery
const galleryImgs = document.querySelectorAll(".gallery-img");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const modalImg = document.querySelector(".modal-img");

// 全ギャラリーからクリックした画像を代入
galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");

    modalImg.src = img.src; // modalに画像が代入
  });
});

// 閉じるボタンで閉じる
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Escで閉じる
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
  }
});

// about
const introductionTexts = document.querySelectorAll(".introduction-text");
const images = document.querySelectorAll(".introduction-img");

window.addEventListener("scroll", () => {
  // windowの高さ
  const windowHeight = window.innerHeight;

  // 画面に入って少ししたら表現する(-100)
  // 文字
  introductionTexts.forEach((introductionText) => {
    const textTop = introductionText.getBoundingClientRect().top;

    if (textTop < windowHeight - 100) {
      introductionText.classList.add("active");
    }
  });

  // 画像
  images.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;

    if (imageTop < windowHeight - 100) {
      image.classList.add("active");
    }
  });
});

// contact
const form = document.querySelector(".contact-form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 更新を止める

  // 一旦active削除
  errorName.classList.remove("active");
  errorEmail.classList.remove("active");

  // 完全一致でないなら追加(空白入力もNG)
  if (nameInput.value.trim() === "") {
    errorName.classList.add("active");
  }
  if (emailInput.value.trim() === "") {
    errorEmail.classList.add("active");
  }
});

// page-top
const pageTop = document.querySelector(".page-top");

// スクロールする度に実行される
window.addEventListener("scroll", () => {
  if (window.scrollY > 2000) {
    pageTop.classList.add("active");
  } else {
    pageTop.classList.remove("active");
  }
});

// トップへ戻る
pageTop.addEventListener("click", () => {
  // top : 0                ぺージ最上部へ
  // behaivor : "smooth"    ぬるっと動く
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
