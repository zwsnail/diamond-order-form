$(document).ready(function () {
  let link = $("a");

  $(".sections").hide();
  $(".diamond_section").show();

  link.click(function () {
    let currentTab = $(this).attr("href");
    $(".sections").hide();
    $(currentTab).show();

    // return false;
  });
});

// diamond boxes

const obj = {
  diamondColor: "",
  caratSize: "",
  cutShape: "",
  certificates: "",
  ringSize: "",
  metalColor: "",
};

$("#diamond_box img").on("click", function () {
  obj.diamondColor = $(this).attr("alt");
  console.log(obj);
});

$(".cut_shape img").on("click", function () {
  obj.cutShape = $(this).attr("alt");
  console.log(obj);
});

$(".certificates img").on("click", function () {
  obj.certificates = $(this).attr("alt");
  console.log(obj);
});

$(".metals img").on("click", function () {
  obj.metalColor = $(this).attr("alt");
  console.log(obj);
});

$(".caratSize div").on("click", function () {
  obj.caratSize = $(this).text();
  console.log(obj);
});

$(".ring_sizes div").on("click", function () {
  obj.ringSize = $(this).text();
  console.log(obj);
});
