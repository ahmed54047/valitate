//____________________________lets go to bulid this  form vali  i can make that   _____________________________________________________//

let inputfname = document.querySelector('#fn');
let inputlname = document.querySelector('#ln');
let inputadd = document.querySelector('#ad');
let inputmail = document.querySelector('#mal');
let inputpass = document.querySelector('#pass');

let form = document.querySelector('form');

let nameRe = /^[A-Za-z]{3,22}$/;
let emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

inputfname.addEventListener('input', () => {
  if (nameRe.test(inputfname.value)) {
    console.log(' fn :valid');
  } else {
    console.log(' invalid');
  }
});

inputmail.addEventListener('input', () => {
  if (emailRe.test(inputmail.value)) {
    console.log('valid');
  } else {
    console.log(' invalid');
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
});


