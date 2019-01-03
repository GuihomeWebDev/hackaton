/**
 * Fonctions nécessaires et connues par les fonctions setup() draw() et keyPressed() :
 *
 * Nom                                                                                                 | Description
 * ====================================================================================================================================================
 * ellipse(position_horizontale, position_verticale, taille_point)"                                    | Dessine un point
 * ----------------------------------------------------------------------------------------------------------------------------------------------------
 * rect(position_horizontale_coin_haut_gauche, position_verticale_coin_haut_gauche, largeur, hauteur)" | Dessine un rectangle
 * ----------------------------------------------------------------------------------------------------------------------------------------------------
 * text(texte, position_horizontale, position_verticale)"                                              | Ecrit du texte
 * ----------------------------------------------------------------------------------------------------------------------------------------------------
 * random([premiere_valeur, deuxieme_valeur, ...])                                                     | Retoune une valeur au hasard parmis plusieurs
 * ----------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * Pour les connaitre les autres fonctions, consulter "https://p5js.org/reference".
 */



/**
 * Fonction appelée automatiquement une fois au chargement de la page.
 * Les variables qui y sont initialisées sont connu par les fonctions draw() et keyPressed().
 */
function setup() {
    createCanvas(600, 400); // Ne pas enlever (sinon, c'est tout petit :))

    width; // Cette variable contient la largeur du canvas.
    height; // Cette variable contient la hauteur du cavans.
   
}



/**
 * Fonction appelée automatiquement à intervalles de temps réguliers (tous les x millisecondes).
 */
function draw() {
    background(0); // Ne pas enlever (sinon, c'est tout blanc :))
    fill(255);  // Ne pas enlever (pour afficher le texte en blanc)

    width; // Cette variable contient la largeur du canvas.
    height; // Cette variable contient la hauteur du cavans.
    text('0', 10, 10);
    text('0', 590, 10);
    ellipse(width/2, height/2, 10);
}



/**
 * Fonction appelée automatiquement quand on appuie sur une touche du clavier.
 */
function keyPressed() {
    key; // Cette variable contient la lettre tapée au clavier EN MAJUSCULE.

    // Ton code ici
}

