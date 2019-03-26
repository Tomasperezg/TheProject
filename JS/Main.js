$(document).ready(function() {
  $('.HomePgMainBan_SubTX_1').fadeIn(1500).removeClass('hidden');
  $('.HomePgMainBan_SubTX_2').fadeIn(7500).removeClass('hidden');
});

$(document).ready(function() {
  $( '.TheMainNav_Pro').on('click', function() {
  $('.ProjectBox_Pg').toggle('slide').animate('slow');
  $('.ProjectBox_Pg').removeClass( 'hidden' );
  $('.ProjectBox_Pg_TLT').fadeIn(3500).removeClass('hidden');
  });
});
$(document).ready(function() {
  var ProjectLandpg = $('.ProjectBox_Pg_TXT');
  $(ProjectLandpg).on('click', function() {
    $('.ProjectBox_Pg').hide();
  });
});
var Car_Home_1 = ["IMG/IMG_HOME_1.jpeg",
                  "IMG/HOME_IMAGE_2.jpg"];
var cnt = Car_Home_1.length;

$(function() {
        setInterval(Slider, 5000);
    });

    function Slider() {
    $(".PRO_HOME_1_IMGS").show("fast", function() {
       $(this).attr("src", Car_Home_1[(Car_Home_1.length++) % cnt]).show();
    });
    }
