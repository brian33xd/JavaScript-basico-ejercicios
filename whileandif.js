let a= 1;
let b= 1;
let max= 10000000;
while(a < max){
    console.log(a)
    a= a*b++;
    if (a >3628799 )
    {
    
        console.log("El resultado final es:",a)
        break;
    }
    
}