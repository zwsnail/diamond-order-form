$(document).ready(function () {
  (function () {
    emailjs.init("user_IUFyW3twYDD5jnfPHSSlw");
  })();

  function selector(target) {
    return document.querySelector(target).value;
  }

  $("#contact_section").on("submit", function (e) {
    e.preventDefault();

    const username = selector("#firstName");
    const userlname = selector("#lastName");
    const userMail = selector("#email");
    const phoneNumber = selector("#phoneNumber");

    const address1 = selector("#adress-1");
    const address2 = selector("#adress-2");
    const city = selector("#city");
    const state = selector("#state");
    const zip = selector("#zip");
    const country = selector("#country");

    const message = selector("#message");

    const contactInformation = ` ${username} ${userlname}`;
    const addresses = `${address1} , ${address2}`;
    const citys = `${city} , ${state}`;
    const countrys = `${zip} , ${country}`;

    const deliveryInformation = `${address1} , ${address2}`;

    console.log(username);
    console.log(contactInformation);

    let templateParams = {
      from_name: contactInformation,
      mail: userMail,
      phone: phoneNumber,
      to_name: "Jane",

      address: addresses,
      city: citys,
      zip: countrys,

      //  diamond cuts
      diamondColor: "colorless",
      caratSizes: 2.0,
      cutShapes: "Pearl Cut",
      certificates: "GIA",
      jewelryID: 8852 - 7854 - 77,
      ringSize: 5.25,
      metalColor: "Rose gold",
      ringEngraving: "Love You",

      message: message,
    };

    //  SEND EMAIL
    emailjs.send("service_jt9l9dt", "template_yevxgca", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
});
