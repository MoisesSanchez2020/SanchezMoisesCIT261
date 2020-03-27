// Map from: http://commons.wikimedia.org/wiki/File:Blank_US_Map.svg @Theshibboleth

$(function() {
    var output = $('figcaption');
    $('path').each(function() {
      var that = $(this);
      that.on('mouseenter', function() {
        //$(this).attr('fill', '#08f');
        output.text($(this).attr('id')); // Could grab a cool data-something description or link somewhere.
      });
      that.on('mouseleave', function() {
        //$(this).attr('fill', '#d3d3d3');
      });
      that.on('click', function() {
        //$(this).toggleClass('active'); Doesn't work with svg
        var that = $(this);
        (that.attr('data-active') === 'true') ? that.attr('data-active', 'false') : that.attr('data-active', 'true');
      });
    });
  
  }); // end jQuery ready
  