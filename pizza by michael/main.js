var i = 0; //start point

var images = [];

var time = 3000;

//image list

images[0] = 'http://pizzabymichael.com/Images/Veras-choice-818WC.jpg';
images[1] = './pexelspizza1.jpg';
images[2] = './pexelspizza2.jpg';
images[3] = './pexelspizza3.jpg';
images[4] = './pexelspizza4.jpg';
images[5] = './pexelspizza5.jpg';

//change image

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

$(document).ready(function() {


  $('#hamburger').on('click', function() {
    $('#side-menu').css({width: '250px'});
    $('#main').css({marginLeft: '250px'});
  });

  $('#btn-close').on('click', function() {
    $('#side-menu').css({width: '0px'});
    $('#main').css({marginLeft: '0px'});
  });

});

// function openSlideMenu() {
//   document.getElementById('side-menu').style.width = '250px';
//   document.getElementById('main').style.marginLeft = '250px';
// }
//
// function closeSlideMenu() {
//   document.getElementById('side-menu').style.width = '0';
//   document.getElementById('main').style.marginLeft = '0';
// }
