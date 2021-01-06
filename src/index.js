import { default as theabout } from "./about.js";
import { default as themenu } from "./menu.js";

let mybody = document.createElement('div');
let theheader = document.createElement('div');
let thecontent = document.getElementById('content');
let myheader = document.createElement('div');   
let headElement = document.createElement('div');
let titleElement = document.createElement('h1');
    
myheader.className = 'header';
headElement.className = 'head';
titleElement.className = 'title';
    
titleElement.innerHTML = 'LAKESIDE HOTEL';

let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
button1.innerHTML = "ABOUT";
button2.innerHTML = "MUNU";
button3.innerHTML = "CONTACTS";

let body = document.getElementsByTagName("body")[0];
let buttonMenu = document.createElement("div");
body.appendChild(mybody);
mybody.append(theheader, thecontent);
theheader.append(myheader, buttonMenu);
buttonMenu.append(button1, button2, button3);
myheader.appendChild(headElement);
headElement.appendChild(titleElement);

buttonMenu.className = 'buttonMenu';

button1.addEventListener("click", function() {
    theabout();
}, {once: true});

button2.addEventListener("click", function() {
    themenu();
}, {once: true});

