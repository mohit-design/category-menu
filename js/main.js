$(function() {
  // Menu Button and Accordion Menu JS
  $(".accordion-sub-menu-1-listing").slideUp(1000);
  $(".accordion-sub-menu-2-listing").slideUp(1000);
  $(".btn-open-menu").click(function() {
    $(".fixed-accordion-menu").toggleClass("active");
  });
  $(".accordion-menu-listing > li > a").click(function(e) {
    e.preventDefault();
    $(".accordion-menu-listing > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
    if ($(".accordion-sub-menu-1-listing").is(":visible")) {
      $(".accordion-sub-menu-1-listing").slideUp(700);
      $(".accordion-menu-listing > li > a").parent().removeClass("active");
    }
    if( $(this).next(".accordion-sub-menu-1-listing").is(":visible")){
        $(this).next(".accordion-sub-menu-1-listing").slideUp(700);
        $(".accordion-menu-listing > li > a").parent().removeClass("active");
    } else {
        $(this).next(".accordion-sub-menu-1-listing").slideDown(700); 
        $(this).parent().addClass("active");
    }
  });
  $(".accordion-sub-menu-1-listing > li > a").click(function(e) {
    e.preventDefault();
    $(".accordion-sub-menu-1-listing > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
    if ($(".accordion-sub-menu-2-listing").is(":visible")) {
      $(".accordion-sub-menu-2-listing").slideUp(700);
      $(".accordion-sub-menu-1-listing > li > a").parent().removeClass("active");
    }
    if( $(this).next(".accordion-sub-menu-2-listing").is(":visible")){
        $(this).next(".accordion-sub-menu-2-listing").slideUp(700);
        $(".accordion-sub-menu-1-listing > li > a").parent().removeClass("active");
    } else {
        $(this).next(".accordion-sub-menu-2-listing").slideDown(700); 
        $(this).parent().addClass("active");
    }
  });
  $(".accordion-sub-menu-2-listing > li > a").click(function(e) {
    e.preventDefault();
    $(".accordion-sub-menu-2-listing > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });
  // Add Smooth Scrolling to Links
  $(".accordion-menu-listing > li > a, .accordion-sub-menu-1-listing > li > a, .accordion-sub-menu-2-listing > li > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $(".fixed-accordion-menu").removeClass("active");
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
});