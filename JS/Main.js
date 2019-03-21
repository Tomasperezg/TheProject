$(document).ready(function() {
  $('.HomePgMainBan_SubTX_1').fadeIn(1500).removeClass('hidden');
  $('.HomePgMainBan_SubTX_2').fadeIn(4500).removeClass('hidden');
});

$(document).ready(function() {
  $( '.TheMainNav_Pro').on('click', function() {
  $('.ProjectBox_Pg').toggle('slide',{direction:'right'}, 2000);
  $('.ProjectBox_Pg').removeClass( 'hidden' );
  });
});
