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
    function scroll1() {
        let id = null;

        document.getElementById('img1').style.opacity = 0;
        setTimeout(fade, 200)
        function fade(){
        document.getElementById('img1').style.transition = "opacity 0.5s";
        document.getElementById('img1').style.opacity = 1;
        }
        
        const elem = document.getElementById("img1");
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