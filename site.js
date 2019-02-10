(function(){
  // browser check
  if (!('querySelector' in document && 'addEventListener' in document)) {
    console.log('Old browser');
    return;
  }

  var form_submit = document.querySelector('#submit');

  // check to see if DOM content has loaded
  document.addEventListener('DOMContentLoaded',function(){
  // disable submit button
  form_submit.setAttribute('disabled','disabled');

  // select elements from DOM content and store in variables
  var mailing_list = document.querySelector('#mailing-list')
  var email_input = document.querySelector('#email');
  var phone_input = document.querySelector('#telephone');

  // listen for keyup anywhere on form
  mailing_list.addEventListener('keyup',function(){
   var clean_number = phone_input.value.replace(/\D/g,'');
   var final_number = clean_number.replace(/^1/,'');
   // enable submit button if final number is acceptable
   if (sanitized_number.length === 10) {
     form_submit.removeAttribute('disabled');
   }
  }); // end of mailing_list event listener
  }); // end of DOM content
}());  // end of function
