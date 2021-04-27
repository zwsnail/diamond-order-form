$(document).ready(function () {

  $('.btn--border').click(function(){
                          $('.header').css({
      "z-index" : "1"
  });
});
  
if (window.matchMedia("(min-width: 1249px)").matches) { 
  $(".jewerly_section").hide();
  $(".contact_section").hide();
  $(".diamond_section").show();
    
    
    $(".a-di").click(function() {
       $(".jewerly_section").hide();
       $(".contact_section").hide();
       $(".diamond_section").show();
       $("#summary_section").hide();
       $(".group").show();
      $(".footer_space").show();
      // $(".head").show();
      $(".head").hide();
      $(".a-di").addClass("borderBox");
      $(".a-je").removeClass("borderBox");
      $(".a-co").removeClass("borderBox");
      $(".a-su").removeClass("borderBox");
    });
    
    $(".a-je").click(function() {
       $(".jewerly_section").show();
       $(".contact_section").hide();
       $(".diamond_section").hide();
       $("#summary_section").hide();
       $(".group").show();
      //  $(".head").hide();
       $(".footer_space").show();
      // $(".headline").show();
      $(".a-di").removeClass("borderBox");
      $(".a-je").addClass("borderBox");
      $(".a-co").removeClass("borderBox");
      $(".a-su").removeClass("borderBox");
    });
    
   $(".a-co").click(function() {
       $(".jewerly_section").hide();
       $(".contact_section").show();
       $(".diamond_section").hide();
       $("#summary_section").hide();
       $(".group").hide();
       
      //  $(".footer_space").hide();
       $(".footer_space").show();
       $(".head").hide();
       
       $(".headline").show();
       $(".a-di").removeClass("borderBox");
       $(".a-je").removeClass("borderBox");
       $(".a-co").addClass("borderBox");
       $(".a-su").removeClass("borderBox");
    });

   $(".a-su").click(function() {
       $(".jewerly_section").hide();
       $(".contact_section").hide();
       $(".diamond_section").hide();
       $("#summary_section").show();
       $(".group").hide();
       
      //  $(".footer_space").hide();
       $(".footer_space").show();
       $(".head").hide();
       
       $(".headline").show();
       $(".a-di").removeClass("borderBox");
       $(".a-je").removeClass("borderBox");
       $(".a-co").removeClass("borderBox");
       $(".a-su").addClass("borderBox");
    });
    
    

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

if (window.matchMedia("(max-width: 1249px)").matches) {
  $(".sections").show();
  $(".footer_space").show();
}

if (window.matchMedia("(max-width: 990px)").matches) {
  //...
  // $(
  //   '<input type="submit" class="send_req" value="Send Price Request!">'
  // ).insertBefore($(".order-summary"));
} else {
  $("").insertBefore($(".order-summary"));
}

if (window.matchMedia("(max-width:650px)").matches) {
  $(".headline a").wrapAll('<div class="slaves">');
  $(".footer_space").show();
  $(".headline").hide();
  
}

$(".headline ion-icon").click(function () {
  $(".slaves").toggleClass("active");
  if ($(".slaves").hasClass("active")) {
    $(".headline ion-icon").attr("name", "close");
  } else {
    $(".headline ion-icon").attr("name", "menu-sharp");
  }
});

$(".order-summary").click(function () {
  var pdf = new jsPDF();
  var specialElementHandlers = {
    "#editor": function (element, renderer) {
      return true;
    },
  };

  pdf.fromHTML($(".all-info").html(), 15, 15, {
    width: 170,
    elementHandlers: specialElementHandlers,
  });
  pdf.save("my-order-summery.pdf");
});
  



});

