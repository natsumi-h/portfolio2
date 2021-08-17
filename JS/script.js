
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
  
    // リンクをクリックした時にメニューを閉じる
    $('.header-nav-item-link').on('click', function() {
        $('header').removeClass('open');
    });



//QandA
$('.question-question').on('click', function() {

  $(this).next().slideToggle();
  return false;
  
        
});
    
      

    //wow ふわっと表示
    new WOW().init();

    //スムーススクロール//
    if (window.matchMedia( '(max-width: 767px)' ).matches) {　     
      var headerHight = 52;    
     } else {     
      var headerHight = 85;     
     }    
    
         $('a[href^="#"]').click(function() {
            //var headerHight = 85; 
            var speed = 300;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top-headerHight;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
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










