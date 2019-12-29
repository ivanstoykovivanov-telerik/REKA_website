// LOGIC FOR THE PAGE LISTING ALL THE PROJECTS (REKA PICTURES AND OTHER PROJECTS BY ELIZA)


/*
* Display the content according to the company to which the film belongs (reka or cinemanda)
*/
projects.map( film => {
    
    if(film.company === "reka"){
        
        displayProjectCard("reka_projects", film.id, film.main_image, film.title_lang, film.title, film.synopsis_lang, film.logline, film.logline_lang, film.synopsis, film.synopsis_length, film.mehr)
          
    }else {
        
        displayProjectCard("cinemanda_projects", film.id, film.main_image, film.title_lang, film.title, film.synopsis_lang, film.logline, film.logline_lang, film.synopsis, film.synopsis_length, film.mehr)
        
    } 
})


/*
* Creates the single page for a film's details
*/
$('.project').click(function(event){
    event.stopPropagation();  
    let nextPage = $(this).attr("next_page");       
    localStorage.setItem("page", nextPage); 
}); 


/*
*
* Displays all the details for a given project. The result is the project card of a film having an image, title , synopsis.... 
*/
function displayProjectCard(htmlIDForCompany, id, main_image, title_lang, title, synopsis_lang, logline, logline_lang,  synopsis, synopsis_length, mehr){
    $(`#${htmlIDForCompany}`).append(
        `<div class="row project mt-5 mt-md-0" next_page="${id}">  
            <div class="col-9 col-md-5 col-xs-10 proj_img">
                <a href="project_page.html" nextPage="${id}" >
                    <img src="Image/${main_image}" class="project-image">
                </a>
            </div>
            <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
                <a href="project_page.html">
                    <h3 class="col-xs-10" data-translate="${title_lang}">${title}</h3>
                    <p class="col-xs-12 text-justify"> </p> <span class="text-justify" data-translate="${ logline !== "" ? logline_lang : synopsis_lang }">${logline === "" ? synopsis.substr(0,synopsis_length) : logline }</span> <b>${ logline !=="" && mehr  ? "" : "[mehr...]"} </b></p>
                </a>  
            </div>    
        </div>   
        `
    );
}