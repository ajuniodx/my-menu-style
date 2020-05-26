function myMenu(x) {
  x.classList.toggle("change");
};

$(document).ready(function () {
  $(".btn-container").on('click', function () {
    $(".main-navigation").toggle('slow');
  });

});