
console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
      $(".profile-btn, .services-btn, .contact-btn, .portfolio-btn").hover(
        function() {
          $(this).css("background-color", "#F4B47C");
        },
        function() {
          $(this).css("background-color", "#292929");
        }
      );
    });
    
$(document).ready(function() {
    $(".caseStudyButton1").hover(
    function() {
    $(this).css("background", "linear-gradient(45deg, #475467 0%, #101828 100%)");
    },
    function() {
    $(this).css("background", "linear-gradient(45deg, #101828 0%, #475467 100%)");
    }
    );

    $(".caseStudyButton2").hover(
    function() {
    $(this).css("background", "linear-gradient(45deg, #475467 0%, #101828 100%)");
    },
    function() {
    $(this).css("background", "linear-gradient(45deg, #101828 0%, #475467 100%)");
    }
    );

    $(".caseStudyButton3").hover(
    function() {
    $(this).css("background", "linear-gradient(45deg, #475467 0%, #101828 100%)");
    },
    function() {
    $(this).css("background", "linear-gradient(45deg, #101828 0%, #475467 100%)");
    }
    );

    $(".caseStudyButton4").hover(
    function() {
    $(this).css("background", "linear-gradient(45deg, #475467 0%, #101828 100%)");
    },
    function() {
    $(this).css("background", "linear-gradient(45deg, #101828 0%, #475467 100%)");
    }
    );
    });

    $('.social-icons li').hover(function() {
    $(this).css('color', 'black');
    }, function() {
    $(this).css('color', 'white');
    });