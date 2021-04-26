(function () {
  emailjs.init("user_F1infr4XnoJN5o3sHvo0J");
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
 
    let cMark = Math.floor($("#laser_mark").attr("data-index-number"));
    showMarkPrice(cMark);
    $("#showAddedMarkMessage").text("Mark added!").fadeIn(1000).fadeOut(2000)
  });

  $("#laser_mark").blur(function(){
    if (selector("#laser_mark") == "") {
      cMark = 0;
      priceObject.cMark = cMark;
      showMarkPrice(cMark);
      $("#showAddedMarkMessage").text("Mark removed!").fadeIn(1000).fadeOut(2000)
    }
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

  function isBordered(box){
    if(box.hasClass("borderBox")) 
      return true;
    return false;
  }

  function showCertificatePrice(cCertificate){
    priceObject.cCertificate = cCertificate;
    console.log(priceObject);
    console.log("count-", priceObject.count());

    $(".counted__jeverly").text("$ " + priceObject.count());
    // $(".all-info #drop_10").text(`${obj.laserMark}`);
    $(".all-info #drop_9").text("$ " + priceObject.count());
  }

  function showMarkPrice(cMark){
    priceObject.cMark = cMark;
    console.log(priceObject);
    console.log("count-", priceObject.count());
    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());
    $(".all-info #drop_10").text(`${obj.laserMark}`);
  }

  // Price calculation

  const priceObject = {
    dPrice: 0,
    cSize: 0,
    cShape: 0,
    cCertificate: 0,
    cMark: 0,

    count: function () {
      let sep = this.dPrice + this.cSize + this.cShape + this.cCertificate + this.cMark;
      return sep;
    },
  };


  $("#diamond_box img").on("click", function diamonds() {
    let dPrice = Math.floor($(this).attr("data-index-number"));
    priceObject.dPrice = dPrice;
    console.log(priceObject);
    console.log("count-", priceObject.count());

    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());

    bordered($("#diamond_box img"), $(this));
    obj.diamondColor = $(this).attr("alt");
    $(".all-info #drop_1").text(`${obj.diamondColor}`);
  });

  $(".caratSize div").on("click", function () {
    let cSize = Math.floor($(this).attr("data-index-number"));
    priceObject.cSize = cSize;
    console.log(priceObject);
    console.log("count-", priceObject.count());

    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());

 
    $(".caratSize div").css({ border: "2px solid #d1cdcd" });
    $(this).css({ "border": "2px solid #cc8342", "transition": "0.3s" });
 

    obj.caratSize = $(this).text();
    $(".all-info #drop_2").text(`${obj.caratSize}`);
  });

  $(".cut_shape img").on("click", function () {
    let cShape = Math.floor($(this).attr("data-index-number"));
    priceObject.cShape = cShape;
    console.log(priceObject);
    console.log("count-", priceObject.count());

    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());

    bordered($(".cut_shape img"), $(this));
    obj.cutShape = $(this).attr("alt");
    $(".all-info #drop_3").text(`${obj.cutShape}`);
  });

  // $(".certificates img").on("click", function () {
  //   bordered($(".certificates img"), $(this));
  //   obj.certificates = $(this).attr("alt");
  //   $(".all-info #drop_4").text(`${obj.certificates}`);
  // });

  $("#gia").on("click", function () {
    let cCertificate = Math.floor($(this).attr("data-index-number"));
    if (isBordered($("#gia"))) {
      console.log($("#gia").attr("alt"));
      $("#gia").removeClass("borderBox");
      $(".all-info #drop_4").text(``);
      cCertificate = 0;
      showCertificatePrice(cCertificate);
      $("#showAddedCertMessage").text("GIA Removed!").fadeIn(1000).fadeOut(1000);
      return;
    }
      bordered($(".certificates img"), $(this));
      obj.certificates = $(this).attr("alt");

      showCertificatePrice(($(this).attr("data-index-number"))*1);
      $("#showAddedCertMessage").text("GIA $100").fadeIn(1000).fadeOut(1000);
      $(".all-info #drop_4").text(`${obj.certificates}`);
    });


  // double click to remove the tag;
  // *1 is used to parse the string to a number
  $("#igi").on("click", function () {
    if (isBordered($("#igi"))) {
      console.log($("#igi").attr("alt"));
      $("#igi").removeClass("borderBox");
      $(".all-info #drop_4").text(``);

      cCertificate = 0;
      showCertificatePrice(cCertificate);
      $("#showAddedCertMessage").text("IGI Removed!").fadeIn(1000).fadeOut(1000);
      return;
    }
      bordered($(".certificates img"), $(this));
      obj.certificates = $(this).attr("alt");

      showCertificatePrice(($(this).attr("data-index-number"))*1);
      $("#showAddedCertMessage").text("IGI $150").fadeIn(1000).fadeOut(1000);
      $(".all-info #drop_4").text(`${obj.certificates}`);
  });

  $("#laser-mark").on("click", function () {
    if ($("#laser-mark").attr()) {
      console.log($("#igi").attr("alt"));
      $("#igi").removeClass("borderBox");
      $(".all-info #drop_4").text(``);

      cCertificate = 0;
      showCertificatePrice(cCertificate);
      return;
    }
      bordered($(".certificates img"), $(this));
      obj.certificates = $(this).attr("alt");

      showCertificatePrice(($(this).attr("data-index-number"))*1);
      $(".all-info #drop_4").text(`${obj.certificates}`);
  });


  $(".metals img").on("click", function () {
    bordered($(".metals img"), $(this));
    obj.metalColor = $(this).attr("alt");
    $(".all-info #drop_7").text(`${obj.metalColor}`);
  });

  $(".ring_sizes div").on("click", function () {
    $(".ring_sizes div").css({ border: "2px solid #d1cdcd" });
    $(this).css({ "border": "2px solid #cc8342", "transition": "0.3s" });
    
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
      to_name: "SunnyEden",

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
      priceOfDiamond: priceObject.count(),

      message: message,
    };

    //  SEND EMAIL
    emailjs.send("service_zli7li4", "template_lxvedrh", templateParams).then(
      function (response) {
        console.log("SUCCESS!Email had been sent to you!", response.status, response.text);
      },
      function Error(error) {
        console.log("FAILED...", error);
      }
    );
  });
});


// console.clear();