/* global document */

var myheader1 = document.querySelector("h1");
myheader1.textContent = "DeRoyal";

var myimges = document.querySelector("img");

myimges.onclick = function() {
    var bannerImg = myimges.getAttribute("src");
    if(bannerImg === "images/sample1.jpg"){
        myimges.setAttribute("src", "images/sample2.jpg");
    }else {
        myimges.setAttribute("src", "images/sample1.jpg");
    }
}