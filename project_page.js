
// let title = document.querySelector("#project_title"); 
// title.innerHTML = "Teeeeest " ; 

let currentURL = window.location.href; 
console.log(currentURL);
let splitURL = currentURL.split("/"); 
console.log(splitURL);  

let lastPartOfUrl = splitURL[splitURL.length-1].split("."); 
let pageName = lastPartOfUrl[0]; 
console.log(pageName);
console.log(`${pageName}.synopsis`);


//ABWESEND
let projects = [
    {
        title: "Abwesend", 
        cast: ["KATRIN SOMMER", "MÁRTON PETER NAGY", "MIKE SOMMER" , "CLAUDIA BALKO", "WERNER ZWOSTA"], 
        synopsis: "ABWESEND : Winter in einer deutschen Großstadt. Klara, 30-jährige alleinerziehende Mutter, kommt mit einem fremden Mann nach Hause. Beide sind betrunken, sie lachen, haben Spaß. Aber es ist noch jemand in der Wohnung: Anton, 9 Jahre alt, entdeckt sie im Bett. Am darauffolgenden Morgen ist Anton weg."
    }, 
    {
        title: "Zhaleika", 
        cast: ["KATRIN SOMMER", "MÁRTON PETER NAGY", "MIKE SOMMER" , "CLAUDIA BALKO", "WERNER ZWOSTA"], 
        synopsis: "ZHALEIKA:  Winter in einer deutschen Großstadt. Klara, 30-jährige alleinerziehende Mutter, kommt mit einem fremden Mann nach Hause. Beide sind betrunken, sie lachen, haben Spaß. Aber es ist noch jemand in der Wohnung: Anton, 9 Jahre alt, entdeckt sie im Bett. Am darauffolgenden Morgen ist Anton weg."
    },
];



// console.log(projects[0].title.toLowerCase());
for (let i = 0; i < projects.length; i++) {
    if(projects[i].title.toLowerCase() === pageName ){
        let syn = document.querySelector("#synopsis");
        syn.innerHTML= projects[i].synopsis; 
    };
};