$(document).ready(function () {
  //menu
  $(".hamburger-menu").click(function () {
    $(".main-menu-wrapper").slideToggle();
    if ($(this).hasClass("fa-times")) {
      $(".hamburger-menu")
        .removeClass("fa-times")
        .addClass("fa-fw")
        .addClass("fa-bars");
    } else {
      $(this).removeClass("fa-bars").removeClass("fa-fw ").addClass("fa-times");
    }
  });

  //highlighting menu item
  var nav = document.getElementById("nav");
  (anchor = nav.getElementsByTagName("a")),
    (current = window.location.pathname.split("/")[1]);
  console.log(current);

  for (var i = 0; i < anchor.length; i++) {
    if (current === anchor[i].href.split("/")[3]) {
      anchor[i].className += "active";

    }

    if (current.includes("home") && anchor[i].href.split("/")[3].includes("index")) {
      anchor[i].className += "active";
    }
    if (current.includes("index") || current.includes("home")) {
      $(".header-main").css("background-color", "transparent")
    }
  }
  if (current === "single-offer.php") {
    anchor[2].className += "active";
  } else if (current === "single-blog.php") {
    anchor[3].className += "active";

  } else if (current === "single-service.php") {
    anchor[1].className += "active";

  }
  //header-fixed on scroll
  var x = window.matchMedia("(max-width: 568px)")
  var scrollHeight = 34;
  if (!x.matches) {
    scrollHeight = 34;
  } else {
    scrollHeight = 0;
  }
  $(window).bind('scroll', function () {


    if ($(window).scrollTop() > scrollHeight) {
      $('.header-main').addClass('fixed');
      if (current.includes("index") || current.includes("home")) {

        if ($(".header-main").hasClass("fixed")) {
          console.log("has class")
          $(".header-main").css("background-color", "#9B9B9B")
        } else {
          console.log("doesn't have class")
          $(".header-main").css("background-color", "transparent")
        }

      }

    } else {
      $('.header-main').removeClass('fixed');
      if (current.includes("index") || current.includes("home")) {

        if ($(".header-main").hasClass("fixed")) {
          console.log("has class")
          $(".header-main").css("background-color", "#9B9B9B")
        } else {
          console.log("doesn't have class")
          $(".header-main").css("background-color", "transparent")
        }

      }
    }


  });

  //home4 menu hover effect
  $(".menu-content-item-image").hover(
    function () {
      $(".menu-content .active-menu-item").removeClass("active-menu-item");
      $(this).parent().addClass("active-menu-item");
    },
    function () {
      $(".menu-content > div:nth-child(3)").addClass("active-menu-item");
      $(this).parent().removeClass("active-menu-item");
    }
  );

  //single-service-one slider
  $(".services-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          dots: true,
        },
      },
    ],
  });



  //contacts page
  if (document.URL.includes("contacts.php")) {
    console.log("it is contacts");
    $(".footer-form").css("background-color", "#eaffe2");
  }

  //service-only-page

  $(".service-radio-button").click(function () {
    $(".service-radio-button > span").each(function () {
      $(this).removeClass("checked-radio");
    });
    $(this).children().addClass("checked-radio");
  });

  //input custom error message
  document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
      elements[i].oninvalid = function (e) {
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
          e.target.setCustomValidity("Campo obbligatorio");
        }
      };
      elements[i].oninput = function (e) {
        e.target.setCustomValidity("");
      };
    }
  });

  ////////////////////////////////////////////////////////////////////////////

  //Homepage Banner slider
  $(".homepage-banner-slider").slick({
    slidesToShow: 4,
    slidesToScrol: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow:
      '<button class="slick-prev"><img src="./assets/icons/left-slider-arrow.svg" /></button>',
    nextArrow:
      '<button class="slick-next"><img src="./assets/icons/right-slider-arrow.svg"/></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          arrows: true,
        },
      },
    ],
  });

  //Services sections arrow-slider
  $(".section-services-slider").slick({
    slidesToShow: 4,
    slidesToScrol: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow:
      '<button class="slick-prev"><img src="./assets/icons/left-black-slider-arrow.svg" /></button>',
    nextArrow:
      '<button class="slick-next"><img src="./assets/icons/right-black-slider-arrow.svg"/></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          arrows: true,
        },
      },
    ],
  });

  let arrows = false;
  let dots = true;

  if (current.includes("single-offer")) {
    arrows = true;
    dots = false;
  } else {
    arrows = false;
    dots = true;
  }

  //Offers section slider
  $(".section-offers-slider").slick({
    slidesToShow: 4,
    slidesToScrol: 3,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    dots: dots,
    arrows: arrows,
    prevArrow:
      '<button class="slick-prev"><img src="./assets/icons/left-black-slider-arrow.svg" /></button>',
    nextArrow:
      '<button class="slick-next"><img src="./assets/icons/right-black-slider-arrow.svg"/></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,

        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,

        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,

        },
      },
    ]
  });

  //Blog section slider
  $(".section-blog-slider").slick({
    slidesToShow: 3,
    slidesToScrol: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow:
      '<button class="slick-prev"><img src="./assets/icons/left-black-slider-arrow.svg" /></button>',
    nextArrow:
      '<button class="slick-next"><img src="./assets/icons/right-black-slider-arrow.svg"/></button>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          arrows: true,
        },
      },
    ],
  });
});
