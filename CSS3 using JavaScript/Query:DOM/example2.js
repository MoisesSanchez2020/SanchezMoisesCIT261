//remove comments to try first  example
//document.getElementById('target').style.color = 'blue';


// another option is to create <style> tag fill it with css rules

var style = document.createElement('style');
style.innerHTML = `
#target {
color: green;
font-Size: 40px;
width: 200px;
height: 200px;
background: yellow;
}
`;
document.head.appendChild(style);

//another  way to change style
/*var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('#target {color: darkseagreen}');*/


  //another way to change style

  // Create our shared stylesheet:
/*const sheet = new CSSStyleSheet();
sheet.replaceSync('#target {color: red}');

// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];*/