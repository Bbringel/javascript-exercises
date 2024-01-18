// import the functions here:
import {changeText , changeToFunkyColor} from './module.js'

// Header
const header = document.getElementById("header");

// Change Text:
changeText(header, "I did it!");

// Change color:
setInterval(()=> {
  
changeToFunkyColor(header);

}, 200);
