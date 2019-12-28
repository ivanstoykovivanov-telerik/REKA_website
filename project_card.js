// LOGIC FOR THE PAGE LISTING ALL THE PROJECTS 
//PROJECTS PRODUCED BY REKA PICTURES



projects.map( film => {
    console.log(film);
    if(film.company === "reka"){
        displayProjectCard("reka_projects", film.id, film.main_image, film.title_lang, film.title, film.synopsis_lang, film.synopsis, film.synopsis_length, film.mehr)
       
        // $("#reka_projects").append(
        //     `<div class="row project mt-5 mt-md-0" next_page="${film.id}">  
        //         <div class="col-9 col-md-5 col-xs-10 proj_img">
        //             <a href="project_page.html" nextPage="${film.id}" >
        //                 <img src="Image/${film.main_image}" class="project-image">
        //             </a>
        //         </div>
        //         <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
        //             <a href="project_page.html">
        //                 <h3 class="col-xs-10" data-translate="${film.title_lang}">${film.title}</h3>
        //                 <p class="col-xs-12 text-justify"> </p> <span class="text-justify" data-translate="${film.synopsis_lang}">${film.synopsis.substr(0,film.synopsis_length)}</span> <b>${film.mehr ? "[mehr...]" : ""} </b></p>
        //             </a>  
        //         </div>    
        //     </div>   
        //     `
        // );
    }else {
        displayProjectCard("cinemanda_projects", film.id, film.main_image, film.title_lang, film.title, film.synopsis_lang, film.synopsis, film.synopsis_length, film.mehr)
        // $("#cinemanda_projects").append(
        //     `<div class="row project mt-5 mt-md-0" next_page="${film.id}">  
        //         <div class="col-9 col-md-5 col-xs-10 proj_img">
        //             <a href="project_page.html" nextPage="${film.id}" >
        //                 <img src="Image/${film.main_image}" class="project-image">
        //             </a>
        //         </div>
        //         <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
        //             <a href="project_page.html">
        //                 <h3 class="col-xs-10" data-translate="${film.title_lang}">${film.title}</h3>
        //                 <p class="col-xs-12 text-justify"> </p> <span class="text-justify" data-translate="${film.synopsis_lang}">${film.synopsis.substr(0,film.synopsis_length)}</span> <b>${film.mehr ? "[mehr...]" : ""}</b></p>
        //             </a>  
        //         </div>    
        //     </div>   
        //     `
        // );
    } 
})



// OLD VERSION : 
// projects.map( film => {
//     console.log(film);
//     if(film.company === "reka"){
//         $("#reka_projects").append(
//             `<div class="row project mt-5 mt-md-0" next_page="${film.id}">  
//                 <div class="col-9 col-md-5 col-xs-10 proj_img">
//                     <a href="project_page.html" nextPage="${film.id}" >
//                         <img src="Image/${film.main_image}" class="project-image">
//                     </a>
//                 </div>
//                 <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
//                     <a href="project_page.html">
//                         <h3 class="col-xs-10" data-translate="${film.title_lang}">${film.title}</h3>
//                         <p class="col-xs-12 text-justify"> </p> <span class="text-justify" data-translate="${film.synopsis_lang}">${film.synopsis.substr(0,film.synopsis_length)}</span> <b>${film.mehr ? "[mehr...]" : ""} </b></p>
//                     </a>  
//                 </div>    
//             </div>   
//             `
//         );
//     }else {
//         $("#cinemanda_projects").append(
//             `<div class="row project mt-5 mt-md-0" next_page="${film.id}">  
//                 <div class="col-9 col-md-5 col-xs-10 proj_img">
//                     <a href="project_page.html" nextPage="${film.id}" >
//                         <img src="Image/${film.main_image}" class="project-image">
//                     </a>
//                 </div>
//                 <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
//                     <a href="project_page.html">
//                         <h3 class="col-xs-10" data-translate="${film.title_lang}">${film.title}</h3>
//                         <p class="col-xs-12 text-justify"> </p> <span class="text-justify" data-translate="${film.synopsis_lang}">${film.synopsis.substr(0,film.synopsis_length)}</span> <b>${film.mehr ? "[mehr...]" : ""}</b></p>
//                     </a>  
//                 </div>    
//             </div>   
//             `
//         );
//     } 
// })


$('.project').click(function(event){
    event.stopPropagation();  
    let nextPage = $(this).attr("next_page");       
    localStorage.setItem("page", nextPage); 
}); 

function displayProjectCard(htmlIDForCompany, id, main_image, title_lang, title, synopsis_lang, synopsis, synopsis_length, mehr){
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
                    <p class="col-xs-12 text-justify"> </p> <span class="text-justify" data-translate="${synopsis_lang}">${synopsis.substr(0,synopsis_length)}</span> <b>${mehr ? "[mehr...]" : ""} </b></p>
                </a>  
            </div>    
        </div>   
        `
    );
}