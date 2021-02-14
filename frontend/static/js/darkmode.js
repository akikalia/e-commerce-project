let root = document.documentElement;
let darkMode = document.querySelector("#dark-mode-toggle")

darkMode.addEventListener("click", e => {
  let color = "rgb(0, 51, 102)";
  if (root.style.getPropertyValue('--bg-color') == color){
    root.style.setProperty('--bg-color', "white");
    root.style.setProperty('--primary', "#084a83");
    
  }else{
    root.style.setProperty('--bg-color', color);
    root.style.setProperty('--primary', "#539ddb");
  }
});