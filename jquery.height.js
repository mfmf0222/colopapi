  $(window).on('load resize', function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    var h = window.innerHeight ? window.innerHeight : $(window).height();
    var header = $('header').outerHeight(true);
    var footer = $('footer').outerHeight(true);
    
 //余白の調整
 
    if (w > 768) {
      $("#wrapper,.link").css('padding-top', header + 'px'); 
      $(".link").css('margin-top', -header + 'px');
      $("#contents").css('margin-bottom', footer + 'px');
      $("#contents-bg").css('top', header  + 'px');
      $("#contents-bg").css('bottom', footer  + 'px');
      $("#rightcolumn").css("height", h - header - footer + "px");
      
    } else {
      $("#wrapper,.link").css('padding-top', '0');
      $(".link").css('margin-top', '0');
      $("#contents").css('margin-bottom', footer + 'px');
      $("#contents-bg").css('top', '0');
      $("#contents-bg").css('bottom', '0');
      $("#rightcolumn").css("height", 'auto');
    }
  });
