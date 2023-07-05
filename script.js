var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },

});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  zoom: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/********счетчик */
$(document).ready(function() {
  var decrementButton = $('#decrement');
  var incrementButton = $('#increment');
  var counter = $('#counter');
  
  decrementButton.click(function(e) {
    e.preventDefault();
    var currentValue = parseInt(counter.text());
    if (currentValue > 0) {
      counter.text(currentValue - 1);
    }
  });
  
  incrementButton.click(function(e) {
    e.preventDefault(); 
    var currentValue = parseInt(counter.text());
    counter.text(currentValue + 1);
  });
});




$(document).ready(function() {
  $(".nav-product-detalic a").on("click", function(e) {
    e.preventDefault()
    var id = $(this).attr("id");
    
    $(".nav-product-detalic a").removeClass("active");
    
    $(this).addClass("active");
    
    $("div[class*='product-item-']").removeClass("active");
    
    $("div." + id).addClass("active");
  });
});

/***********modal */
$(".by-now").click(function(){
  $(".modal-pop-up").addClass("visible");
});

$(".close-modal, .btn-by-now-modal").click(function(){
  $(".modal-pop-up").removeClass("visible");
});

$(document).click(function(event) {
  if (!$(event.target).closest(".modal,.by-now,.pop-up").length) {
    $(".modal-pop-up").removeClass("visible");
  }
});



