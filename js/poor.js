$(document).ready(function () {
    (function () {
      emailjs.init("user_IUFyW3twYDD5jnfPHSSlw");
    })();


    $("#contact-form").on("submit", function(e){
    e.preventDefault();
    const username = document.querySelector("#user_name");
    const userMail = document.querySelector("#user_email");
    const message = document.querySelector("#message");

    console.log(username.value, userMail.value, message.value);

    



  
let templateParams = {
    from_name: username.value,
    mail: userMail.value,
    to_name: "Jane Ostin",
    message: message.value
  }

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