/* koala reveal. ps.experience trial */

function preload(){
    uxFill(255,0);
    uxNoStroke();
    uxFill();
    
    a = uxRect(300,100, 50, 50).uxEvent('click',one);
    b = uxRect(600, 400, 50, 50).uxEvent('click', two);
    c = uxRect(200, 250, 50, 50).uxEvent('click', three);
    d = uxRect(300, 400, 50, 50).uxEvent('click', four);
}
function setup(){
    createCanvas(700,700);
    background (60, 100, 37);
    uxNoStroke();
    a1 = 255;
    a2 = 0;
    a3 = 0;
    a4 = 0;
}

function ellb(){
    uxFill(164, 98, 67);
}
function db(){
    uxFill(102, 55,37) ;
}
function wk(){
    uxFill(255,255,245 );
}
function lk(){
    uxFill(179, 171, 169,);
}
function mk(){
    uxFill(118, 113, 112);
}
function dk(){
    uxFill(44,37,31);
}
function nose(){
    uxFill(76, 60, 54);
}


function draw(){
    
}

function one(){
    lb();
}

function two(){
    wk();
}
function three(){
    mk();
}
function four(){
    lk();
    uxRect(250, 50, 50, 50).uxEvent('click', five);
}
function five(){
    lk();
    uxRect(100, 100, 50, 50).uxEvent('click', six);
}
function six(){
    mk();
    uxRect(450, 150, 50, 50).uxEvent('click', seven);
}
function seven(){
    lk();
    uxRect(450, 300, 50, 50).uxEvent('click', eight);
}
function eight(){
    lb();
    uxRect(600, 100, 50, 50).uxEvent('click', nine);
}
function nine(){
    mk();
    uxRect(150, 350, 50, 50).uxEvent('click', ten);
}
function ten(){
    mk();
    uxRect(450, 500, 50, 50).uxEvent('click', eleven);
}
function eleven(){
    lk();
    uxRect(500, 400, 50, 50).uxEvent('click', twelve);
}
function twelve(){
    db();
    uxRect(600, 150, 50, 50).uxEvent('click', thirteen);
}
function thirteen(){
    wk();
    uxRect(250, 350, 50, 50).uxEvent('click', fourteen);
}
function fourteen(){
    wk();
    uxRect(150, 250, 50, 50).uxEvent('click', fifteen);
}
function fifteen(){
    lk();
    uxRect(400, 100, 50, 50).uxEvent('click', sixteen);
}
function sixteen(){
    mk();
    uxRect(150, 50, 50, 50).uxEvent('click', seventeen);
}
function seventeen(){
    lb();
    uxRect(550, 550, 50, 50).uxEvent('click', eighteen);
}
function eighteen(){
    db();
    uxRect(550, 250, 50, 50).uxEvent('click', nineteen);
}
function nineteen(){
    mk();
    uxRect(300, 500, 50, 50).uxEvent('click', twenty);
}
function twenty(){

}