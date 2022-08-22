let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".review-slide", {
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


const mobile = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-items");

/* We are toggling between font-awesome Icons and the "active" class */
function toggle() {
  if (nav.classList.contains("active")) {
    mobile.classList.replace("fa-times", "fa-bars");
    document.body.style.overflowY = "initial";
  } else {
    mobile.classList.replace("fa-bars", "fa-times");
    document.body.style.overflowY = "hidden";
  }
  nav.classList.toggle("active");
}

function windowResize() {
  if (window.screen.width >= 830) {
    nav.classList.remove("active");
    mobile.classList.replace("fa-times", "fa-bars");
    document.body.style.overflowY = "initial";
  }
}

window.addEventListener("resize", windowResize);
mobile.addEventListener("click", toggle);

/*------------------  CAROUSEL CODE ------------------*
/* ALL ANIMATION CLASSES ARE AT THE BOTTOM OF THE STYLE.CSS FILE*/

const carousel_img = document.querySelector(".circle img");
const carousel_img_border = document.querySelector(".circle-border");
const carousel_num = document.querySelector(".number-rotate span");
const arrow = document.querySelector(".arrow");

let current_pic = 1;
const cancelAnimations = () => {
  carousel_img.classList.remove("hide-pic", "reveal-pic");
  carousel_img_border.classList.remove("animate-border_fw", "border_bk");
  carousel_img.style.opacity = "1";
};

/* 
We Are Removing and adding the animation classes in order to replay the animations
*/

const show_pic = () => {
  //Cancel ANIMATIONS IF ANY
  cancelAnimations();

  //ANIMATIONS
  //HIDE PREV PIC
  //ANIMATION TIMELINE PURE CSS JS NO LIBRARY
  carousel_img.classList.add("hide-pic");
  carousel_img_border.classList.add("animate-border_fw");

  carousel_img.onanimationend = () => {
    carousel_img.classList.remove("hide-pic");
    carousel_img_border.classList.remove("animate-border_fw");
    carousel_img.style.opacity = "0";

    //CHANGE SOURCE
    carousel_img.src = `./image/fashion${current_pic}.png`;
    carousel_num.innerHTML = "0" + String(current_pic) + "/06";

    //REVEAL NEXT PIC
    carousel_img.classList.add("reveal-pic");
    carousel_img_border.classList.add("animate-border_bk");

    carousel_img.onanimationend = () => {
      carousel_img.style.opacity = "1";
      carousel_img.classList.remove("reveal-pic");
      carousel_img_border.classList.remove("animate-border_bk");
    };
  };
};

//FUNCTION FOR THE BUTTONS FOR THE ONCLICK PROPERTY
const change_pic_fw = () => {
  current_pic++;
  if (current_pic === 7) current_pic = 1;
  show_pic();
};

const change_pic_bk = () => {
  current_pic--;
  if (current_pic === 0) current_pic = 6;
  if (current_pic === 7) current_pic = 1;
  show_pic();
};

setInterval(change_pic_fw, 10000);
//LOOP EVERY 10S
