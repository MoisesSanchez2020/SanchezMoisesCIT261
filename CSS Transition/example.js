function transitionBox(element, width) {
   
    element = document.getElementById(element);
    element.style.transition = 
        "width 1s linear 0s";
    element.style.width = width;
}
   
function transformBox(element, width) {
   
    element = document.getElementById(element);
    element.style.transform = "width 1s linear 0s";
    element.style.width = width;
    
}
 
  
function cElement(element, width, color) {
    var element = document.getElementById(element);
    element.style.transition = "width 1s linear 0s, background 1s linear 0s";
    element.style.width = width;
    element.style.background = color;
}
  