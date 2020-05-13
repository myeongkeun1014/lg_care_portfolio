  $(document).ready(function() {
    var viewHeight = $(window).height();
    var viewWidth = $(window).width();
    var resizeTimer;
    // nav mouse enter => show all nav
    $('.fixed-nav').hover(function() {
      if (viewWidth > 900) {
        $('.hover-nav').toggleClass('view');
      }
    });
    $('.fixed-nav > .wrap > .three-line').click(function() {
      $('.hover-nav').toggleClass('view');
    });
    $('.main-three .tabi01').click(function() {
      $('.main-three').removeClass('on');
      $('.main-three').addClass('off');
    });
    $('.main-three .tabi02').click(function() {
      $('.main-three').removeClass('off');
      $('.main-three').addClass('on');
    });

    // scrolltop > 40px ? nav => fixed
    var timer;
    $(window).scroll(function() {
      if (timer) {
        window.clearTimeout(timer);
      };
      timer = window.setTimeout(function() {
        if (40 <= $(window).scrollTop()) {
          $('nav').addClass('active');
        } else {
          $('nav').removeClass('active');
        };
      }, 10);
    });

    //  custom parallax

    $(window).resize(function() {
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      };
      resizeTimer = window.setTimeout(function() {
        viewHeight = $(window).height();
        viewWidth = $(window).width();
      }, 10);
    });
    $('*[data-parallax]').each(function() {
      var $element = $(this);
      var dataset = $element[0].dataset.parallax.split(' ');
      var parallaxTimer;
      var customOffset = dataset[2] === undefined ? 0 : parseInt(dataset[2]);
      var $dataTop = $element.height();
      $element.css('transition-delay', dataset[1] + 's')
        .css('-webkit-transition-delay', dataset[1] + 's')
        .css('-moz-transition-delay', dataset[1] + 's')
        .css('-ms-transition-delay', dataset[1] + 's')
        .css('-o-transition-delay', dataset[1] + 's');
      _view();
      $(window).scroll(function() {
        if (parallaxTimer) {
          window.clearTimeout(parallaxTimer);
        };
        parallaxTimer = window.setTimeout(_view, 10);
      });

      function _view() {
        if (($element.offset().top + customOffset + ($dataTop / 2)) <= $(window).scrollTop() + viewHeight) {
          $element.addClass(dataset[0]);
        } else {
          $element.removeClass(dataset[0]);
        };
      }
    });


  });
