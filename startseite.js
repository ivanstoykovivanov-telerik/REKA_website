const news = [
         "SOUNDS OF NATURE ist fertig gedreht und wir freuen uns auf die Fertigstellung.", 
         "DIE ANDEREN feiert Premiere auf den 52. Internationalen Hofer Filmtagen.",
         "EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT wurde abgedreht. Jetzt geht es in die Postproduktion.",
         "EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT läuft auf der 70. Berlinale in der Perspektive Deutsches Kino – wir freuen uns sehr!",
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
