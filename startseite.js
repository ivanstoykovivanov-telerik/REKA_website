
// LOGIC FOR STARTSEITE :

for (let i = news.length-1; i >= 0; i--) {
    $(".news-container").append(
        `<div class="row">   
            <div class="col-2"><img src="Image/Vogel_Symbol_News.png" alt="" class="bird-news"></div>
            <div class="col-9 news" data-translate="_news_${i + 1}">${news[i]}</div>  
        </div>   
        `
    );
};

carousselPictures.map(
    picName => {
        $('.slider').append(
            `<img class="mySlides img-fluid" src="Image/${picName}">`
        )
    }
)


//CAROUSSEL MOVEMENT:  
var myIndex = 0;
carousel();
      
function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length){
        myIndex = 1
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}