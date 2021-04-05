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
  
  var x = window.matchMedia("screen and (max-width: 1130px) and (min-width:360px)");
  var y = window.matchMedia("screen and (max-width: 359px)");
  myFunction(y);
  y.addListener(myFunction2);
  myFunction(x);
  x.addListener(myFunction);