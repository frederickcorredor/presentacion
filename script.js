var zona1=document.getElementById('inicio'),
    zona2=document.getElementById('DesarrolloWeb'),
    zona3=document.getElementById('RedesSociales'),
    boton1=document.getElementById('binicio'),
    boton2=document.getElementById('bdesarrollo'),
    boton3=document.getElementById('bredes');

function mos1(){
    zona1.style.display="block"
    zona2.style.display="none"
    zona3.style.display="none"
    
}

function mos2(){
    zona1.style.display="none"
    zona2.style.display="block"
    zona3.style.display="none"
    
}

function mos3(){
    zona1.style.display="none"
    zona3.style.display="block"
    zona2.style.display="none"
    
}

boton1.addEventListener("click",mos1,true)

boton2.addEventListener("click",mos2,true)

boton3.addEventListener("click",mos3,true)