

if (localStorage.getItem('language')){
    console.log("test");
    const langNavBar = localStorage.getItem('language');

    if(langNavBar === "EN"){
        $("#language").text("DE"); 
    }else{
        $("#language").text("EN"); 
    }     
}
    
    //test