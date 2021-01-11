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



});

