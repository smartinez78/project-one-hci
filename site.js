"use strict";

(function(){
  // select elements from DOM content and store in variables
  var form_submit = document.querySelector('#submit');
  var mailing_list = document.querySelector('#mailing-list');
  var email_input = document.querySelector('#email');

  // browser check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('Old browser');
    return;
  }

  // check to see if DOM content has loaded
  document.addEventListener('DOMContentLoaded', function(){
    // disable submit button
    form_submit.setAttribute('disabled', 'disabled');

    // listen for keyup anywhere on form
    // check that an email has been entered
    mailing_list.addEventListener('keyup', function(){
      if (email_input.includes('@')) {
        form_submit.removeAttribute('disabled');
      }
    }); // end of mailing_list event listener
  }); // end of DOM content function
}());  // end of function
