function NavMenu()
{
    let chp_1 = "1 - Modularité et mise au point de programmes";
    let chp_2 = "2 - Récursivité";
    let chp_3 = "3 - Paradigmes de programmation";
    let chp_4 = "4 - Interface et implémentation des structures de données";
    let chp_5 = "5 - Structures arborescentes";
    let chp_6 = "6 - Graphes";
    let chp_7 = "7 - Conception de bases de données";
    let chp_8 = "8 - Composants et processus";
    let chp_9 = "9 - Protocoles de routage et sécurisation des communications";
    let chp_10 = "10 - Programmes et données - Calculabilité";
    let chp_11 = "11 - Programmation avancée";
    let chp_12 = "12 - Projets informatiques";

    document.getElementById('titre_principal').innerText = "Année de T°";

    document.getElementById('nav_menu').innerHTML = 
    "<ul class='ul_menu'>\
        <li id='chp_1'>\
            <toto onclick='Cours1()'>\
                <div><p>"+chp_1+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_2'>\
            <toto onclick='Cours2()'>\
                <div><p>"+chp_2+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_3'>\
            <toto onclick='Cours3()'>\
                <div><p>"+chp_3+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_4'>\
            <toto onclick='Cours4()'>\
                <div><p>"+chp_4+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_5'>\
            <toto onclick='Cours5()'>\
                <div><p>"+chp_5+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_6'>\
            <toto onclick='Cours6()'>\
                <div><p>"+chp_6+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_7'>\
            <toto onclick='Cours7()'>\
                <div><p>"+chp_7+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_8'>\
            <toto onclick='Cours8()'>\
                <div><p>"+chp_8+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_9'>\
            <toto onclick='Cours9()'>\
                <div><p>"+chp_9+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_10'>\
            <toto onclick='Cours10()'>\
                <div><p>"+chp_10+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_11'>\
            <toto onclick='Cours11()'>\
                <div><p>"+chp_11+"</p></div>\
            </toto>\
        </li>\
        <li id='chp_12'>\
            <toto onclick='Cours12()'>\
                <div><p>"+chp_12+"</p></div>\
            </toto>\
        </li>\
    </ul>";

    document.getElementById('nav_menu').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    document.getElementById('rtr_btn').style.display = 'none';
}

/* Cours 1_modularite_et_mise_au_point_de_programmes */

function Cours1()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';

    document.getElementById('titre_principal').innerText = "1 - Modularité et mise au poing des programmes";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Modules et documentations";
    let titre_2 = "2 - Déboguer un programme";
    let titre_3 = "3 - Tests";
    let titre_4 = "4 - Guide de style";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours1_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours1_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours1_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours1_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = "1_modularite_et_mise_au_point_de_programmes/pdf/1_modules_et_documentations.pdf";
}

function Cours1_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "1_modularite_et_mise_au_point_de_programmes/pdf/1_modules_et_documentations.pdf";
}

function Cours1_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "1_modularite_et_mise_au_point_de_programmes/pdf/2_deboguer_un_programme.pdf";
}

function Cours1_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "1_modularite_et_mise_au_point_de_programmes/pdf/3_tests.pdf";
}

function Cours1_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "1_modularite_et_mise_au_point_de_programmes/pdf/4_guide_de_style.pdf";
}

/* Cours 2_recursivite */

function Cours2()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';

    document.getElementById('titre_principal').innerText = "2 - Récursivité";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Fonctionnement d'un programme recursif";
    let titre_2 = "2 - Diviser pour régner";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours2_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours2_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "2_recursivite/pdf/1_fonctionnement_d_un_programme_recursif.pdf";
}

function Cours2_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "2_recursivite/pdf/1_fonctionnement_d_un_programme_recursif.pdf";
}

function Cours2_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "2_recursivite/pdf/2_diviser_pour_regner.pdf";
}

/* Cours 3_paradigmes_de_programmation */

