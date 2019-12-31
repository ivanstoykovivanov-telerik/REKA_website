const news = [
         "SOUNDS OF NATURE ist fertig gedreht und wir freuen uns auf die Fertigstellung.", 
         "DIE ANDEREN feiert Premiere auf den 52. Internationalen Hofer Filmtagen.",
         "EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT wurde abgedreht. Jetzt geht es in die Postproduktion.",
         "EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT läuft auf der 70. Berlinale in der Perspektive Deutsches Kino – wir freuen uns sehr!"
];

for (let i = news.length-1; i >= 0; i--) {
    $(".news-container").append(
        `<div class="row">   
            <div class="col-2"><img src="Image/Vogel_Symbol_News.png" alt="" class="bird-news"></div>
            <div class="col-9 news" data-translate="_news_${i + 1}">${news[i]}</div>  
        </div>   
        `
    );
};



  //CAPROUSSEL IMAGES  CONTENT
//   const caroussel_images = [
//     "einfisch.jpg",
//     "soundsofnature01.jpg",
//     "dieanderen_Still 01.jpg",
//     "dieanderen_Still 02.jpg",
//     "dieanderen_Still 03.jpg",
//   ]; 

  //CAPROUSSEL IMAGES  (NOT USED)
//   for (let j = 0; j < caroussel_images.length; j++) {
            
//     if(j === 0 ){
//         $(".startpage-carousel").append(`
//             <div class="carousel-item active">
//                 <img class="img-fluid" src="Image/${caroussel_images[j]}" alt="Slide_${j}">
//             </div>
//         `); 
//     }else{
//         $(".startpage-carousel").append(`
//             <div class="carousel-item">
//                 <img class="img-fluid" src="Image/${caroussel_images[j]}" alt="Slide_${j}">
//             </div>
//         `);
//     }
// }