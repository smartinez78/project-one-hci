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
  });
}());
