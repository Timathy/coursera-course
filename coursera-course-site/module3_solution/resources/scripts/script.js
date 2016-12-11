jQuery(document).ready(function () {
  jQuery('.scrolltop, .scrolltop-2, .scrolltop-3').on('click', function () {
    jQuery('body').animate({
      scrollTop: 0
    }, 700);
  });
});