function Cours3()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';

    document.getElementById('titre_principal').innerText = "3 - Paradigmes de programmation";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Les principaux paradigmes de programmation";
    let titre_2 = "2 - Programmation fonctionnelle";
    let titre_3 = "3 - Programmation orientée objet";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours3_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours3_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours3_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "3_paradigmes_de_programmation/pdf/1_les_principaux_paradigmes_de_programmation.pdf";
}

function Cours3_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "3_paradigmes_de_programmation/pdf/1_les_principaux_paradigmes_de_programmation.pdf";
}

function Cours3_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "3_paradigmes_de_programmation/pdf/2_programmation_fonctionnelle.pdf";
}

function Cours3_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "3_paradigmes_de_programmation/pdf/3_programmation_orientee_objet.pdf";
}

/* Cours 4_interface_et_implementation_des_structures_de_donnees */

function Cours4()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';

    document.getElementById('titre_principal').innerText = "4 - Interface et implémentation des structures de donnée";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Les types abstraits";
    let titre_2 = "2 - Les listes";
    let titre_3 = "3 - Les piles";
    let titre_4 = "4 - Les files";
    let titre_5 = "5 - Les tableaux associatifs";
    let titre_6 = "6 - Exos";
    let titre_7 = "7 - Révision 1";
    let titre_8 = "8 - Révision 2";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours4_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours4_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours4_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours4_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours4_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
            <li id='cours6' onclick='Cours4_6(), SelectedLi(this.id);'>"+titre_6+"</li>\
            <li id='cours7' onclick='Cours4_7(), SelectedLi(this.id);'>"+titre_7+"</li>\
            <li id='cours8' onclick='Cours4_8(), SelectedLi(this.id);'>"+titre_8+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/1_les_types_abstraits.pdf";
}

function Cours4_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/1_les_types_abstraits.pdf";
}

function Cours4_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src =
    "4_interface_et_implementation_des_structures_de_donnees/pdf/2_les_listes.pdf";
}

function Cours4_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/3_les_piles.pdf";
}

function Cours4_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/4_les_files.pdf";
}

function Cours4_5()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/5_les_tableaux_associatifs.pdf";
}

function Cours4_6()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/Exos.pdf";
}

function Cours4_7()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/rev1.pdf";
}

function Cours4_8()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "4_interface_et_implementation_des_structures_de_donnees/pdf/rev2.pdf";
}

/* Cours 5_structures_arborescentes */

function Cours5()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';

    document.getElementById('titre_principal').innerText = "5 - Structures arborescentes";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Introduction";
    let titre_2 = "2 - Les arbres binaires";
    let titre_3 = "3 - Quelques mesures";
    let titre_4 = "4 - Définition récursive";
    let titre_5 = "5 - Généalogie";
    let titre_6 = "6 - Attributs";
    let titre_7 = "7 - Algo sur les arbres binaires";
    let titre_8 = "8 - Révision";
    let titre_9 = "9 - Exos";
    let titre_10 = "10 - ABR";
    let titre_11 = "11 - Révision";
    let titre_12 = "12 - Exos";
    let titre_13 = "13 - Implémentation des ABR à l'aide de la POO";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours5_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours5_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours5_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours5_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours5_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
            <li id='cours6' onclick='Cours5_6(), SelectedLi(this.id);'>"+titre_6+"</li>\
            <li id='cours7' onclick='Cours5_7(), SelectedLi(this.id);'>"+titre_7+"</li>\
            <li id='cours8' onclick='Cours5_8(), SelectedLi(this.id);'>"+titre_8+"</li>\
            <li id='cours9' onclick='Cours5_9(), SelectedLi(this.id);'>"+titre_9+"</li>\
            <li id='cours10' onclick='Cours5_10(), SelectedLi(this.id);'>"+titre_10+"</li>\
            <li id='cours11' onclick='Cours5_11(), SelectedLi(this.id);'>"+titre_11+"</li>\
            <li id='cours12' onclick='Cours5_12(), SelectedLi(this.id);'>"+titre_12+"</li>\
            <li id='cours13' onclick='Cours5_13(), SelectedLi(this.id);'>"+titre_13+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "5_structures_arborescentes/html/1_introduction.html";
}

function Cours5_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "5_structures_arborescentes/html/1_introduction.html";
}

