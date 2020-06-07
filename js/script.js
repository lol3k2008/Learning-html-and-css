const h1 = document.querySelector(`.h1`);
const par = document.querySelectorAll('p')
document.addEventListener('DOMContentLoaded', function(){
    //czekamy az przegladarka wczyta caly document
    h1.classList.add('active');

    function addShadow(){  //fucnkcja o nazwie addShadow


       if(window.scrollY >= 1 ){  
           h1.classList.add(`active`);
       }else{
           h1.classList.remove(`active`);
       
        }
   }
   
   window.addEventListener('scroll', addShadow)
   //Nasluchiwanie documentu na scroll, podczas scroll'a uruchomienie funckji addShadow
   });
   
