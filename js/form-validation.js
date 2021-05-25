// Wait for the DOM to be ready
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  console.log("Initializing");
  $("form[name='email-submit']").validate({

    rules: {
      firstName: "required",
      // lastName: "required",
      email: {
        required: true,
        email: true
      },
      adress1: "required",
      city: "required",
      state: "required",
      zip: {
        digits: true,
        required: true
      },
      country: "required"
    },
    // Specify validation error messages
    messages: {
      firstName: "Please enter your first name",
      lastName: "Please enter your last name",
      // password: {
      //   required: "Please provide a password",
      //   minlength: "Your password must be at least 5 characters long"
      // },
      email: "Please enter a valid email address",
      adress1: "Please enter at least one address",
      city: "Please enter your city",
      state: "Please enter your state",
      zip: {
        digits: " Please only enter numbers!",
        required: "Please enter your zip"
      },
      country: "Please enter your country"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      form.submit();
    }


  });

  $(".a-su").click(function () {
    $(".email-submit").submit();
  });

});