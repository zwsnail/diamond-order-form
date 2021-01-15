(function () {
  emailjs.init("user_IUFyW3twYDD5jnfPHSSlw");
})();

$(document).ready(function () {
  function selector(target) {
    return document.querySelector(target).value;
  }

  $(".ring_engrave_form").on("submit", function (e) {
    e.preventDefault();
    obj.jevelryId = selector("#style_id");
    obj.ringEngrave = selector("#diamond_text_engrave");

    console.log(obj);

    $(".jeverly-id-text").append(`${obj.jevelryId}`);
    $(".all-info #drop_5").text(`${obj.jevelryId}`);
    $(".all-info #drop_8").text(`${obj.ringEngrave}`);
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

  function bordered(box, select) {
    box.removeClass("borderBox");
    select.addClass("borderBox");
  }

  $("#diamond_box img").on("click", function () {
    bordered($("#diamond_box img"), $(this));
    obj.diamondColor = $(this).attr("alt");
    $(".all-info #drop_1").text(`${obj.diamondColor}`);
  });

  $(".cut_shape img").on("click", function () {
    bordered($(".cut_shape img"), $(this));
    obj.cutShape = $(this).attr("alt");
    $(".all-info #drop_3").text(`${obj.cutShape}`);
  });

  $(".certificates img").on("click", function () {
    bordered($(".certificates img"), $(this));
    obj.certificates = $(this).attr("alt");
    $(".all-info #drop_4").text(`${obj.certificates}`);
  });

  $(".metals img").on("click", function () {
    bordered($(".metals img"), $(this));
    obj.metalColor = $(this).attr("alt");
    $(".all-info #drop_7").text(`${obj.metalColor}`);
  });

  $(".caratSize div").on("click", function () {
    $(".caratSize div").css({ border: "1px solid #eee" });
    $(this).css({ border: "1px solid #cc8342" });
    obj.caratSize = $(this).text();
    $(".all-info #drop_2").text(`${obj.caratSize}`);
  });

  $(".ring_sizes div").on("click", function () {
    $(".ring_sizes div").css({ border: "1px solid #eee" });
    $(this).css({ border: "1px solid #cc8342" });
    obj.ringSize = $(this).text();
    $(".all-info #drop_6").text(`${obj.ringSize}`);
  });

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