function Cours5_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/2_les_arbres_binaires.html";
}

function Cours5_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/3_quelques_mesures.html";
}

function Cours5_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/4_definition_recursive.html";
}

function Cours5_5()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/5_genealogie.html";
}

function Cours5_6()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/6_attributs.html";
}

function Cours5_7()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/7_algo_sur_les_arbres_binaires.html";
}

function Cours5_8()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/pdf/8_fiche_révision_les arbres.pdf";
}

function Cours5_9()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/pdf/9_exercices.pdf";
}

function Cours5_10()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/html/10_abr.html";
}

function Cours5_11()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/pdf/11_fiche_révision_algo_arbres.pdf";
}

function Cours5_12()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "5_structures_arborescentes/pdf/12_exercices.pdf";
}

function Cours5_13()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "5_structures_arborescentes/pdf/13 - Implémentation des arbres binaires de recherche à l'aide de la POO.pdf";
}

/* Cours 6_graphes */

function Cours6()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';

    document.getElementById('titre_principal').innerText = "6 - Graphes";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Graphes";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours6_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = "6_graphes/pdf/1_graphes.pdf";
}

function Cours6_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "6_graphes/pdf/1_graphes.pdf";
}

/* Cours 7_conception_de_bases_de_donnees */

function Cours7()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';
    document.getElementById('titre_principal').innerText = "7 - Conception de bases de données";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Introduction";
    let titre_2 = "2 - Les bases de données";
    let titre_3 = "3 - Exercices";
    let titre_4 = "4 - Système de gestion de bases de données";
    let titre_5 = "5 - Le langage SQL";
    let titre_6 = "6 - TD";
    let titre_7 = "7 - Création d'une base de données";
    let titre_8 = "8 - TP PHP/MySQL";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours7_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours7_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours7_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours7_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours7_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
            <li id='cours6' onclick='Cours7_6(), SelectedLi(this.id);'>"+titre_6+"</li>\
            <li id='cours7' onclick='Cours7_7(), SelectedLi(this.id);'>"+titre_7+"</li>\
            <li id='cours8' onclick='Cours7_8(), SelectedLi(this.id);'>"+titre_8+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/html/1_introduction.html";
}

function Cours7_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/html/1_introduction.html";
}

function Cours7_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/pdf/2_les_bases_de_donnees.pdf";
}

function Cours7_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/pdf/3_exercices.pdf";
}

function Cours7_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/pdf/4_SGBD.pdf";
}

function Cours7_5()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/pdf/5_le_langage_SQL.pdf";
}

function Cours7_6()
{
    document.getElementById('source_iframe').style.display = 'none';
    document.getElementById('div_cours').style.display = 'block';

    document.getElementById('div_cours').innerHTML = 
    "Vous trouverez sur le site <a href='https://isn-icn-ljm.pagesperso-orange.fr/SQL/' target='_blank'>\
    'https://isn-icn-ljm.pagesperso-orange.fr/SQL/'</a> les exercices à réaliser.";
}

function Cours7_7()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/pdf/7_creation_bdd.pdf";
}

function Cours7_8()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "7_conception_de_bases_de_donnees/pdf/8_tp_php_mysql.pdf";
}

/* Cours 8_composants_et_processus */

function Cours8()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';
    document.getElementById('titre_principal').innerText = "8 - Composants et processus";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Composants intégrés d'un système sur puce 1";
    let titre_2 = "2 - Composants intégrés d'un système sur puce 2";
    let titre_3 = "3 - Les processus 1";
    let titre_4 = "4 - Les processus 2";
    let titre_5 = "5 - JSLinux";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours8_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours8_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours8_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours8_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours8_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = "https://www.lecluse.fr/nsi/NSI_T/archi/soc/";
}

function Cours8_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://www.lecluse.fr/nsi/NSI_T/archi/soc/";
}

function Cours8_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://pixees.fr/informatiquelycee/n_site/nsi_term_archi_soc.html";
}

function Cours8_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://pixees.fr/informatiquelycee/n_site/nsi_term_archi_proc.html";
}

