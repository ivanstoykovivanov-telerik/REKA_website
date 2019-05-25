var dictionary = {
    "EN": {
        "_projects": "PROJECTS",
        "_aboutus" : "ABOUT US",
        "_contact" : "CONTACTS",
        "_BIO_eliza" : "Born in Veliko Tarnovo, Bulgaria. In 2008, after graduating in Philosophy and Modern Japan from Heinrich Heine University in Düsseldorf, she started working as a freelance filmmaker in Berlin, where she first focuses on documentary film. 2011 - 2019 Studies at the German Film and Television Academy Berlin in the field of directing. Various fictional short films were created, which were evaluated and honored internationally at many film festivals, as well as two feature films. In 2015, the short ABWESEND was nominated for the selection Cinéfondation at the 68th Festival de Cannes. In February 2016, she completed her first feature film ZHALEIKA, which premiered at the 66th Berlinale. There, ZHALEIKA was nominated for Best First Feature Film and was honored with an Honorable Mention by the Generation Generation International Jury. This was followed by various other festival participations as well as international prizes and awards. 2018 Invitation to participate in Berlinale Talents at the 68th Berlin International Film Festival. Jury member at numerous film festivals throughout Europe. In 2019, her second feature film A FISH SWIMS ON THE BACK.", 
        "_BIO_konstantin" : "Konstantin lives in Berlin and grew up there. In his childhood he developed a passion for visual design. In 2014, he studied photography at the German Film and Television Academy Berlin, where he puts an additional focus on producing. At this time begins the collaboration with Eliza Petkova. Among other things, he produces and photographs the short film DIE ANDEREN, which celebrates its premiere at the 52nd International Hofer Filmtage. In the process, several short feature films are being produced - of which currently are SOUNDS OF NATURE (currently in post production) in cooperation with the Stiftung für Naturschutz Berlin. The film was shot on 35mm, Eliza is responsible for the book and director and Konstantin for the production and image design. In 2019 he produced the feature film EIN FISCH, which swims on his back.", 
        "_REKA_mission" : "We have joined forces to create films that contain truth, mystery and poetry. REKA stands for the Bulgarian word \"river\". Our aim is to make films that stay in motion and do not linger in the ready-made templates of filmmaking."
    },
    "DE": {
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

