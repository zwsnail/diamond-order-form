$(document).ready(function () {




  $('.btn--border').click(function () {
    $('.header').css({
      "z-index": "1"
    });
  });

  function diamondClick() {
    $(".jewerly_section").hide();
    $(".contact_section").hide();
    // $("#contact-form").hide();
    $(".diamond_section").show();
    $("#summary_section").hide();
    $(".group").show();
    $(".footer_space").show();
    // $(".head").show();
    $(".head").hide();
    $(".a-di").addClass("navBorderBox");
    $(".a-je").removeClass("navBorderBox");
    $(".a-co").removeClass("navBorderBox");
    $(".a-su").removeClass("navBorderBox");
  }
  function jewelryClick() {
    $(".jewerly_section").show();
    // $("#contact-form").hide();
    $(".contact_section").hide();
    $(".diamond_section").hide();
    $("#summary_section").hide();
    $(".group").show();
    //  $(".head").hide();
    $(".footer_space").show();
    // $(".headline").show();
    $(".a-di").removeClass("navBorderBox");
    $(".a-je").addClass("navBorderBox");
    $(".a-co").removeClass("navBorderBox");
    $(".a-su").removeClass("navBorderBox");
  }
  function contactClick() {
    $(".jewerly_section").hide();
    $(".contact_section").show();
    // $("#contact-form").show();
    $(".diamond_section").hide();
    $("#summary_section").hide();
    $(".group").hide();


    $(".footer_space").show();
    $(".head").hide();

    $(".headline").show();
    $(".a-di").removeClass("navBorderBox");
    $(".a-je").removeClass("navBorderBox");
    $(".a-co").addClass("navBorderBox");
    $(".a-su").removeClass("navBorderBox");
  }
  function summaryClick() {
    $(".jewerly_section").hide();
    $(".contact_section").hide();
    // $("#contact-form").hide();
    $(".diamond_section").hide();
    $("#summary_section").show();
    $(".group").hide();

    $(".footer_space").show();
    $(".head").hide();

    $(".headline").show();
    $(".a-di").removeClass("navBorderBox");
    $(".a-je").removeClass("navBorderBox");
    $(".a-co").removeClass("navBorderBox");
    $(".a-su").addClass("navBorderBox");
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".jewerly_section").hide();
    $(".contact_section").hide();
    $(".diamond_section").show();


    $(".a-di").click(function () {
      diamondClick();
      $("#slide-item-1").click();
    });
    $("#slide-item-1").click(function () {
      diamondClick();
    })


    $(".a-je").click(function () {
      jewelryClick();
      $("#slide-item-2").click();
    });
    $("#slide-item-2").click(function () {
      jewelryClick();
    })


    $(".a-co").click(function () {
      contactClick();
      $("#slide-item-3").click();
    });
    $("#slide-item-3").click(function () {
      contactClick();
    })

    $(".a-su").click(function () {
      summaryClick();
      $("#slide-item-4").click();
    });
    $("#slide-item-4").click(function () {
      summaryClick();
    })



    //    link.click(function () {
    //      let currentTab = $(this).attr("href");
    //      $(currentTab).show();
    //
    //      if (currentTab === "#contact_section") {
    //        $(".footer_space").hide();
    //        $(".head").hide();
    //      } else {
    //        $(".footer_space").show();
    //        $(".head").show();
    //      }
    //      return false;
    //    });






  }

  // if (window.matchMedia("(max-width: 1249px)").matches) {
  //   $(".sections").show();
  //   $(".footer_space").show();
  // }

  // if (window.matchMedia("(max-width: 990px)").matches) {
  //   //...
  //   // $(
  //   //   '<input type="submit" class="send_req" value="Send Price Request!">'
  //   // ).insertBefore($(".order-summary"));
  // } else {
  //   $("").insertBefore($(".order-summary"));
  // }

  if (window.matchMedia("(max-width:767px)").matches) {
    $(".headline a").wrapAll('<div class="slaves">');
    $(".footer_space").show();
    $(".headline").hide();
    $(".slidemenu").hide();

  }

  // $(".headline ion-icon").click(function () {
  //   $(".slaves").toggleClass("active");
  //   if ($(".slaves").hasClass("active")) {
  //     $(".headline ion-icon").attr("name", "close");
  //   } else {
  //     $(".headline ion-icon").attr("name", "menu-sharp");
  //   }
  // });




});//$(document).ready(function () {   end

