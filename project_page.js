
// All the contents of the project pages: 
let projects = [
    {
        title: "Abwesend", 
        id: "abwesend", 
        cast: ["KATRIN SOMMER", "MÁRTON PETER NAGY", "MIKE SOMMER", "CLAUDIA BALKO", "WERNER ZWOSTA"], 
        synopsis: "Winter in einer deutschen Großstadt. Klara, 30-jährige alleinerziehende Mutter, kommt mit einem fremden Mann nach Hause. Beide sind betrunken, sie lachen, haben Spaß. Aber es ist noch jemand in der Wohnung: Anton, 9 Jahre alt, entdeckt sie im Bett. Am darauffolgenden Morgen ist Anton weg."
    }, 
    {
        title: "Zhaleika", 
        id: "zhaleika", 
        cast: [
            "ANNA MANOLOVA", 
            "SNEZHINA PETROVA", 
            "MIHAIL STOYANOV", 
            "MARIA KLECHEVA", 
            "STOYKO IVANOV", 
            "BOYANA GEORGIEVA", 
            "ASYA POPOVA", 
            "MÁRTON NAGY"
        ], 
        team: {
            Buch_und_Regie: "ELIZA PETKOVA",
            Bildgestaltung : "CONSTANZE SCHMITT", 
            Originalton : "HANNES MARGET",
            Kostümbild: "WARIS KLAMPFER",
            Licht: "DAVID SCHMITT",
            Szenenbild: "HRISTINA DYAKOVA, JANET IVANOVA",
            Produktion: "SVETOSLAV DRAGANOV, TIM OLIVER SCHULTZ, CÉCILE TOLLU-POLONOWSKI",
            Regieassistenz_und_Set: "PETAR PETROV",
            Produktionassistenz: "TSVETA ERMENKOVA",
            Kameraassistenz: "MALTE SIEPEN, CRISTINA AMATE GARCIA",
            Set_Runner: "GALIN POPOV, VESSELIN DENEV",
            Catering: "DIMITRINKA SEMKOVA",
            Schnitt: "HANNES MARGET, ELIZA PETKOVA",
            Tongestaltung: "HANNES MARGET, JOSCHA EICKEL",
            Grading: "CHRISTINE HIAM, CONSTANZE SCHMITT",
            Tonmischung: "SILVIO NAUMANN",
            Geräuschemacher: "PETER ROJGK",
            Herstellungsleitung_DFFB: "ANDREAS LOUIS",
            Produzent: "DEUTSCHE FILM- UND FERNSEHAKADEMIE BERLIN"
        }, 
        synopsis: "Lora, ein 17 jähriges Mädchen wird mit dem Tod ihres Vaters konfrontiert. In dem kleinen bulgarischen Dorf, wo die Zeit stehengeblieben zu sein scheint, erwarten ihre Familie und die Dorfbewohner, dass sie sich ihrer Trauer hingibt. Ab jetzt muss sie Schwarz tragen, darf keine Musik hören und muss diverse Trauerrituale beachten. Dabei will Lora ihre Jugend weiterhin ausleben. Ihr Wunsch aber wird durch den urteilenden Blick der anderen unterbunden, die sie dazu zwingen die Opferrolle eines Waisenkindes zu bedienen.", 
    },
];


for (let i = 0; i < projects.length; i++) {
    //get from local storage : 
    let page = localStorage.getItem("page"); 
    console.log(page);
    if(projects[i].id === page ){
        let synopsisEl = document.querySelector("#synopsis");
        synopsisEl.innerHTML= projects[i].synopsis; 
        let castEl = document.querySelector("#cast_id");
        for (let j = 0; j < projects[i].cast.length; j++) {
            $("#cast_id").append(`
            <p>${projects[i].cast[j]}</p>
            `); 
        }
    };
};