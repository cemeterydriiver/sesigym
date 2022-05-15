//========ÁREA DE VARIÁVEIS======================================
var img = 0; 
var timer = 6000; 
let repete; 

//===============================================================
//ALTERAR A IMAGEM SOZINHO APÓS O LOAD DA PÁGINA
function timing(){
    img++
    if(img == 3){
        img = 0;
    }
switche()
fadein() 
}
repete = setInterval(timing, timer)  

//===============================================================
//FUNÇÕES DO ONCLICK DAS SETAS
function car0(){   
    clearInterval(repete) 
    setTimeout(repete = setInterval(timing, timer), timer) 
    img--          
    if(img == -1){
        img = 2;
    }
    switche()  

}

function car1(){  
    clearInterval(repete)  
    setTimeout(repete = setInterval(timing, timer), timer)
    img++         
    if(img == 3){
        img = 0;
    }
    switche()  
}

//===============================================================
//FUNÇÃO PARA INDICAR CADA VALOR DA VAR IMG
function switche(){ 
    switch(img){
        case 0:   
            document.getElementById("carroimg").src = "imgcar2.jpeg";
        
        break;
        case 1:
            document.getElementById("carroimg").src = "imgcar1.jpg";
           
        break;
        case 2:
            document.getElementById("carroimg").src = "imgcar3.jpg";
          
        break;
    }
}

/*ANIMAÇÃO DE FADEIN FADEOUT
function fadein(){
    setTimeout(fade, timer - 100)  //delayzin do timer - tempo do fade
    function fade(){
    document.getElementById('carroimg').style.transition = "opacity 3.5s"; //demora pro fade chegar em 0
     document.getElementById('carroimg').style.opacity = 0;
    setTimeout(fadeout, 1500)  //delaysinho do tempo q o fade fica
    }
}
function fadeout(){
    document.getElementById('carroimg').style.transition = "opacity 3.5s"; //demora pro fade chegar em 1
    document.getElementById('carroimg').style.opacity = 1;
}
 */
//scroll
function scroll(){
    const anim = page.getKeyframeAnimationWithName('slidein');
document.getElementById("img1").style. = "slidein 3s";
}


