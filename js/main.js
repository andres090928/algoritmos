function suma() {

    // Explicacion algoritmo
    alert("Algoritmo que realiza una suma entre 2 valores ingresados por el usuario")

    // Declaracion de variables necesesarias
    let a=0;
    let b=0;
    let s=0;

    //Captura los datos 
    a=parseInt(prompt("Ingrese el primer valor"));
    b=parseInt(prompt("Ingrese el segundo valor"));
    // Realizamos la operacion
    s=a+b;
    // Damos el resultado o respuesta
    alert("El resultado de l suma es:" + s)
}
function opBasicas() {
    // Explicacion algoritmo
    alert("Algoritmo que realiza las operaciones basicas entre 2 valores ingresados por el usuario")

    // Declaracion de variables necesesarias
    let a=0;
    let b=0;
    let s=0;
    let r=0;
    let m=0;
    let d=0;

    //Captura los datos 
    a=parseInt(prompt("Ingrese el primer valor"));
    b=parseInt(prompt("Ingrese el segundo valor"));
    // Realizamos la suma
    s=a+b;
    r=a-b;
    m=a*b;
    d=a/b;
    // Damos el resultado o respuesta
    alert("El resultado de l suma es:" + s);
    alert("El resultado de la resta es:" + r);
    alert("El resultado de la multiplicacion es:" + m)
    alert("El resultado de la division es:" + d)
}
function cuadrado(){
    alert("Algoritmo que calcula el cuadrado de un numero  ingresado por el usuario");

    // Declaracion de variables necesesarias
    let n,c =0;

    n=parseInt(prompt("Ingrese el primer valor"));

    // Realizamos la suma
    c=n*n;
    // Damos el resultado o respuesta
    alert("El resultado de la operacion es: "+c);

}

function triangulo(){
    alert("Algoritmo que calcula el area del triangulo ingresado por el usuario");

    let z,x,y =0;
    z=parseInt(prompt("Ingrese la base del triangulo "));
    x=parseInt(prompt("Ingrese la altura del triangulo"));
    y=((z*x)/2);
    alert("el area del triangulo es:"+ y);
}

function conversion(){
    alert("Algoritmo que la conversion que determine las pulgadas, los kilometros, y los milimetros de un valor ingresado por el usuario dado en metros"); 

    let m,k,l,p =0;

    m=parseInt(prompt("Ingrese el valor a convertir en metros "));

    k= m/1000;
    l= m*1000;
    p= m*39.37;

    alert("El resultado de la conversión a kilometros es: " +k);
    alert("El resultado de la conversión a milimetros es: " + l);
    alert("El resultado de la conversión a pulgadas es: " + p);
    
}

function mayor(){
     alert("Algoritmo que determina el mayor de dos numeros ingresados");

     let N1, N2 =0;

     N1=parseInt(prompt("Ingrese el primer valor"));
     N2=parseInt(prompt("Ingrese el segundo valor"));

     if(N1==N2){
        alert("Los valores ingresados son iguales, no sea idiota");
     } else if(N1>N2){
        alert(N1 + " es mayor que " + N2);
     } else {
        alert(N2 + " es mayor que " + N1);
     }
}

function menor(){
    alert("Algoritmo que determina el menor de tres numeros ingresados");

    let N1, N2, N3 =0;

    N1=parseInt(prompt("Ingrese el primer valor"));
    N2=parseInt(prompt("Ingrese el segundo valor"));
    N3=parseInt(prompt("Ingrese el tercer valor"));

    if((N1==N2) &&  (N1==N3) ){
        alert("Los valores ingresados son iguales, no sea idiota");
    } else if((N1<N2) &&(N1<N3)){
        alert(N1 + " Es el numero menor que "+ N2 + " y " + N3)
    }else if((N2<N1) &&(N2<N3)){
        alert(N2 + " Es el numero menor que "+ N1 + " y " + N3)
    }else if((N3<N1) &&(N3<N2)){
        alert(N3 + " Es el numero menor que "+ N1 + " y " + N2)
    }
}

function promedio(){
    alert("Algoritmo que determine si un alumno aprobo o reprobo la materia algoritmia de 7 notas entre 1 a 10");

    let a,b,c,d,e,f,g,h =0;

    a=parseInt(prompt("Ingrese la primera nota"));
    b=parseInt(prompt("Ingrese la segunda nota"));
    c=parseInt(prompt("Ingrese la tercera nota"));
    d=parseInt(prompt("Ingrese la cuarta nota"));
    e=parseInt(prompt("Ingrese la quinta nota"));
    f=parseInt(prompt("Ingrese la sexta nota"));
    g=parseInt(prompt("Ingrese la septima nota"));
    
    h=((a+b+c+d+e+f+g)/7);

    if ((h==6,1) && (h>6.1)){
        alert("aprobo la materia con: "+h+" felicitaciones")

    }else if(h<6,1){
        alert("reprobo la materia con: " +h+ " que bruto estudie vago")
    }
}

function descuento(){
   alert("Algoritmo para una fruteria  que le diga al vendedor cuanto pagar un cliente teniendo en cuenta de los descuentos.") 

   let p,k,t,d1,d2,d3 =0; 
   
   p=parseInt(prompt("Ingrese el precio de la fruta"));
   k=parseInt(prompt("Ingrese los kilos comprados"));
   
   t=p*k;
   d1= (t-(t*0.1));
   d2= (t-(t*0.15));
   d3= (t-(t*0.2));

   if ((k==0) && (k<=2)){
        alert("No tiene descuento en su compra, el precio total de su compra es: " + t);
   } else if ((k>=3) && (k<=5)){
        alert("El descuento es del 10%, el precio total de su compra con el descuento es de:  " + d1)
   } else if ((k>=6) && (k<=10)){
        alert("El descuento es del 15%, el precio total de su compra con el descuento es de: " + d2)
   } else if (k>= 11){
        alert("El descuento es del 20%, el precio total de su compra con el descuento es de: " + d3)
   }
}

function salario() {
    alert("Algoritmo para calcular el salario semanal de un obrero.");

    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));

    let salarioPorHora = 12500;
    let salarioPorHoraExtra = 18000;
    let horasNormales = 40;
    let salario = 0;
    let salarioextras= 0;

    salario= horasTrabajadas*salarioPorHora;
    salarioextras= horasNormales*salarioPorHora +(horasTrabajadas - horasNormales) * salarioPorHoraExtra;

    if(horasTrabajadas<= horasNormales){
        alert("Su salario semanal es de: " + salario)
    } else {
        alert("Su salario semanal es de: " + salarioextras)
    }



}