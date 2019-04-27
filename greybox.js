let gBox = document.querySelector(".greybox") ; 
fadeInGBox(gBox); 

function fadeInGBox(element){
        setTimeout(() =>  {
            element.classList.add('show'); 
            element.classList.remove('hide'); 
        }, 1000); 

}