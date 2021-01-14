$(document).ready(function () {
  let link = $("a");

  if (window.matchMedia("(min-width: 1249px)").matches) {
    $(".sections").hide();
    $(".diamond_section").show();

    link.click(function () {
      let currentTab = $(this).attr("href");
      $(".sections").hide();
      $(currentTab).show();

      if (currentTab === "#contact_section") {
        $(".footer_space").hide();
        $(".head").hide();
      } else {
        $(".footer_space").show();
        $(".head").show();
      }
      return false;
    });
  }

  if (window.matchMedia("(max-width: 1249px)").matches) {
    $(".sections").show();
  }

  if (window.matchMedia("(max-width: 990px)").matches) {
    //...
    $(
      '<input type="submit" class="send_req" value="Send Price Request">'
    ).insertBefore($(".order-summary"));
  } else {
    $("").insertBefore($(".order-summary"));
  }

  if (window.matchMedia("(max-width:650px)").matches) {
    $(".headline a").wrapAll('<div class="slaves">');
  }

  //  menu

  $(".headline ion-icon").click(function () {
    $(".slaves").toggleClass("active");
    if ($(".slaves").hasClass("active")) {
      $(".headline ion-icon").attr("name", "close");
    } else {
      $(".headline ion-icon").attr("name", "menu-sharp");
    }
  });

  //  Download order summary PDF file

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
    pdf.save("sample-file.pdf");
  });
});
