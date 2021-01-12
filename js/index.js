$(document).ready(function () {
  let link = $("a");

  $(".sections").hide();
  $(".diamond_section").show();

  link.click(function () {
    let currentTab = $(this).attr("href");
    $(".sections").hide();
    $(currentTab).show();
     
    console.log(currentTab);

    if(currentTab === "#contact_section"){
      $(".footer_space").hide();
    } else {
      $(".footer_space").show();
    }
    return false;
  });

  if (window.matchMedia('(max-width: 1249px)').matches) {
    $(".sections").show();
     console.log("all sections showed");
  }


  if (window.matchMedia('(max-width: 990px)').matches) {
    //...
     $('<input type="submit" class="send_req" value="Send Price Request">').insertBefore( $( ".order-summary" ) );
    console.log("inserted");
  } else {
    $('').insertBefore( $( ".order-summary" ) );
  }



  //  Download order summary PDF file


  $('.order-summary').click(function () {  
    var pdf = new jsPDF();
    var specialElementHandlers = {
      '#editor': function (element, renderer) {
          return true;
      }
    };

    pdf.fromHTML($('.all-info').html(), 15, 15, {
      'width': 170,
          'elementHandlers': specialElementHandlers
  });
  pdf.save('sample-file.pdf');

  });
});



