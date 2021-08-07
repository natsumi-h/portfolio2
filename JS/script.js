
$(function(){
    /*=================================================
    スマホメニュー
    ===================================================*/
    $('.hamburger-button').on('click', function() {
        
      if ($('header').hasClass('open')) {
        $('header').removeClass('open');
      } else {
        $('header').addClass('open');
      }
    });
  
    // #maskのエリアをクリックした時にメニューを閉じる
    $('.mask').on('click', function() {
      $('header').removeClass('open');
    });
  
    // リンクをクリックした時にメニューを閉じる
    $('.header-nav-item').on('click', function() {
      $('header').removeClass('open');
    });


//QandA
$('.qanda-question').on('click', function() {
  $(this).children('.qanda-icon').toggleClass('is-open');
  $(this).next().slideToggle();
  return false;
  
        
});
    
      

    //wow ふわっと表示
    new WOW().init();

    //スムーススクロール//
    //hrefの#が先頭のものがクリックされたとき
    $('a[href^="#"]').click(function() {
      //thisは'a[href^="#"]'のこと
      var id = $(this).attr('href');
      var position =$(id).offset().top;
      console.log(id);
      console.log(position);
      $("html, body").animate({
          scrollTop: position
        },
        300);
      
    });


//トップに戻る//
    var pagetop = $('.footer-totop');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });




});

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  slidesPerView:1.23,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  //navigation: {
    //nextEl: '.swiper-button-next',
    //prevEl: '.swiper-button-prev',
  //},

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 320px
    900: {
      slidesPerView: 2.75,
      spaceBetween: 20
    },
  },
});








