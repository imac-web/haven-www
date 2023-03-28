jQuery( document ).ready(function( $ ) {
 
 // Close modal on escape key
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $('.modal').removeClass('modal-show');
      $('.content').removeClass('content-blurred');
      $('body').removeClass('no-scroll');
    }
  });

  $(function () {

    // Provider card slider
    $('.slider').flickity({
      pauseAutoPlayOnHover: false,
      prevNextButtons: false,
      cellAlign: 'center',
      draggable: true,
      freeScroll: true,
      wrapAround: true,
      pageDots: false,
      autoPlay: 3000,
    });

    // Imbox zero slider
    $('.zero-slider').flickity({
      pauseAutoPlayOnHover: false,
      prevNextButtons: false,
      cellAlign: 'center',
      freeScroll: false,
      wrapAround: false,
      draggable: false,
      pageDots: false,
      autoPlay: 3000,
      fade: true,
    });

    // Open & close modal
    $('.modal-toggle').click(function () {
      $('.modal').toggleClass('modal-show');
      $('.content').toggleClass('content-blurred');
      $('body').toggleClass('no-scroll');
    });

    // Reserve username form
    $(".form").submit(function (e) {
      e.preventDefault();
      var $form = $(this);
      $.post($form.attr("action"), $form.serialize()).then(function () {
        $('.form-content').addClass('form-content-hide');
        $('.success').addClass('success-show');
      });
    });

    // Save user's first name
    $(".form").submit(function (e) {
      e.preventDefault();
      var value = $("#firstName").val();
      $('.first-name').text("Thank you," + " " + value + "!");
    });

    // Feather icons
    feather.replace()

    // textarea autoresize
    autosize(document.querySelectorAll('textarea'));
    $('textarea').autoResize();


    // ScrollReveal
    ScrollReveal().reveal('.hero, .title, .screen, .features, .cards, .zero-slider', {
      distance: '40px',
      duration: 2000,
      mobile: false,
      reset: false,
      opacity: 0
    });

  });

});