function Cours8_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://www.lecluse.fr/nsi/NSI_T/archi/process/";
}

function Cours8_5()
{
    document.getElementById('source_iframe').style.display = 'none';
    document.getElementById('div_cours').style.display = 'block';

    document.getElementById('div_cours').innerHTML = 
    "<a href='https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192' target='_blank'>JSLinux</a>";
}

/* 9_protocoles_de_routage_et_sécurisation_des_communications */

function Cours9()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';
    document.getElementById('titre_principal').innerText = "9 - Protocoles de routage et sécurisation des communications";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Mooc Routage et qualité de service dans l'Internet";
    let titre_2 = "2 - Protocoles de routage";
    let titre_3 = "3 - Cryptographie symétrique et asymétrique - Comprendre le SSL";
    let titre_4 = "4 - Sécurisation des communications - 1";
    let titre_5 = "5 - Sécurisation des communications - 2";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours9_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours9_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours9_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours9_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours9_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = "https://www.youtube.com/embed/e3I4opl8EH4";
}

function Cours9_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://www.youtube.com/embed/e3I4opl8EH4";
}

function Cours9_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "https://pixees.fr/informatiquelycee/n_site/nsi_term_archi_routage.html";
}

function Cours9_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://www.youtube.com/embed/jMIAoAVbcsw";
}

function Cours9_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "https://pixees.fr/informatiquelycee/n_site/nsi_term_archi_secu.html";
}

function Cours9_5()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "9_protocoles_de_routage_et_sécurisation_des_communications/pdf/ra21_lycee_g_t_nsi_securisation-communications.pdf";
}

/* 10_programmes_et_donnees_calculabilite */

function Cours10()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';
    document.getElementById('titre_principal').innerText = "10 - Programmes et données, calculabilité";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Calculabilité et décidabilité 1";
    let titre_2 = "2 - Calculabilité et décidabilité 2";
    let titre_3 = "3 - Une preuve pour le lycée de l’indécidabilité du problème de l’arrêt";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours10_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours10_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours10_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = "https://pixees.fr/informatiquelycee/n_site/nsi_term_calcu.html";
}

function Cours10_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = "https://pixees.fr/informatiquelycee/n_site/nsi_term_calcu.html";
}

function Cours10_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "10_programmes_et_donnees_calculabilite/pdf/RA20_NSI_G_T_calculabilite_1298636.pdf";
}

function Cours10_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "10_programmes_et_donnees_calculabilite/pdf/article2.pdf";
}

/* 11_programmation_avancee */

function Cours11()
{
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';
    document.getElementById('titre_principal').innerText = "11 - Programmation avancée";
    document.getElementById('menu_left').innerHTML = "";

    /* Créer les titre et sous-titres */
    let titre_1 = "1 - Diviser pour régner 1";
    let titre_2 = "2 - Diviser pour régner 2";
    let titre_3 = "3 - Programmation dynamique 1";
    let titre_4 = "4 - Programmation dynamique 2";
    let titre_5 = "5 - Recherche Textuelle 1";
    let titre_6 = "6 - Recherche Textuelle 2";
    let titre_7 = "7 - Recherche Textuelle 3";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours11_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours11_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours11_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours11_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours11_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
            <li id='cours6' onclick='Cours11_6(), SelectedLi(this.id);'>"+titre_6+"</li>\
            <li id='cours7' onclick='Cours11_7(), SelectedLi(this.id);'>"+titre_7+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "https://video.umontpellier.fr/video/3561-hlin401-chap-4-diviser-pour-regner-calcul-de-rang/";
}

function Cours11_1()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "https://video.umontpellier.fr/video/3561-hlin401-chap-4-diviser-pour-regner-calcul-de-rang/";
}

function Cours11_2()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "11_programmation_avancee/pdf/ra21_lycee_g_t_nsi_diviser-pour-regner.pdf";
}

function Cours11_3()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "https://pixees.fr/informatiquelycee/n_site/nsi_term_algo_progdyn.html";
}

