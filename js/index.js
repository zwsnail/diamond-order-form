$(document).ready(function(){
let link = $("a");

$('.sections').hide();
$(".diamond_section").show();

link.click(function(){
    var currentTab = $(this).attr('href');
    $('.sections').hide();     
    $(currentTab).show();

    // return false;
});	

 

});

