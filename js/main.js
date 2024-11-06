window.onload = function () {
  const topBtn = document.querySelector("#gotop");
  topBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.scrollY !== 0) {
      // 현재 스크롤 위치가 0이 아니면 top으로 스크롤
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: { slidesPerView: 2 },
      760: { slidesPerView: 2 },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: { el: ".sw-promotion-pg", clickrable: true },

    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 쇼핑에 스와이퍼 기능 적용
  const swShopping = new Swiper(".sw-shopping", {
    slidesPerView: 1.5,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    loop: true,
  });

  // 투어의 스와이퍼 기능적용
  const swTour = new Swiper(".sw-tour", {
    // 모바일버전
    slidesPerView: 1.2,
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      navigation: {
        nextEl: ".shopping .sw-next",
        prevEl: ".shopping .sw-prev",
      },
      loop: true,
    },
  });
  // 티켓 스와이퍼 기능 적용
  const swTicket = new Swiper(".sw-ticket", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
      },
    },
  });
  const swLive = new Swiper(".sw-live", {
    navigation: {
      nextEl: ".live .sw-next",
      prevEl: ".live .sw-prev",
    },
    slidesPerView: 1.5,
    spaceBetween: 27,
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: { slidesPerView: 2, spaceBetween: 20 },
    },

    loop: true,
  });

  const swbook = new Swiper(".sw-books", {
    navigation: {
      nextEl: ".books .sw-next",
      prevEl: ".books .sw-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 5,
        spaceBetween: 27,
        grid: {
          rows: 1,
        },
      },
    },
  });
  const swEvent = new Swiper(".sw-events", {
    navigation: {
      nextEl: ".event .sw-next",
      prevEl: ".event .sw-prev",
    },
    slidesPerView: 3,
    spaceBetween: 27,
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
    },
  });
};
