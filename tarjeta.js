"use strict";
function verificarNumeroTarjeta(numTar){
    console.log("Antes de invertir: " + numTar);
    numTar=numTar.toString();
    numTar=numTar.split('');
    numTar=numTar.reverse();
    numTar=numTar.join('');
    console.log("Después de invertir: " + numTar);
    let num=0;
    let suma=0;

    for (let i = 0; i < numTar.length; i++) {
        /*Cojo el segundo número del final y los pares en relación a él, por lo que convierto 
          su posición en par*/
        if((i+1)%2==0){ 
            num=parseInt(numTar[i])*2;
            if(num>9){
                // for (let j = 0; j < 2; j++) {
                //     suma+=parseInt(num.toString().charAt(j));
                // }
                suma+=Math.floor(num/10)+num%10; //Mucho mejor así
            }else{
                suma+=num;
            }
        }else{ //Los impares
            suma+=parseInt(numTar[i]);
        }
    }    

    if(suma%10==0){
        return true;
    }else{
        return false;
    }
    
}
//4539148803436467 Número válido
if(verificarNumeroTarjeta(376741169881005)){
    console.log("El número de tarjeta es válido");
}else{
    console.log("El número de tarjeta NO es válido");
}
