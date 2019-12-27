
// PROJEKTE PAGE to be displayed under: 
//PROJECTS PRODUCED BY REKA PICTURES

const projectTitles = [
    "EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT </br><p id='work_in_progress'>(WORK IN PROGRESS)</p>", 
    "SOUNDS OF NATURE </br><p id='work_in_progress'>(WORK IN PROGRESS)</p>", 
    "ELEMENTE", 
    "DIE ANDEREN",
    "ZHALEIKA",
    "NABELSCHNUR",
    "ABWESEND", 
    "ZUR RECHTEN ZEIT",
    "MEIN SOHN",
    "ABGESCHNITTEN", 
    "WILLKOMMEN ZUHAUSE",
];

const projectDescriptions = [
    //"EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT", 
    "Ein Film über eine ungewöhnliche Dreiecksbeziehung, in der sich die Beteiligten mehr zumuten als sie zu ertragen fähig sind.", 
        
    //"SOUNDS OF NATURE", 
    "Luisa versucht die Fürsorge für ihre im Rollstuhl sitzende Mutter (Eva) zwischen der Arbeit in der Zahnarztpraxis und dem privaten Stress unterzubringen. Während einem Waldspaziergang entdecken die beiden,  dass sich bereits eine große Entfremdung zwischen ihnen ausgebreitet hat. Eva findet Trost und Geborgenheit in dem Wald, im Gegensatz zu Luisa, die den selben Ort als Gefahr wahrnimmt.  Es häufen sich verschiedene Missverständnisse und eine Überreaktion veranlasst Luisa ihre Mutter im Wald alleine zu lassen und umzukehren. Am Ende bleibt der Wald ganz still, während eine Tochter vergeblich und verzweifelt nach ihrer Mutter sucht.", 
    
    //DESCRIPTION OF EXTRA PROJECT
    "bLA BLA elemente SYNOPSIS ",

    //"DIE ANDEREN"
    "Ein Mann hat eine besondere Fähigkeit und wird dafür verurteilt. Es wird von ihm verlangt sich anzupassen, sich aufzugeben, anders zu sein. Am Ende steht er vor der Entscheidung zwischen Selbstbehauptung und Selbstauflösung.",
    
    // "ZHALEIKA",
    "Lora, ein 17 jähriges Mädchen wird mit dem Tod ihres Vaters konfrontiert. In dem kleinen bulgarischen Dorf, wo die Zeit stehengeblieben zu sein scheint, erwarten ihre Familie und die Dorfbewohner, dass sie sich ihrer Trauer hingibt. Ab jetzt muss sie Schwarz tragen, darf keine Musik hören und muss diverse Trauerrituale beachten. Dabei will Lora ihre Jugend weiterhin ausleben. Ihr Wunsch aber wird durch den urteilenden Blick der anderen unterbunden, die sie dazu zwingen die Opferrolle eines Waisenkindes zu bedienen.",
    
    //"NABELSCHNUR", 
    "Todor ist Anfang 30. Er wohnt immer noch mit seiner Mutter zusammen, die jeden Tag für ihn kocht, seine Hemden bügelt, ihn badet und abends mit ihm im Arm Fernsehen schaut. Sie gibt alle Regeln vor: Der Alltag der beiden ist von Ritualen und Musterverhalten bestimmt. Todor arbeitet in einem Großraumbüro, sein routiniertes Leben funktioniert perfekt bis zu dem Tag, an dem er von einer Firmenparty das erste Mal zu spät nach Hause kommt.",
    
    //"ABWESEND", 
    "Winter in einer deutschen Großstadt. Klara, 30-jährige alleinerziehende Mutter, kommt mit einem fremden Mann nach Hause. Beide sind betrunken, sie lachen, haben Spaß. Aber es ist noch jemand in der Wohnung: Anton, 9 Jahre alt, entdeckt sie im Bett. Am darauffolgenden Morgen ist Anton weg.",
    
    // "ZUR RECHTEN ZEIT",
    "Adriane Gertz ist Philosophielehrerin in der Oberstufe. Ihr Ideal sozial unabhängig zu sein und ihr Bestreben nach Selbstgenügsamkeit werden durch die Liebesbeziehung zu ihrem Schüler Dominik erschüttert. Die Unmöglichkeit ihren Werten gerecht zu werden bringt sie zur Selbstverachtung. Ihr Alltag wird zunehmend von Machtspielen und Verlustängsten bestimmt. Adriane muss schmerzhaft erfahren, dass sie sich dem Menschlichen nicht entziehen kann. Die Verneinung der Körperlichkeit durch Waschzwänge, die Vermeidung von Begegnungen durch soziale Isolation, zeigen das Bild einer Frau, die die Kälte und Einsamkeit einer Gesellschaft verkörpert, in der die Angst vorm Scheitern die Lust zum Leben erstickt.",
    
    // "MEIN SOHN",
    "Leonard von Thiel hat Jura studiert und sollte die Kanzlei seines Vaters übernehmen. Stattdessen verkauft er tropische Früchte in einem Bonbon-Outfit und versucht damit andere Menschen glücklich zu machen. Ein Doc-Fiction Film, der unveränderte Realität und inszenierte Wirklichkeiten vermischt und die Frage nach dem „Richtig“ und „Falsch“ erst gar nicht zu stellen vermag.",

    // "ABGESCHNITTEN", 
    "Ein Kurzfilm über einen Mann, dessen Leidenschaft das Sammeln von Haar fremder Menschen ist.", 

    // "WILLKOMMEN ZUHAUSE"
    "Am 14. April 2010 wurde das Rückübernahmeabkommen zwischen Deutschland und Kosovo unterzeichnet. Seitdem finden zunehmend Abschiebungen von aus dem Kosovo stammenden Roma statt. In den Flugzeugen sitzen Menschen, die meistens seit über zehn Jahren in Deutschland leben und nun im Kosovo ihre Heimat finden sollen. Wie gelingt es jemandem, der in Deutschland geboren und aufgewachsen ist, sich in einem fremden Land zu Hause zu fühlen, ohne dass er die Sprache beherrscht, ohne die Möglichkeit, die Straße in Ruhe und Sicherheit zu betreten? Wie viele Träume und Hoffnungen bleiben da noch übrig? Und wie fühlt man sich, wenn 40 Polizisten mitten in der Nacht an der Tür klingeln mit der Ankündigung: „Ihr habt 30 Minuten Zeit, eure Sachen zu packen.“? Der Film ermöglicht einen Einblick in das Leben abgeschobener Roma im Kosovo und solchen, die in Deutschland von der Abschiebung bedroht sind. Keines der abgeschobenen Kinder besucht die Schule; meistens übernachten alle Familienmitglieder in einem Raum; medizinische Versorgung ist den Roma nur schwer zugänglich; die wenigsten besitzen ein Bad, und sogar fließendes Wasser in der Toilette zählt zum Luxus. Hier wie dort können die Roma nachts nicht ruhig schlafen. In Deutschland, weil sie jede Sekunde mit der Abschiebung rechnen, im Kosovo vor lauter Heimweh nach Deutschland - und aus Angst vor rassistischen Übergriffen.", 
];

