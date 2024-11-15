let i; let nombre, nota1, nota2, pro;
let suma;
for(i=1; i<=3; i=i+1)
{
    nombre=prompt(" alumno ingrese su nombre :");
    nota1=parseFloat(prompt(" alumno ingrese su nota examen 1 :"));
    nota2=parseFloat(prompt(" alumno ingrese su nota examen 2 :"));
    pro= (nota1+nota2)/2;
    document.write("<br>"+ "("+ i +").- " + "Mi nombre es : "+nombre+"promedio es :  "+pro);
}