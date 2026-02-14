document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".booking-tab");
  const forms = document.querySelectorAll(".booking-form");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 1. Убираем активный класс со всех табов
      tabs.forEach((t) => t.classList.remove("booking-tab--active"));

      // 2. Добавляем активный класс нажатому табу
      tab.classList.add("booking-tab--active");

      // 3. Получаем значение data-tab
      const tabName = tab.getAttribute("data-tab");

      // 4. Скрываем все формы
      forms.forEach((form) => {
        form.classList.remove("booking-form--active");
      });

      // 5. Показываем форму, соответствующую табу
      const activeForm = document.querySelector(
        `.booking-form[data-form="${tabName}"]`
      );
      if (activeForm) {
        activeForm.classList.add("booking-form--active");
      }
    });
  });
});

$(document).ready(function () {
  $(".places__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: function () {
      return '<button type="button"></button>'; // ← пустая кнопка
    },
    responsive: [
      {
        breakpoint: 1147,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".places__big-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    customPaging: function () {
      return '<button type="button"></button>'; // ← пустая кнопка
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".honeymoon__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: function () {
      return '<button type="button"></button>'; // ← пустая кнопка
    },
    responsive: [
      {
        breakpoint: 1776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".discount__slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return '<button type="button"></button>'; // ← пустая кнопка
    },
    responsive: [
      {
        breakpoint: 973,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

function updateCountdown() {
  const now = new Date();
  const target = new Date("2026-12-31T23:59:59");
  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".countdown__number-days").textContent = days;
  document.querySelector(".countdown__number-hours").textContent = hours;
  document.querySelector(".countdown__number-minutes").textContent = minutes;
  document.querySelector(".countdown__number-seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
