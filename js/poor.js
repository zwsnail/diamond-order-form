$(document).ready(function () {
  (function () {
    emailjs.init("user_IUFyW3twYDD5jnfPHSSlw");
  })();

  function selector(target) {
    return document.querySelector(target).value;
  }

  $(".ring_engrave_form").on("submit", function (e) {
    e.preventDefault();
    obj.jevelryId = selector("#style_id");
    obj.ringEngrave = selector("#diamond_text_engrave");

    $(".all-info p:nth-child(5) span").text(`${obj.jevelryId}`);
    $(".all-info p:nth-child(8) span").text(`${obj.ringEngrave}`);
  });

  $(".personal_text").on("submit", function (e) {
    e.preventDefault();
    obj.laserMark = selector("#laser_mark");
  });

  const obj = {
    laserMark: "",
    diamondColor: "",
    caratSize: "",
    cutShape: "",
    certificates: "",
    jevelryId: "",
    ringSize: "",
    metalColor: "",
    ringEngrave: "",
  };

  $("#diamond_box img").on("click", function () {
    obj.diamondColor = $(this).attr("alt");
    $(".all-info p:nth-child(1) span").text(`${obj.diamondColor}`);
  });

  $(".cut_shape img").on("click", function () {
    obj.cutShape = $(this).attr("alt");
    $(".all-info p:nth-child(3) span").text(`${obj.cutShape}`);
  });

  $(".certificates img").on("click", function () {
    obj.certificates = $(this).attr("alt");
    $(".all-info p:nth-child(4) span").text(`${obj.certificates}`);
  });

  $(".metals img").on("click", function () {
    obj.metalColor = $(this).attr("alt");
    $(".all-info p:nth-child(7) span").text(`${obj.metalColor}`);
  });

  $(".caratSize div").on("click", function () {
    obj.caratSize = $(this).text();
    $(".all-info p:nth-child(2) span").text(`${obj.caratSize}`);
  });

  $(".ring_sizes div").on("click", function () {
    obj.ringSize = $(this).text();
    $(".all-info p:nth-child(6) span").text(`${obj.ringSize}`);
  });

  // fields required
  let allInputs = $("#contact-form input");
  console.log(allInputs);

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

    let templateParams = {
      from_name: contactInformation,
      mail: userMail,
      phone: phoneNumber,
      to_name: "Jane",

      address: addresses,
      city: citys,
      zip: countrys,

      //  diamond cuts
      laserMark: obj.laserMark,

      diamondColor: obj.diamondColor,
      caratSizes: obj.caratSize,
      cutShapes: obj.cutShape,
      certificates: obj.certificates,
      jewelryID: obj.jevelryId,
      ringSize: obj.ringSize,
      metalColor: obj.metalColor,
      ringEngraving: obj.ringEngrave,

      message: message,
    };

    //  SEND EMAIL
    emailjs.send("service_jt9l9dt", "template_yevxgca", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function Error(error) {
        console.log("FAILED...", error);
      }
    );
  });
});
