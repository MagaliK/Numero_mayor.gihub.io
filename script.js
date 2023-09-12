let numeroMayor;


function cualEsMayor(num1,num2,num3,numeroManager) {
    if(num1>num2){
        numeroMayor=num1;
    }else if(num2>num3){
        numeroMayor=num2;
    }else {
        numeroMayor=num3
    }
    return numeroMayor;
}
console.log("El número mayor es: " + cualEsMayor(1,2,3))




