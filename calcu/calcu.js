window.onload= funtion ();

const nomDiv=div=>document.getElementById(div);
const CalcuSuma=()=>{
    let Numerador1 = nomDiv("Numerador 1").value;
    let Denominador1 = nomDiv("Denominador 1").value;
    let Numerador2= nomDiv("Numerador 2").value;
    let Denominador2 = nomDiv("Denominador 2").value;
if (Numerador1.length===0|Numerador2.length===0||Denominador1.length===0||Denominador2.length===0)
{
    alert("porfavor completar las fracciones");
} else{
    const Sumar=res1/res2;
    if(Denominador1=Denominador2){ 
        res1=(Numerador1+Numerador2);
        res2=(Denominador1);
    nomDiv("Respuesta").innerHTML="La suma es "+res1+ "/" +res2;
     } else {
         (Denominador1!=Denominador2)
       res1=(Numerador1*Denominador2) + (Denominador2*Numerador2);
       res2=(Denominador1*Denominador2);
       nomDiv("Respuesta").innerHTML="La suma es "+res1+ "/" +res2;
    }
}};
nonDiv("Sumar").addEventListener("click",event =>{
    CalcuSuma();
});
