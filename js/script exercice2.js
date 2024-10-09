var obj_btn_white=document.getElementById("white");
var obj_btn_blue=document.getElementById("blue");
var obj_btn_black=document.getElementById("black");
var obj_btn_red=document.getElementById("red");
var obj_btn_green=document.getElementById("green");
var obj_article=document.getElementById("boite");


obj_btn_white.addEventListener("click",changer_white);
obj_btn_blue.addEventListener("click",changer_blue);
obj_btn_black.addEventListener("click",changer_black);
obj_btn_red.addEventListener("click",changer_red);
obj_btn_green.addEventListener("click",changer_green);


function changer_white()
{
    obj_article.style.backgroundColor="white";
    obj_btn_white.style.border="10px ridge silver";
    obj_btn_blue.style.border="10px outset silver";
    obj_btn_black.style.border="10px outset silver";
    obj_btn_red.style.border="10px outset silver";
    obj_btn_green.style.border="10px outset silver";
}


function changer_blue()
{
    obj_article.style.backgroundColor="blue";
    obj_btn_white.style.border="10px outset silver";
    obj_btn_blue.style.border="10px ridge silver";
    obj_btn_black.style.border="10px outset silver";
    obj_btn_red.style.border="10px outset silver";
    obj_btn_green.style.border="10px outset silver";
}


function changer_black()
{
    obj_article.style.backgroundColor="black";
    obj_btn_white.style.border="10px outset silver";
    obj_btn_blue.style.border="10px outset silver";
    obj_btn_black.style.border="10px ridge silver";
    obj_btn_red.style.border="10px outset silver";
    obj_btn_green.style.border="10px outset silver";
}


function changer_red()
{
    obj_article.style.backgroundColor="red";
    obj_btn_white.style.border="10px outset silver";
    obj_btn_blue.style.border="10px outset silver";
    obj_btn_black.style.border="10px outset silver";
    obj_btn_red.style.border="10px ridge silver";
    obj_btn_green.style.border="10px outset silver";
}


function changer_green()
{
    obj_article.style.backgroundColor="green";
    obj_btn_white.style.border="10px ouset silver";
    obj_btn_blue.style.border="10px outset silver";
    obj_btn_black.style.border="10px outset silver";
    obj_btn_red.style.border="10px outset silver";
    obj_btn_green.style.border="10px ridge silver";
}

