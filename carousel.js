var x = document.getElementsByClassName("projectslides");
var myIndex = 0;
var i;
carousel();
var carouselTimeout;

function prevNext(direction="next"){
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex += direction === "next" ? 1 : -1;
  if (myIndex > x.length) {myIndex = 1}
  if(myIndex < 0) {myIndex = x.length-1}
  x[myIndex].style.display = "inline-block";
}

function carousel() {
  prevNext();
  carouselTimeout = setTimeout(carousel, 4000); // Change image every 4 seconds
}

document.querySelector(".arrow-next")
  .addEventListener("click", function(){
    clearTimeout(carouselTimeout);
    prevNext();
  })

  document.querySelector(".arrow-previous")
    .addEventListener("click", function(){
      clearTimeout(carouselTimeout);
      prevNext("previous");
    })
