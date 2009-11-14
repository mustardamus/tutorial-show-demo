//check for the OS, if we are on a mac align the close button to the left, otherwise to the right
$(document).ready(function() {
  function refreshSettings() {
    winWidth = $(window).width();
    winHeight = $(window).height();
    edgeSpace = 40;
    iframeWidth = winWidth - edgeSpace * 2;
    iframeHeight = winHeight - edgeSpace * 2;
  }

  var winWidth, winHeight, edgeSpace, iframeWidth, iframeHeight;
  refreshSettings();
  
  //check if we are on a mac, if so set the align of the close anchor to left, otherwise to right (linux, windows)
  var align = navigator.appVersion.indexOf("Mac") != -1 ? "left" : "right";
  
  $('#demo').click(function() {
    $('body').append('<div id="demoarea"><iframe src="'+$(this).attr('href')+'" width="'+iframeWidth+'" height="'+iframeHeight+'"></iframe><a href="#close" id="close"></a></div>');

    $('#demoarea').css({
      'position'            : 'fixed',
      'top'                 : edgeSpace+'px',
      'left'                : edgeSpace+'px',
      'background'          : 'white',
      'max-height'          : iframeHeight+'px',
      'box-shadow'          : '0 0 '+edgeSpace+'px black',
      '-moz-box-shadow'     : '0 0 '+edgeSpace+'px black',
      '-webkit-box-shadow'  : '0 0 '+edgeSpace+'px black',
    }).children('#close').css({
      'position'            : 'absolute',
      'top'                 : '-15px',
      'display'             : 'block',
      'width'               : '30px',
      'height'              : '30px',
      'background'          : 'url(images/close.png)'
    }).css(align, '-15px') //set the align in a extra css function on the close button. including it in the above css({}) will not work
    .click(function() {
      $(this).parent().remove();
      return false;
    });
    
    return false;
  });
  
  $(window).resize(function() {
    refreshSettings();

    if($('#demoarea').length != 0) {
      $('#demoarea iframe').css({
        'width'   : iframeWidth+'px',
        'height'  : iframeHeight+'px'
      });
    }
  });
});


/*resize the iframe when the window is resized
$(document).ready(function() {
  function refreshSettings() {
    winWidth = $(window).width();
    winHeight = $(window).height();
    edgeSpace = 40;
    iframeWidth = winWidth - edgeSpace * 2;
    iframeHeight = winHeight - edgeSpace * 2;
  }
  
  var winWidth, winHeight, edgeSpace, iframeWidth, iframeHeight;
  refreshSettings();
  
  $('#demo').click(function() {
    $('body').append('<div id="demoarea"><iframe src="'+$(this).attr('href')+'" width="'+iframeWidth+'" height="'+iframeHeight+'"></iframe><a href="#close" id="close"></a></div>');

    $('#demoarea').css({
      'position'            : 'fixed',
      'top'                 : edgeSpace+'px',
      'left'                : edgeSpace+'px',
      'background'          : 'white',
      'max-height'          : iframeHeight+'px',
      'box-shadow'          : '0 0 '+edgeSpace+'px black',
      '-moz-box-shadow'     : '0 0 '+edgeSpace+'px black',
      '-webkit-box-shadow'  : '0 0 '+edgeSpace+'px black',
    }).children('#close').css({
      'position'            : 'absolute',
      'top'                 : '-15px',
      'left'                : '-15px',
      'display'             : 'block',
      'width'               : '30px',
      'height'              : '30px',
      'background'          : 'url(images/close.png)'
    }).click(function() {
      $(this).parent().remove();
      return false;
    });
    
    return false;
  });
  
  $(window).resize(function() {
    refreshSettings();

    if($('#demoarea').length != 0) {
      $('#demoarea iframe').css({
        'width'   : iframeWidth+'px',
        'height'  : iframeHeight+'px'
      });
    }
  });
});*/