function Cours11_4()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "11_programmation_avancee/pdf/RA20_NSI_G_T_progdyn_1298637.pdf";
}

function Cours11_5()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "https://pixees.fr/informatiquelycee/n_site/nsi_term_algo_boyer.html";
}

function Cours11_6()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "11_programmation_avancee/pdf/NSI_Recherche_Textuelle.pdf";
}

function Cours11_7()
{
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    document.getElementById('source_iframe').src = 
    "11_programmation_avancee/pdf/RA20_NSI_G_T_boyer-moore_1298635.pdf";
}

function Cours12() {
    document.getElementById('nav_menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('rtr_btn').style.display = 'block';
    document.getElementById('titre_principal').innerText = "12 - Projets informatiques";

    /* Créer les titres et sous-titres */
    let titre_1 = "1 - Cours de Programmation Orientée Objet (POO) en Python";
    let titre_2 = "2 - Programme de Projets POO";
    let titre_3 = "3 - Cours sur la récursivité en Python";
    let titre_4 = "4 - Vide";
    let titre_5 = "5 - Vide";
    let titre_6 = "6 - Vide";
    let titre_7 = "7 - Vide";

    /* Créer le HTML des titres et sous-titres */
    document.getElementById("menu").innerHTML = 
    "<nav class='menu_hor' id='menu_hor_principal'>\
        <ul id='ul_li'>\
            <li id='cours1' onclick='Cours12_1(), SelectedLi(this.id);'>"+titre_1+"</li>\
            <li id='cours2' onclick='Cours12_2(), SelectedLi(this.id);'>"+titre_2+"</li>\
            <li id='cours3' onclick='Cours12_3(), SelectedLi(this.id);'>"+titre_3+"</li>\
            <li id='cours4' onclick='Cours12_4(), SelectedLi(this.id);'>"+titre_4+"</li>\
            <li id='cours5' onclick='Cours12_5(), SelectedLi(this.id);'>"+titre_5+"</li>\
            <li id='cours6' onclick='Cours12_6(), SelectedLi(this.id);'>"+titre_6+"</li>\
            <li id='cours7' onclick='Cours12_7(), SelectedLi(this.id);'>"+titre_7+"</li>\
        </ul>\
    </nav>";

    document.getElementById('cours1').style.backgroundColor = 'orange';

    var titi1213 = document.getElementById('menu_left');

    // Vérifier si l'élément existe déjà pour éviter les doublons
    var existingToto = document.getElementById('toto1');
    if (existingToto) {
        existingToto.remove();  // Supprimer l'ancien pour recréer le nouveau
    }

    var toto1 = document.createElement('div');
    toto1.id = 'toto1';
    titi1213.appendChild(toto1);

    // Titre et sous-titre
    let titre_1_1 = "1 - Introduction à la Programmation Orientée Objet";
    let titre_2_1 = "2 - Exemple pratique 1 : Approche inspirée des jeux vidéo";
    let titre_3_1 = "3 - Exemple pratique 2 : Approche inspirée de la vie réelle";
    let titre_4_1 = "4 - Conclusion et récapitulation";
    let titre_5_1 = "5 - Mini-Jeu : Aventure en forêt";
    let titre_6_1 = "6 - Simulation de ville";

    toto1.innerHTML = 
    "<nav class='menu_hor' id='menu_hor_cours'>\
        <ul id='ul_li'>\
            <li id='cours1_1' onclick='Cours12_1_1(), SelectedLi(this.id);'>"+titre_1_1+"</li>\
            <li id='cours1_2' onclick='Cours12_1_2(), SelectedLi(this.id);'>"+titre_2_1+"</li>\
            <li id='cours1_3' onclick='Cours12_1_3(), SelectedLi(this.id);'>"+titre_3_1+"</li>\
            <li id='cours1_4' onclick='Cours12_1_4(), SelectedLi(this.id);'>"+titre_4_1+"</li>\
            <li id='cours1_5' onclick='Cours12_1_5(), SelectedLi(this.id);'>"+titre_5_1+"</li>\
            <li id='cours1_6' onclick='Cours12_1_6(), SelectedLi(this.id);'>"+titre_6_1+"</li>\
        </ul>\
    </nav>";

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "12 - Projets informatiques/1 - Introduction à la Programmation Orientée Objet.pdf";
}

function Cours12_1() {
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    var titi56200 = document.getElementById('menu_left');

    // Vérifier si l'élément existe déjà pour éviter les doublons
    var existingToto = document.getElementById('toto1');
    if (existingToto) {
        existingToto.remove();  // Supprimer l'ancien pour recréer le nouveau
    }

    var toto1 = document.createElement('div');
    toto1.id = 'toto1';
    titi56200.appendChild(toto1);

    // Titre et sous-titre
    let titre_1_1 = "1 - Introduction à la Programmation Orientée Objet";
    let titre_2_1 = "2 - Exemple pratique 1 : Approche inspirée des jeux vidéo";
    let titre_3_1 = "3 - Exemple pratique 2 : Approche inspirée de la vie réelle";
    let titre_4_1 = "4 - Conclusion et récapitulation";
    let titre_5_1 = "5 - Mini-Jeu : Aventure en forêt";
    let titre_6_1 = "6 - Simulation de ville";

    toto1.innerHTML = 
    "<nav class='menu_hor' id='menu_hor_cours'>\
        <ul id='ul_li'>\
            <li id='cours1_1' onclick='Cours12_1_1(), SelectedLi(this.id);'>"+titre_1_1+"</li>\
            <li id='cours1_2' onclick='Cours12_1_2(), SelectedLi(this.id);'>"+titre_2_1+"</li>\
            <li id='cours1_3' onclick='Cours12_1_3(), SelectedLi(this.id);'>"+titre_3_1+"</li>\
            <li id='cours1_4' onclick='Cours12_1_4(), SelectedLi(this.id);'>"+titre_4_1+"</li>\
            <li id='cours1_5' onclick='Cours12_1_5(), SelectedLi(this.id);'>"+titre_5_1+"</li>\
            <li id='cours1_6' onclick='Cours12_1_6(), SelectedLi(this.id);'>"+titre_6_1+"</li>\
        </ul>\
    </nav>";

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "12 - Projets informatiques/1 - Introduction à la Programmation Orientée Objet.pdf";
}

function Cours12_1_1() {document.getElementById('source_iframe').src = "12 - Projets informatiques/1 - Introduction à la Programmation Orientée Objet.pdf";}
function Cours12_1_2() {document.getElementById('source_iframe').src = "12 - Projets informatiques/2 - Exemple pratique 1 - Approche inspirée des jeux vidéo.pdf";}
function Cours12_1_3() {document.getElementById('source_iframe').src = "12 - Projets informatiques/3 - Exemple pratique 2 - Approche inspirée de la vie réelle.pdf";}
function Cours12_1_4() {document.getElementById('source_iframe').src = "12 - Projets informatiques/4 - Conclusion et récapitulation.pdf";}
function Cours12_1_5() {document.getElementById('source_iframe').src = "12 - Projets informatiques/5 - Mini-Jeu - Aventure en forêt.pdf";}
function Cours12_1_6() {document.getElementById('source_iframe').src = "12 - Projets informatiques/6 - Simulation de ville.pdf";}

function vide() {
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';
    document.getElementById('menu_left').innerHTML = "";

    document.getElementById('source_iframe').src = 
    "12 - Projets informatiques/Sans nom 1.pdf";
}
function Cours12_2() {
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    var titi56200 = document.getElementById('menu_left');

    // Vérifier si l'élément existe déjà pour éviter les doublons
    var existingToto = document.getElementById('toto1');
    if (existingToto) {
        existingToto.remove();  // Supprimer l'ancien pour recréer le nouveau
    }

    var toto1 = document.createElement('div');
    toto1.id = 'toto1';
    titi56200.appendChild(toto1);

    // Titre et sous-titre
    let titre_1_1 = "1 - Un projet de jeu vidéo";
    let titre_2_1 = "2 - La gestion d'une bibliothèque";

    toto1.innerHTML = 
    "<nav class='menu_hor' id='menu_hor_cours'>\
        <ul id='ul_li'>\
            <li id='cours1_1' onclick='Cours12_2_1(), SelectedLi(this.id);'>"+titre_1_1+"</li>\
            <li id='cours1_2' onclick='Cours12_2_2(), SelectedLi(this.id);'>"+titre_2_1+"</li>\
        </ul>\
    </nav>";

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "12 - Projets informatiques/7 - Un projet de jeu vidéo.pdf";
}
function Cours12_2_1() {document.getElementById('source_iframe').src = "12 - Projets informatiques/7 - Un projet de jeu vidéo.pdf";}
function Cours12_2_2() {document.getElementById('source_iframe').src = "12 - Projets informatiques/8 - La gestion d'une bibliothèque.pdf";}

function Cours12_3() {
    document.getElementById('source_iframe').style.display = 'block';
    document.getElementById('div_cours').style.display = 'none';

    var titi56200 = document.getElementById('menu_left');

    // Vérifier si l'élément existe déjà pour éviter les doublons
    var existingToto = document.getElementById('toto1');
    if (existingToto) {
        existingToto.remove();  // Supprimer l'ancien pour recréer le nouveau
    }

    var toto1 = document.createElement('div');
    toto1.id = 'toto1';
    titi56200.appendChild(toto1);

    // Titre et sous-titre
    let titre_1_1 = "1 - Introduction à la récursivité";
    let titre_2_1 = "2 - Exemple pratique 1 - Approche inspirée des jeux vidéo";
    let titre_3_1 = "3 - Exemple pratique 2 - Approche inspirée de la vie réelle";
    let titre_4_1 = "4 - Conclusion et récapitulation";

    toto1.innerHTML = 
    "<nav class='menu_hor' id='menu_hor_cours'>\
        <ul id='ul_li'>\
            <li id='cours1_1' onclick='Cours12_3_1(), SelectedLi(this.id);'>"+titre_1_1+"</li>\
            <li id='cours1_2' onclick='Cours12_3_2(), SelectedLi(this.id);'>"+titre_2_1+"</li>\
            <li id='cours1_3' onclick='Cours12_3_3(), SelectedLi(this.id);'>"+titre_3_1+"</li>\
            <li id='cours1_4' onclick='Cours12_3_4(), SelectedLi(this.id);'>"+titre_4_1+"</li>\
        </ul>\
    </nav>";

    /* On met la première page directement sur le premier cours */
    document.getElementById('source_iframe').src = 
    "12 - Projets informatiques/9 - Introduction à la récursivité.pdf";
}
function Cours12_3_1() {document.getElementById('source_iframe').src = "12 - Projets informatiques/9 - Introduction à la récursivité.pdf";}
function Cours12_3_2() {document.getElementById('source_iframe').src = "12 - Projets informatiques/10 - Exemple pratique 1 - Approche inspirée des jeux vidéo.pdf";}
function Cours12_3_3() {document.getElementById('source_iframe').src = "12 - Projets informatiques/11 - Exemple pratique 2 - Approche inspirée de la vie réelle.pdf";}
function Cours12_3_4() {document.getElementById('source_iframe').src = "12 - Projets informatiques/12 - Conclusion et récapitulation.pdf";}

function Cours12_4() {vide();}
function Cours12_5() {vide();}
function Cours12_6() {vide();}
function Cours12_7() {vide();}

function SelectedLi(id) {
    // Réinitialise toutes les couleurs des éléments
    let lis = document.getElementById('ul_li').getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = '';  // Supprime la couleur de fond
    }

    // Applique la couleur à l'élément sélectionné
    document.getElementById(id).style.backgroundColor = 'orange';
}

/* Pour faire un effet de selection sur les menus de cours */

function SelectedLi(mon_id)
{
    let ul_li = document.getElementById('ul_li');
    let list = ul_li.getElementsByTagName('li');

    for(var i = 0; i < list.length; i++)
    {
        if(mon_id == list[i].id)
        {
            document.getElementById(mon_id).style.backgroundColor = 'orange';
        }
        else
        {
            document.getElementById(list[i].id).style.backgroundColor = 'cornflowerblue';
        }
    }
}