
// LOGIC FOR A SINGLE PROJECT PAGE : 

for (let i = 0; i < projects.length; i++) {
    //get from local storage : 
    let page = localStorage.getItem("page"); 
    console.log(page);
    if(projects[i].id === page ){
        
        //TITLE 
        $("#film_title").append(`
            <span class="text-justify" data-translate="${projects[i].title_lang}"> 
                ${projects[i].title.toUpperCase()}
            </span>
        `); 

        //SYNOPSIS
        $("#synopsis_block").append(`
            <p class="text-justify" data-translate="${projects[i].synopsis_lang}"> 
                ${projects[i].synopsis}
            </p>
        `); 


        //CAPROUSSEL IMAGES 
        for (let j = 0; j < projects[i].caroussel_images.length; j++) {
            
            if(j === 0 ){
                $(".carousel-inner").append(`
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="Image/${projects[i].caroussel_images[j]}" alt="Slide_${j}">
                    </div>
                `); 
            }else{
                $(".carousel-inner").append(`
                    <div class="carousel-item">
                        <img class="d-block w-100" src="Image/${projects[i].caroussel_images[j]}" alt="Slide_${j}">
                    </div>
                `);
            }
        }
       
      
        //CAST
        for (let j = 0; j < projects[i].cast.length; j++) {
            $("#cast_id").append(`
            <p>${projects[i].cast[j]}</p>
            `); 
        }

        //TEAM
        const entries = Object.entries(projects[i].team);
        for(const [role, person] of entries){
            const newRole = role.replace(/_/g, " "); 
            //TODO: 
            $("#team_id").append(`
                <p> <span data-translate="${newRole}">${newRole}</span>: ${person}</p>
            `);     
        }; 

        //STATS_1
        for (let j = 0; j < projects[i].stats_1.length; j++) {
            $("#stats_1_id").append(`
            <p data-translate="">${projects[i].stats_1[j]}</p>
            `); 
        }

        //STATS_2
        const entries2 = Object.entries(projects[i].stats_2);
        if(entries2.length > 0){
            for(const [key, value] of entries2){
                // const newRole = role.replace(/_/g, " "); 
                $("#stats_2_id").append(`
                    <p>${key} : ${value}</p>
                `);
            };
        };

        
        //POSTER 
        if(projects[i].poster !== ""){
            $("#poster_id").attr("src",`${projects[i].poster}`);
        }

        //TRAILER
        $("#trailer_id").attr("src",`trailer/${projects[i].trailer}`);


        //FESTIVALS 
        projects[i].festivals.map(
            festival => {
                $("#festivals_id").append(
                    `
                        <div class="festival"><img src="Image/black-laurel.jpg" data-translate="">${festival.festival}</div> 
                    `
                ); 
                if(festival.awards.length  > 0 ){
                        festival.awards.map(
                            award => {
                            $("#festivals_id").append(
                                `
                                    <div class="award"><img src="" data-translate="">${award}</div> 
                                `   
                            ); 
                        }
                    )
                };  
            } 
        )
    }
}                 

