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

  var mailing_list = document.querySelector('#mailing-list')
  var form_submit = document.querySelector('#submit');
  var email_input = document.querySelector('#email');
  var phone_input = document.querySelector('#telephone');

  }); // end of DOM content


}());  // end of function
