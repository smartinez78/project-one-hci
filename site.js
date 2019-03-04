"use strict";

(function() {
  //browser check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('This is an old browser');
    return;
  }

  // select elements from DOM content and store in variables
  var form_submit = document.querySelector('#submit');
  var mailing_list = document.querySelector('#mailing-list');
  var email_input = document.querySelector('#email');

  // function to check email validity
  function check_email(value) {
    var email = value;
    // check for symbols
    return validate(email,/^[^@\s]+@[^@\s]+$/g);
  }

  // check to see if DOM content has loaded
  document.addEventListener('DOMContentLoaded',function() {
    // disable the submit button after DOM content loads
    form_submit.setAttribute('disabled','disabled');

    // listen for keyup anywhere on form
    mailing_list.addEventListener('keyup',function() {
      var email_value = email_input.value;
      // check the potential validity of email
      if (check_email(email_value)) {
        // enable submit button if valid email is entered
        form_submit.removeAttribute('disabled');
      } // end of validate_email 'if' statement
    }); // end of mailing_list event listener

  });// end of DOM content function
}()); // end of IIFE
