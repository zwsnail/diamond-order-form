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


//  smtp.js


// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "sevavetisyan97@gmail.com",
//         Password : "JaredLeto55",
//         To : 'sevavetisyan97@gmail.com',
//         From : "sevavetisyan97@gmail.com",
//         Subject : "Test email",
//         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert(message)
//     );
//     }