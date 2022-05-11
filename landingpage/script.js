//========ÁREA DE VARIÁVEIS======================================
var img = 0;  //var que indicar por qual imagem começar
var timer = 6000; //delay da troca de imagens
let repete; //var para repetir a timing

//===============================================================
//ALTERAR A IMAGEM SOZINHO APÓS O LOAD DA PÁGINA
function timing(){
    img++
    if(img == 3){
        img = 0;
    }
switche()
fadein() //inicia o fade
}
repete = setInterval(timing, timer)   //repetição da func timing

//===============================================================
//FUNÇÕES DO ONCLICK DAS SETAS
function car0(){   //caso clique na seta pra esquerda
    clearInterval(repete) //reseta o timer da var repete
    setTimeout(repete = setInterval(timing, timer), timer) //reseta a var de repetir
    fadein()  //fadezinho
    img--          //indica para voltar para a imagem anterior
    if(img == -1){
        img = 2;
    }
    switche()  //chama a func switche

}

function car1(){   //caso clique na seta pra direita
    clearInterval(repete)  //reseta o timer da var repete
    setTimeout(repete = setInterval(timing, timer), timer) //reseta a var de repetir
    fadein()
    img++          //indica para voltar para a imagem anterior
    if(img == 3){
        img = 0;
    }
    switche()  //chama a func switche
}

//===============================================================
//FUNÇÃO PARA INDICAR CADA VALOR DA VAR IMG
function switche(){ 
    switch(img){
        case 0:   //caso img == 0, imagem2...
            document.getElementById("carroimg").src = "imgcar2.jpeg";
            document.getElementById("pontos").src = "pontos dir.png";
        break;
        case 1:
            document.getElementById("carroimg").src = "imgcar1.jpg";
            document.getElementById("pontos").src = "pontos esq.png";
        break;
        case 2:
            document.getElementById("carroimg").src = "imgcar3.jpg";
            document.getElementById("pontos").src = "pontos meio.png";
        break;
    }
}

//===============================================================
//ANIMAÇÃO DE FADEIN FADEOUT
function fadein(){
    setTimeout(fade, timer - 1000)  //delayzin do timer - tempo do fade
    function fade(){
    document.getElementById('carroimg').style.transition = "opacity 1.5s"; //demora pro fade chegar em 0
     document.getElementById('carroimg').style.opacity = 0;
    setTimeout(fadeout, 1500)  //delaysinho do tempo q o fade fica
    }
}
function fadeout(){
    document.getElementById('carroimg').style.transition = "opacity 1.5s"; //demora pro fade chegar em 1
    document.getElementById('carroimg').style.opacity = 1;
}