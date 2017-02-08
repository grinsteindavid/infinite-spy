/*! infiniteSpy - v1.0.0 - 2017-02-7
 * https://github.com/grinsteindavid
 * Copyright (c) 2017 Licensed MIT
 */

window.infiniteSpy = function(custom) {

  var config = {
    callback: custom.callback || console.log('infiniteSpy error - callback not found'),
    offset: custom.offset || 100
  };

  $(window).scroll(function(event) {
    var windowSizeY = $(window).height();
    var positionY = $('body').scrollTop();
    var bodyHeight = $('body').height();
    var bodyPadding = parseInt($('body').css('padding'));
    var bodyMargin = parseInt($('body').css('margin'));
    var currentY = positionY + windowSizeY - bodyMargin - bodyPadding;

    if (currentY + config.offset >= bodyHeight && config.callback) {config.callback()};
  });

};