const lang_PD = [
     //"EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT", 
     "_PD_ein_fisch", 
     //"SOUNDS OF NATURE", 
     "_PD_sounds_of_nature",
     //"DIE ANDEREN"
     "_PD_die_anderen",
     // "ZHALEIKA",
     "_PD_zhaleika",
     //"NABELSCHNUR", 
     "_PD_nabelschnur",
     //"ABWESEND", 
     "_PD_abwesend",
     // "ZUR RECHTEN ZEIT",
     "_PD_zur_rechten",
     // "MEIN SOHN",
     "_PD_mein_sohn",
     // "ABGESCHNITTEN", 
     "_PD_abgeschnitten",
     // "WILLKOMMEN ZUHAUSE"
     "_PD_willkommen_zuhause",
]

const lang_TITLES = [
        "_TITLES_ein_fisch" ,
        "_TITLES_sounds_of_nature" ,
        "_TITLES_die_anderen" ,
        "_TITLES_zhaleika" ,
        "_TITLES_nabelschnur" ,
        "_TITLES_abwesend" ,
        "_TITLES_zur_rechten" ,
        "_TITLES_mein_sohn" ,
        "_TITLES_abgeschnitten"  ,
        "_TITLES_willkommen_zuhause" 
]

projects.map( film => {
    console.log(film);
    if(film.company === "reka"){
        $("#reka_projects").append(
            `<div class="row project mt-5 mt-md-0" next_page="${film.id}">  
                <div class="col-9 col-md-5 col-xs-10 proj_img">
                    <a href="project_page.html" nextPage="${film.id}" >
                        <img src="Image/${film.main_image}" class="project-image">
                    </a>
                </div>
                <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
                    <a href="project_page.html">
                        <h3 class="col-xs-10" data-translate="${film.title_lang}">${film.title}</h3>
                        <p class="col-xs-12"> </p> <span data-translate="${film.synopsis_lang}">${film.synopsis.substr(0,film.synopsis_length)}</span> <b> [mehr...]</b></p>
                    </a>  
                </div>    
            </div>   
            `
        );
    }else {
        $("#cinemanda_projects").append(
            `<div class="row project mt-5 mt-md-0" next_page="${film.id}">  
                <div class="col-9 col-md-5 col-xs-10 proj_img">
                    <a href="project_page.html" nextPage="${film.id}" >
                        <img src="Image/${film.main_image}" class="project-image">
                    </a>
                </div>
                <div class="col-9 mx-auto col-md-4 mt-3 mt-md-0">
                    <a href="project_page.html">
                        <h3 class="col-xs-10" data-translate="${film.title_lang}">${film.title}</h3>
                        <p class="col-xs-12"> </p> <span data-translate="${film.synopsis_lang}">${film.synopsis.substr(0,film.synopsis_length)}</span> <b> [mehr...]</b></p>
                    </a>  
                </div>    
            </div>   
            `
        );
    } 
})


$('.project').click(function(event){
    event.stopPropagation();  
    let nextPage = $(this).attr("next_page");       
    localStorage.setItem("page", nextPage); 
}); 

