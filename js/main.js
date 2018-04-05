"use strict";

console.log("Script is running!");

var portraitLink = document.querySelector("#portrait-link");
var portrait = document.querySelector("#portrait");

var oneasicsLink = document.querySelector("#oneasics-link");
var oneasics = document.querySelector("#oneasics");

var inamotoLink = document.querySelector("#inamoto-link");
var inamoto = document.querySelector("#inamoto");

var hootsuiteLink = document.querySelector("#hootsuite-link");
var hootsuite = document.querySelector("#hootsuite");

var akqaLink = document.querySelector("#akqa-link");
var akqa = document.querySelector("#akqa");

// Show and hide image on hover

portraitLink.onmouseenter = function(){
  portrait.classList.remove("hidden");
};

// portraitLink.onmouseleave = function(){
//   portrait.classList.add("hidden");
// };

oneasicsLink.onmouseenter = function(){
  oneasics.classList.remove("hidden");
};

// oneasicsLink.onmouseleave = function(){
//   oneasics.classList.add("hidden");
// };

inamotoLink.onmouseenter = function(){
  inamoto.classList.remove("hidden");
};

// inamotoLink.onmouseleave = function(){
//   inamoto.classList.add("hidden");
// };

hootsuiteLink.onmouseenter = function(){
  hootsuite.classList.remove("hidden");
};

// hootsuiteLink.onmouseleave = function(){
//   hootsuite.classList.add("hidden");
// };

akqaLink.onmouseenter = function(){
  akqa.classList.remove("hidden");
};

// akqaLink.onmouseleave = function(){
//   akqa.classList.add("hidden");
// };
