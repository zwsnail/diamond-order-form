$(document).ready(function () {
    (function () {
      emailjs.init("user_IUFyW3twYDD5jnfPHSSlw");
    })();


    function selector(target){
      return document.querySelector(target).value;
    }

    $("#contact_section").on("submit", function(e){
    e.preventDefault();

    const username = selector("#firstName");
    const userlname = selector("#lastName")
    const userMail = selector("#email");
    const phoneNumber = selector("#phoneNumber");

    const address1 = selector("#adress-1");
    const address2 = selector("#adress-2");
    const city = selector("#city");
    const state = selector("#state");
    const zip = selector("#zip");
    const country = selector("#country");

    const message = selector("#message");

    const contactInformation = `name - ${username} ${userlname}, mail ${userMail}, phone number ${phoneNumber}`;
    const deliveryInformation = `adress - ${address1} ${address2}, city - ${city}, state - ${state}, zip - ${zip}, country ${country}`;

    console.log(username);
    console.log(contactInformation);
    
  
let templateParams = {
    from_name: username,
    mail: userMail,
    to_name: "Jane",
    contact_info: contactInformation,
    delivery_info: deliveryInformation,

    message: message,
  }

//  SEND EMAIL
  emailjs
    .send("service_jt9l9dt", "template_yevxgca", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

})

});