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

//===============================================================
//ANIMAÇÃO DE SCROLLZIN
var pos = window.pageYOffset; //n tá funcionando ainda
document.getElementById("pos").innerHTML = pos;
var img2 = document.getElementById('img1');  //o 2 é só pq tem outra var img
function scroll1() {
    if(pos >= 100){  //em teste tbm
    img2 = document.getElementById("img1");
    scroll();
    }
}
function scroll2() {
    img2 = document.getElementById("img2");
    scroll();
}
function scroll3() {
    img2 = document.getElementById("img3");
    scroll();
}
function scroll4() {
    img2 = document.getElementById("img4");
    scroll();
}
function scroll5() {
    img2 = document.getElementById("img5");
    scroll();
}
function scroll6() {
    img2 = document.getElementById("img6");
    scroll();
}    
function scroll7() {
    img2 = document.getElementById("img7");
    scroll();
}
    function scroll() {
        let id = null;

        img2.style.opacity = 0;
        setTimeout(fade, 200)
        function fade(){
        img2.style.transition = "opacity 0.5s";
        img2.style.opacity = 1;
        }
        
        const elem = img2;
        let pos = -50;

        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
          if (pos == 5) {
            clearInterval(id);
          } else {
            pos++;
            elem.style.right = pos + '%';
          }
        }
      }