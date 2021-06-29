// (function () {
//   emailjs.init("user_F1infr4XnoJN5o3sHvo0J");
//   console.log("here");
// })();




$(document).ready(function () {
  function selector(target) {
    // return document.querySelector(target).value;
    if (document.querySelector(target).value == "")
      return "";
    return document.querySelector(target).value;
  }

  // -------------------------------- Notify --------------------------------

  function notifyFunction(title, status) {
    new Notify({
      status: status,
      title: title,
      text: 'text',
      effect: 'slide',
      speed: 300,
      customClass: 'myNotify',
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: 3,
      position: 'bottom y-center'
    })
  }

  // -------------------------------- jewelry ring Engrave--------------------------------
  // obj.jevelryId = `$("#jewelry_id option:selected" ).text()`;
  // $("#jewelry_id option:selected" ).text();
  $('#jewelry_id').on('change', function () {
    // obj.jevelryId = `$("#jewelry_id option:selected" ).text()`
    // obj.jevelryId = selector("#jewelry_id");
    obj.jevelryId = this.value;
    $(".all-info #drop_5").text(`${obj.jevelryId}`);
  });

  $(".ring_engrave_form").on("submit", function (e) {
    e.preventDefault();
    obj.ringEngrave = selector("#diamond_text_engrave");
    // $(".jeverly-id-text").append(`${obj.jevelryId}`);
    $(".all-info #drop_8").text(`${obj.ringEngrave}`);

    notifyFunction(obj.ringEngrave, 'success');
  });



  $("#diamond_text_engrave").blur(function () {
    if (selector("#diamond_text_engrave") == "") {
      obj.ringEngrave = selector("#diamond_text_engrave");
      $(".all-info #drop_8").text(`${obj.ringEngrave}`);

      notifyFunction("Removed", "success");
    }
  });



  // -------------------------------- laser mark --------------------------------


  //diamond 
  $(".personal_text").on("submit", function (e) {
    e.preventDefault();
    obj.laserMark = selector("#laser_mark");
    let cMark = 100;
    if (priceObject.cCertificate != 0) {
      // let cMark = Math.floor($("#laser_mark").attr("data-index-number"));
      cMark = 0;

    }
    notifyFunction(obj.laserMark, "success");

    showMarkPrice(cMark);

  });

  $("#laser_mark").blur(function () {
    if (selector("#laser_mark") == "") {
      cMark = 0;
      priceObject.cMark = cMark;
      showMarkPrice(cMark);

      notifyFunction("Removed!", "success");
      obj.laserMark = selector("#laser_mark");
      // $(".jeverly-id-text").append(`${obj.jevelryId}`);
      $(".all-info #drop_10").text(`${obj.laserMark}`);
    }
  });




  var obj = {
    laserMark: "N/A",
    diamondColor: "N/A",
    // diamondColor: "Colorless",
    caratSize: 0,
    // caratSize: 0.5,
    cutShape: "N/A",
    // cutShape: "Brilliant Cut",
    certificates: "N/A",
    jevelryId: "N/A",
    ringSize: "N/A",
    metalColor: "N/A",
    ringEngrave: "N/A",
  };

  function bordered(box, select) {
    box.removeClass("borderBox");
    select.addClass("borderBox");
  }

  function isBordered(box) {
    if (box.hasClass("borderBox"))
      return true;
    return false;
  }

  function showCertificatePrice(cCertificate) {
    priceObject.cCertificate = cCertificate;

    $(".counted__jeverly").text("$ " + priceObject.count());
    // $(".all-info #drop_10").text(`${obj.laserMark}`);
    $(".all-info #drop_9").text("$ " + priceObject.count());
  }

  function showMarkPrice(cMark) {
    priceObject.cMark = cMark;
    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());
    $(".all-info #drop_10").text(`${obj.laserMark}`);
  }

  // Price calculation

  const priceObject = {
    // dPrice: 0,
    // cSize: 0,
    // cShape: 0,
    cCertificate: 0,
    cMark: 0,

    // count: function () {
    //   let sep = this.dPrice + this.cSize + this.cShape + this.cCertificate + this.cMark;
    //   return sep;
    // },
    count: function () {
      let sep = colorSizeCutPrice() + this.cCertificate + this.cMark;
      return sep;
    },
  };


  $("#diamond_box img").on("click", function diamonds() {
    bordered($("#diamond_box img"), $(this));
    obj.diamondColor = $(this).attr("alt");
    notifyFunction(obj.diamondColor, "success");
    $(".all-info #drop_1").text(`${obj.diamondColor}`);
    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());
  });

  $(".caratSize div").on("click", function () {
    // let cSize = Math.floor($(this).attr("data-index-number"));
    // priceObject.cSize = cSize;
    // console.log(priceObject);
    // console.log("count-", priceObject.count());

    $(".caratSize div").css({ border: "2px solid #d1cdcd" });
    $(this).css({ "border": "2px solid #01282d", "transition": "0.3s" });


    // obj.caratSize = $(this).text();
    obj.caratSize = Number($(this).text());
    console.log("obj.caratSize--", obj.caratSize)
    $(".all-info #drop_2").text(`${obj.caratSize}`);

    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());
  });

  $(".cut_shape img").on("click", function () {
    // let cShape = Math.floor($(this).attr("data-index-number"));
    // priceObject.cShape = cShape;

    bordered($(".cut_shape img"), $(this));

    obj.cutShape = $(this).attr("alt");
    notifyFunction(obj.cutShape, "success");
    $(".all-info #drop_3").text(`${obj.cutShape}`);

    $(".counted__jeverly").text("$ " + priceObject.count());
    $(".all-info #drop_9").text("$ " + priceObject.count());
  });


  function colorSizeCutPrice() {
    const differencePrice = 500;
    const colorlessHalfCarat = 2000;

    var beforeCutPrice = 0;
    var afterCutPrice = 0;

    if (obj.diamondColor == "Colorless") {

      switch (obj.caratSize) {
        case 0.5:
          beforeCutPrice = colorlessHalfCarat;
          break;
        case 1:
          beforeCutPrice = colorlessHalfCarat * 2 + differencePrice;
          break;
        case 1.5:
          beforeCutPrice = colorlessHalfCarat * 4;
          break;
        case 2:
          beforeCutPrice = colorlessHalfCarat * 4 * 1.5;
          break;
        default:
          console.log("Not yet choose size 1");
      }
    }
    if (obj.diamondColor == "Rose Pink" || obj.diamondColor == "Eden Green" || obj.diamondColor == "Sky Blue") {
      switch (obj.caratSize) {
        case 0.5:
          beforeCutPrice = (colorlessHalfCarat + differencePrice) + differencePrice;
          break;
        case 1:
          beforeCutPrice = ((colorlessHalfCarat + differencePrice) + differencePrice) * 2 + differencePrice;
          break;
        case 1.5:
          beforeCutPrice = ((colorlessHalfCarat + differencePrice) + differencePrice) * 4;
          break;
        case 2:
          beforeCutPrice = ((colorlessHalfCarat + differencePrice) + differencePrice) * 4 * 1.5;
        default:
          console.log("Not yet choose size 2");
      }
    }
    if (obj.diamondColor == "Sunny Yellow") {
      switch (obj.caratSize) {
        case 0.5:
          beforeCutPrice = colorlessHalfCarat + differencePrice;
          break;
        case 1:
          beforeCutPrice = (colorlessHalfCarat + differencePrice) * 2 + differencePrice;
          break;
        case 1.5:
          beforeCutPrice = (colorlessHalfCarat + differencePrice) * 4;
          break;
        case 2:
          beforeCutPrice = (colorlessHalfCarat + differencePrice) * 4 * 1.5;
        default:
          console.log("Not yet choose size 3");
      }
    }
    if (obj.diamondColor == "N/A") {
      console.log("No color yet");
    }

    // console.log("beforeCut Price=", beforeCutPrice);

    if (obj.cutShape != "N/A") {

      switch (obj.cutShape) {
        case "Brilliant Cut":
          afterCutPrice = beforeCutPrice;
          break;
        case "Asscher Cut":
        case "Princess Cut":
        case "Radiant Cut":
          afterCutPrice = beforeCutPrice * 1.15;
          break;
        case "Cushion Cut":
        case "Emerald Cut":
        case "Heart Cut":
          afterCutPrice = beforeCutPrice * 1.30;
          break;
        case "Oval Cut":
        case "Marquise Cut":
        case "Pear Cut":
          afterCutPrice = beforeCutPrice * 1.50;
          break;
        default:
          console.log("Not yet choose shape 4");
          afterCutPrice = 0;
      }
    } else {
      // To avoid choose the cert first without return any number
      afterCutPrice = 0;
    }
    // console.log("afterCutPrice=", afterCutPrice);

    // return Math.round(afterCutPrice);
    return Math.ceil(afterCutPrice / 100) * 100;
  }//end of function


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

      showCertificatePrice(0);


      notifyFunction("GIA removed", "success");
      //remove Cert the laser Mark cost $100
      showMarkPrice(100);
      return;
    }
    // obj.cMark = 0;

    bordered($(".certificates img"), $(this));
    obj.certificates = $(this).attr("alt");

    showCertificatePrice(($(this).attr("data-index-number")) * 1);
    showMarkPrice(0);
    notifyFunction("GIA - $350", "success");
    $(".all-info #drop_4").text(`${obj.certificates}`);
  });


  // double click to remove the tag;
  // *1 is used to parse the string to a number
  $("#igi").on("click", function () {
    if (isBordered($("#igi"))) {

      $("#igi").removeClass("borderBox");
      $(".all-info #drop_4").text(``);

      showCertificatePrice(0);

      notifyFunction("IGI removed!", "success");
      //remove Cert the laser Mark cost $100
      showMarkPrice(100);
      return;
    }
    bordered($(".certificates img"), $(this));
    obj.certificates = $(this).attr("alt");

    showCertificatePrice(($(this).attr("data-index-number")) * 1);
    showMarkPrice(0);
    notifyFunction("IGI - $250", "success");
    $(".all-info #drop_4").text(`${obj.certificates}`);
  });




  $(".metals img").on("click", function () {
    bordered($(".metals img"), $(this));
    obj.metalColor = $(this).attr("alt");
    $(".all-info #drop_7").text(`${obj.metalColor}`);
  });



  //popup the size window
  $("#show-dialog").on("click", function (e) {
    e.preventDefault();
    $(".popup").addClass("visible");
    console.log("popup");
  });



  $(".ring_sizes div").on("click", function () {
    $(".ring_sizes div").css({ border: "2px solid #d1cdcd" });
    $(this).css({ "border": "2px solid #01282d", "transition": "0.3s" });

    obj.ringSize = $(this).text();
    $(".all-info #drop_6").text(`${obj.ringSize}`);
  });



  // $(".email-submit").on("submit", function (e) {
  // $(".send_req").on("submit", function (e) {
  $(".send_req").click(function (e) {
    e.preventDefault();

    // let username = (if(username == ""))?"":"";
    // let userlname = "";
    // let userMail = "";
    // let phoneNumber = "";;
    // let address1 =  "";
    // let address2 = "";
    // let city = "";
    // let state =  "";
    // let zip = "";
    // let country = "";
    // let message = "";
    // let contactInformation = "";
    // let addresses = "";
    // let citys = "";
    // let countrys = "";

    let username = (selector("#firstName")) ? selector('#firstName') : "";
    // let username = selector("#firstName");
    let userlname = selector("#lastName");
    let userMail = selector("#email");
    let phoneNumber = selector("#phoneNumber");
    let address1 = selector("#adress-1");
    let address2 = selector("#adress-2");
    let city = selector("#city");
    let state = selector("#state");
    let zip = selector("#zip");
    let country = selector("#country");
    let message = selector("#message");
    let contactInformation = ` ${username} ${userlname}`;
    let addresses = `${address1} , ${address2}`;
    let citys = `${city} , ${state}`;
    let countrys = `${zip} , ${country}`;

    let templateParams = {
      from_name: contactInformation,
      mail: userMail,
      phone: phoneNumber,
      to_name: "SunnyEden™",

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

    var form = $("form[name='email-submit']");


    // form.submit(function (event) {
    //   var $this = $(this);
    //   validationForm = $this.get(0).reportValidity();
    //   console.log("2:", validationForm);

    // });


    // var $this = $(this);
    // console.log("$this:", $this);
    // validationForm = $this.get(0).reportValidity();
    // console.log("$this.get(0):", $this.get(0));
    // console.log("3 validationForm", validationForm);
    // console.log("$this.get(0).reportValidity()", $this.get(0).reportValidity());
    // console.log("form.valid()", form.valid());


    if (form.valid()) {
      // console.log('valid! going to send email');
      //"service_jt9l9dt", "template_yevxgca"
      emailjs.send("service_zli7li4", "template_lxvedrh", templateParams).then(
        // emailjs.send("s", "template_lxvedrh", templateParams).then(
        // emailjs.sendForm("service_zli7li4", "template_lxvedrh", templateParams, "contact-form-emailjs", "user_F1infr4XnoJN5o3sHvo0J").then(
        function (response) {
          // console.log("SUCCESS! Email had been sent to you!", response.status, response.text);
          $(".alertFeedback").toggleClass("active");
          $("#nalertFeedbackId").toggleClass("success");

          setTimeout(function () {
            $(".alertFeedback").removeClass("active");
            $("#alertFeedbackId").removeClass("success");
          }, 2000);

          showBootbox();

        },

        function (error) {
          console.log("Email server failed...", error);
          $(".alertFeedback").addClass("active");
          $("#nalertFeedbackId").addClass("failure");

          setTimeout(function () {
            $(".alertFeedback").removeClass("active");
            $("#alertFeedbackId").removeClass("failure");
          }, 3000);
        });

    } else {
      // console.log('invalid! validation');
      $(".alertFeedback").toggleClass("active");
      $("#alertFeedbackId").toggleClass("validation");

      setTimeout(function () {
        $(".alertFeedback").removeClass("active");
        $("#alertFeedbackId").removeClass("validation");
      }, 3000);

      //mobile version no need to hide anything
      // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
      // console.log("isMobile:", isMobile);
      if (!isMobile) {
        $(".jewerly_section").hide();
        $(".contact_section").show();
        $(".diamond_section").hide();
        $("#summary_section").hide();
        $(".group").hide();

        $(".footer_space").show();
        $(".head").hide();

        $(".headline").show();
        $(".a-di").removeClass("navBorderBox");
        $(".a-je").removeClass("navBorderBox");
        $(".a-co").addClass("navBorderBox");
        $(".a-su").removeClass("navBorderBox");
      }
    }

  });//$(".email-submit").on("submit", function (e) {



  // alert the box to choose stay this page or go to home page
  function showBootbox() {

    let username = (selector("#firstName")) ? selector('#firstName') : "";

    var dialog = bootbox.dialog({
      title: 'Dear ' + username,
      message: "<p style='text-align: center;'>Thank you for being our valued customer.<br>We will reply to you within 48 hours.<br>Please let us know if we can do anything else to help. We are so grateful for the pleasure of serving you and hope we met your expectations. </p>",
      size: 'large',
      centerVertical: 'true',
      buttons: {
        cancel: {
          label: "Stay",
          className: 'btn-danger',
          callback: function () {
            // console.log('');
          }
        },
        // noclose: {
        //     label: "I don't close the modal!",
        //     className: 'btn-warning',
        //     callback: function(){
        //         console.log('Custom button clicked');
        //         return false;
        //     }
        // },
        ok: {
          label: "Home",
          className: 'btn-info',
          callback: function () {
            console.log('Custom OK clicked');
            window.location.replace("https://www.sunnyeden.com");
          }
        }
      }
    });
    console.log("alert:", dialog);
    dialog.init();
  }//bootbox






});//$(document).ready(function () {







// console.clear();
