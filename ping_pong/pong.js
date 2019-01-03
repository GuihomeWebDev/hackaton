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
    rak_left= height/2-30;
    rak_right=height/2-30;
    direction = random([1, 2, 3, 4]); 
    ballX = width/2;
    ballY = height/2;  
    J1 = 0;
    J2 = 0;                                             
}



/**
 * Fonction appelée automatiquement à intervalles de temps réguliers (tous les x millisecondes).
 */
function draw() {
    background(0); // Ne pas enlever (sinon, c'est tout blanc :))
    fill(255);  // Ne pas enlever (pour afficher le texte en blanc)

    width; // Cette variable contient la largeur du canvas.
    height; // Cette variable contient la hauteur du cavans.
    text(J1, 10, 10);
    text(J2, 590, 10);

// rebound vertical
    if(direction === 1 && ballY <=0){
        direction =3;
    
}
    if(direction === 2 && ballY <=0){
        direction =4;
    
}
    if(direction === 3 && ballY >=height){
        direction =1;
    
}
    if(direction === 4 && ballY >=height){
        direction =2;
    
}

    //exit et GOAL!!

    if(ballX <=0){
        J2 ++;
        ballX = width/2;
        ballY = height/2;
}
    
    if(ballX >=width){
        J1 ++;
        ballX = width/2;
        ballY = height/2;
}


       // move the ball
    if(direction ===1){
    ballY -= 5;
    ballX -=5;
}
    if(direction ===2){
    ballY -= 5;
    ballX +=5;
}
    if(direction ===3){
    ballY += 5;
    ballX -=5;
}
    if(direction ===4){
    ballY += 5;
    ballX +=5;
}


    // draw
    ellipse(ballX, ballY, 10);
    rect(0, rak_left, 10, 60);
    rect(width-10, rak_right, 10, 60);

    
}



/**
 * Fonction appelée automatiquement quand on appuie sur une touche du clavier.
 */
function keyPressed() {
    key; // Cette variable contient la lettre tapée au clavier EN MAJUSCULE.
    
   if(key==="A"){
        rak_left -=10;
}
    if (key ==="Q"){
        rak_left +=10;
}  
if(key==="P"){
        rak_right -=10;
}
    if (key ==="M"){
        rak_right +=10;
}            
}

