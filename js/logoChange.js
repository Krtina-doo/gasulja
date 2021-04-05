var logo = document.getElementById('logo');

function myFunction(x) {
    if (x.matches) {
      logo.setAttribute('src','./images/logo-full.png');
    } else {
        logo.setAttribute('src','./images/steel.png');
    }
  }
function myFunction2(y) {
    if (y.matches) {
      logo.setAttribute('src','./images/logo-small.png');
    } else {
        logo.setAttribute('src','./images/steel.png');
    }
  }
function myFunction3(z) {
    if (z.matches) {
      document.getElementById('ham-menu').style.display='none';
    }
}

  var x = window.matchMedia('screen and (max-width: 1130px) and (min-width:361px)');
  var y = window.matchMedia('screen and (max-width: 360px)');
  var z = window.matchMedia('screen and (min-width: 1130px)');
  myFunction3(z);
  z.addListener(myFunction3);
  myFunction(y);
  y.addListener(myFunction2);
  myFunction(x);
  x.addListener(myFunction);