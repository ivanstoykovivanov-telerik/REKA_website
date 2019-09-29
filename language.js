var dictionary = {
    "EN": {
        "_news_1" : "SOUNDS OF NATURE wraps shooting and we are looking forward to the completion.", 
        "_news_2" : "THE OTHERS celebrates its premiere at the 52nd International Hof Film Festival.",
        "_news_3" : "A FISH SWIMMING UPSIDE DOWN wraps shooting. Now we are going in postproduktion.",
        "_projects_prod_by" : "PROJECTS PRODUCED BY REKA PICTURES", 
        "_projects": "PROJECTS",
        "_aboutus" : "ABOUT US",
        "_contact" : "CONTACTS",
        "_BIO_eliza" : "Eliza Petkova was born in Veliko Tarnovo, Bulgaria. After completing a Master's degree in Philosophy and Modern Japanese Studies at the Heinrich Heine University, Düsseldorf, she moved to Berlin in 2008 and started working as a freelance documentary filmmaker. In 2011 she enrolled in Film Director Studies at the German Film and Television Academy, Berlin, graduating in 2019. During that time she produced several short feature films, which received awards at international film festivals, as well two feature films.In 2015, her short film ABSENT was nominated for selection in the Cinéfondation at the 68th Cannes Film Festival. In 2016 she completed her first feature-length film, ZHALEIKA, which premiered at the 66th Berlin Film Festival where it was nominated for Best First Feature Film and was awarded a Special Mention by the international jury of the Generation Section. This was followed by various other festival screenings, as well as international prizes and awards. Eliza was invited to participate in the Berlinale Talents at the 68th Berlin International Film Festival in 2018. She sits on the jury at several European film festivals. Her second feature film, A FISH SWIMMING UPSIDE DOWN, will be released in 2019.", 
        "_BIO_konstantin" : "Konstantin was born and raised in Berlin. As a child, he developed a passion for visual design. In 2014, he started studying cinematography at the GERMAN FILM AND TELEVISION ACADEMY BERLIN, and took additional courses in film production. Around this time he began working with director Eliza Petkova. Konstantin has also produced and photographed the short film DIE ANDEREN, which premiered at the 52nd HOF INTERNATIONAL FILM FESTIVAL. This led to several short films, including SOUNDS OF NATURE (currently in post-production) in co-operation with the STIFTUNG FÜR NATURSCHUTZ BERLIN. The film was shot on 35mm, with Konstantin working as producer and cinematographer and Eliza as scriptwriter and director. In 2019, Konstantin produced the feature film A FISH SWIMMING UPSIDE DOWN.", 
        "_REKA_mission" : "We have joined together to create films that contain truth, ambiguity and poetry. REKA is the Bulgarian word for “river”. Our aim is to produce films that are in perpetual motion, and not based on the ‘cut-and-paste’ concepts of filmmaking."
        
    },
    "DE": {
        "_news_1" : "SOUNDS OF NATURE ist fertig gedreht und wir freuen uns auf die Fertigstellung.", 
        "_news_2" : "DIE ANDEREN feiert Premiere auf den 52. Internationalen Hofer Filmtagen.",
        "_news_3" : "EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT wurde abgedreht. Jetzt geht es in die Postproduktion.",
        "_projects_prod_by" : "PROJEKTE VON REKA PICTURES", 
        "_projects": "PROJEKTE",
        "_aboutus" : "ÜBER UNS",
        "_contact" : "KONTAKT",
        "_BIO_eliza" : "Geboren in Veliko Tarnovo, Bulgarien. 2008 nach dem Magisterabschluss in Philosophie und Modernes Japan an der „Heinrich-Heine-Universität“ zu Düsseldorf, beginnt sie als freie Filmemacherin in Berlin zu arbeiten, wo sie zuerst den Fokus auf Dokumentarfilm legt. 2011 - 2019 Studium an der Deutschen Film- und Fernsehakademie Berlin in der Fachrichtung Regie. Es entstanden diverse fiktionale Kurzfilme, die international auf vielen Filmfestivals ausgewertet und ausgezeichnet wurden, wie auch zwei Langspielfilme. 2015 wurde der Kurzfilm ABWESEND beim 68. Festival de Cannes für die Selektion Cinéfondation nominiert. Februar 2016 vollendete sie ihren ersten Langspielfilm ZHALEIKA, der auf der 66. Berlinale seine Premiere feierte. Dort wurde ZHALEIKA für den besten First Feature Film nominiert und wurde mit einer lobenden Erwähnung von der internationalen Jury der Sektion Generation ausgezeichnet. Es folgten diverse weitere Festivalteilnahmen wie auch internationale Preise und Auszeichnungen. 2018 Einladung zur Partizipation bei Berlinale Talents bei den 68. Internationalen Filmfestspielen Berlin. Tätigkeit als Jury Mitglied bei zahlreichen Filmfestivals europaweit. 2019 folgt ihr zweiter Langspielfilm EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT.", 
        "_BIO_konstantin" : "Konstantin lebt in Berlin und ist dort aufgewachsen. In seiner Kindheit entwickelt er eine Leidenschaft für visuelle Gestaltung. 2014 folgt ein Studium für Bildgestaltung an der Deutschen Film- und Fernsehakademie Berlin, wo er einen zusätzlichen Fokus auf die Producertätigkeit legt. Zu dieser Zeit beginnt die Zusammenarbeit mit Eliza Petkova. Unter anderem produziert und fotografiert er den Kurzfilm DIE ANDEREN, der seine Premiere bei den 52. Internationalen Hofer Filmtagen feiert. Dabei entstehen mehrere Kurzspielfilme – davon aktuell SOUNDS OF NATURE (z. Zt. in der Postproduktion) in Kooperation mit der Stiftung für Naturschutz Berlin. Der Film wurde auf 35mm gedreht, Eliza ist für Buch und Regie zuständig und Konstantin für die Produktion und Bildgestaltung. 2019 produziert er den Langspielfilm EIN FISCH, DER AUF DEM RÜCKEN SCHWIMMT.", 
        "_REKA_mission" : "Wir haben uns verbunden, um Filme, die Wahrheit, Geheimnis und Poesie in sich tragen, zu schaffen. REKA steht für das bulgarische Wort „Fluss“. Unser Anspruch ist Filme zu machen, die in Bewegung bleiben und nicht in den vorgefertigten Schablonen des Filmemachens verweilen."
    }
};


$(function() {
    let set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };


    $("#language").on("click", function(){

        let language = $(this).text(); 

        if(language ==="EN"){
            console.log($(this).text());
            if (dictionary.hasOwnProperty(language)) {
                set_lang(dictionary[language]);
            }
            $("#language").text("DE"); 
        }else if(language === "DE"){
            console.log($(this).text());
            if (dictionary.hasOwnProperty(language)) {
                set_lang(dictionary[language]);
            }
            $("#language").text("EN"); 
        }
        set_lang(dictionary.english);
    }); 
})