/*resize the iframe when the window is resized
$(document).ready(function() {
  function refreshSettings() { //update the settings when calling this function
    winWidth = $(window).width();
    winHeight = $(window).height();
    edgeSpace = 40;
    iframeWidth = winWidth - edgeSpace * 2;
    iframeHeight = winHeight - edgeSpace * 2;
  }
  
  //global vars that can be updated from the function above
  var winWidth, winHeight, edgeSpace, iframeWidth, iframeHeight;
  refreshSettings(); //initial settings on first load
  
  $('#demo').click(function() {
    $('body').append('<div id="demoarea"><iframe src="'+$(this).attr('href')+'" width="'+iframeWidth+'" height="'+iframeHeight+'"></iframe><a href="#close" id="close"></a></div>');

    $('#demoarea').css({
      'position'            : 'fixed',
      'top'                 : edgeSpace+'px',
      'left'                : edgeSpace+'px',
      'background'          : 'white',
      'max-height'          : iframeHeight+'px',
      'box-shadow'          : '0 0 '+edgeSpace+'px black',
      '-moz-box-shadow'     : '0 0 '+edgeSpace+'px black',
      '-webkit-box-shadow'  : '0 0 '+edgeSpace+'px black',
    }).children('#close').css({
      'position'            : 'absolute',
      'top'                 : '-15px',
      'left'                : '-15px',
      'display'             : 'block',
      'width'               : '30px',
      'height'              : '30px',
      'background'          : 'url(images/close.png)'
    }).click(function() {
      $(this).parent().remove();
      return false;
    });
    
    return false;
  });
  
  $(window).resize(function() { //bind a resize event on the window
    refreshSettings(); //update the settings for the overlay and the iframe

    if($('#demoarea').length != 0) { //check if the overlay div exists
      $('#demoarea iframe').css({ //if so update the iframe
        'width'   : iframeWidth+'px',  //the width
        'height'  : iframeHeight+'px'  //and the height
      });
    }
  });
});*/


/*adding a close button to the overlay and bind a click on it to close the overlay
$(document).ready(function() {
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var edgeSpace = 40;
  var iframeWidth = winWidth - edgeSpace * 2;
  var iframeHeight = winHeight - edgeSpace * 2;
  
  $('#demo').click(function() {
    //add a close anchor inside the overlay div
    $('body').append('<div id="demoarea"><iframe src="'+$(this).attr('href')+'" width="'+iframeWidth+'" height="'+iframeHeight+'"></iframe><a href="#close" id="close"></a></div>');

    $('#demoarea').css({
      'position'            : 'fixed',
      'top'                 : edgeSpace+'px',
      'left'                : edgeSpace+'px',
      'background'          : 'white',
      'max-height'          : iframeHeight+'px',
      'box-shadow'          : '0 0 '+edgeSpace+'px black',
      '-moz-box-shadow'     : '0 0 '+edgeSpace+'px black',
      '-webkit-box-shadow'  : '0 0 '+edgeSpace+'px black',
    }).children('#close').css({ //style the close anchor
      'position'            : 'absolute',              //make it position absolute to the overlay div
      'top'                 : '-15px',                 //position it to top
      'left'                : '-15px',                 //and to left
      'display'             : 'block',                 //make it a block
      'width'               : '30px',                  //set width of background image
      'height'              : '30px',                  //and height
      'background'          : 'url(images/close.png)'  //and the actual url of the background image
    }).click(function() { //bind a click on the close anchor
      $(this).parent().remove(); //remove the overlay div from the dom
      return false; //dont follow the link
    });
    
    return false;
  });
});*/


/*bind a click on #demo link and append the iframe in a div to the body, style the overlay
$(document).ready(function() {
  var winWidth = $(window).width();             //get the current window width
  var winHeight = $(window).height();           //get the current window height
  var edgeSpace = 40;                           //we want the overlay to be 40px away from the edge
  var iframeWidth = winWidth - edgeSpace * 2;   //calculate the actual width of the iframe
  var iframeHeight = winHeight - edgeSpace * 2; //calculate the actual height of the iframe
  
  $('#demo').click(function() { //bind a click event to the #demo link
    //append the overlay div with the iframe in it to the body
    //point the iframe src to the href of the clicked #demo link
    //set the initial height and width of the iframe
    $('body').append('<div id="demoarea"><iframe src="'+$(this).attr('href')+'" width="'+iframeWidth+'" height="'+iframeHeight+'"></iframe></div>');
    
    //style the overlay div with static position and some CSS3 box shadow
    $('#demoarea').css({
      'position'            : 'fixed',                      //fixed in the browser window
      'top'                 : edgeSpace+'px',               //the space from the top
      'left'                : edgeSpace+'px',               //the space from the left
      'background'          : 'white',                      //initial background will be white
      'max-height'          : iframeHeight+'px',            //remove a bottom border that the iframe produces
      'box-shadow'          : '0 0 '+edgeSpace+'px black',  //set the box shadow to black and blur
      '-moz-box-shadow'     : '0 0 '+edgeSpace+'px black',  //for gecko based browser such as firefox
      '-webkit-box-shadow'  : '0 0 '+edgeSpace+'px black',  //for webkit based browsers such as safari
    });
    
    return false; //dont follow the link
  });
});*/