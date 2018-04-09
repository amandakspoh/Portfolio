"use strict";

// Testing to make sure JS is running
console.log("Script is running!");

// Allowing JS to read the size of the window as a variable
var windowWidth = window.innerWidth;
console.log("Window width: "+windowWidth);

// Allowing JS to read following ID's
var oneasicsLink = document.querySelector("#oneasics-link");
var oneasics = document.querySelector("#oneasics");

var inamotoLink = document.querySelector("#inamoto-link");
var inamoto = document.querySelector("#inamoto");

var hootsuiteLink = document.querySelector("#hootsuite-link");
var hootsuite = document.querySelector("#hootsuite");

var akqaLink = document.querySelector("#akqa-link");
var akqa = document.querySelector("#akqa");


// Media Query
if (windowWidth > 1250) {
  console.log("windowWidth > 1250px; Hover styling turned on.");

  // Show and hide image on hover
  oneasicsLink.onmouseenter = function(){
    oneasics.classList.remove("hidden");
  };
  oneasicsLink.onmouseleave = function(){
    oneasics.classList.add("hidden");
  };

  inamotoLink.onmouseenter = function(){
    inamoto.classList.remove("hidden");
  };
  inamotoLink.onmouseleave = function(){
    inamoto.classList.add("hidden");
  };

  hootsuiteLink.onmouseenter = function(){
    hootsuite.classList.remove("hidden");
  };
  hootsuiteLink.onmouseleave = function(){
    hootsuite.classList.add("hidden");
  };

  akqaLink.onmouseenter = function(){
    akqa.classList.remove("hidden");
  };
  akqaLink.onmouseleave = function(){
    akqa.classList.add("hidden");
  };
  
}
// Media Query – If the screen is smaller than 1250, don't display images on hover.
else {
    console.log("Hover styling turned off.");
}
