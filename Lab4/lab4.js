//1.
const numero = prompt("Ingresa un numero");
console.log(numero);

function tabla (){
    let tabla = "<table>";
    tabla += "<tr><td>Numero</td>"+"<td>n^2</td>"+"<td>n^2</td></tr>";
    for (let i = 1; i <= numero; i++){
        tabla += "<tr>";
        tabla += "<td>"+i+"</td>"+"<td>"+ i*i +"</td>"+"<td>"+ i*i*i +"</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    return tabla;
}
document.getElementById("res1").innerHTML = tabla();

//2.
let value1 = Math.floor(Math.random() * 10) + 1;
let value2 = Math.floor(Math.random() * 10) + 1;
const res = prompt("Cuanto es "+ value1 +" + "+ value2+" ?");
console.log(res);

if (value1 + value2 == res){
    alert("Es correcto");
} else {
    alert("Es falso")
}

//3.
function contador (arreglo){
    let positivo = 0;
    let negativo = 0;
    let ceros = 0;

    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] > 0){
            positivo++;
        }
        else if (arreglo[i] < 0){
            negativo++
        }
        else {
            ceros++;
        }
    }
    alert("Positivos: "+ positivo +" Negativos: "+ negativo +" Ceros: "+ ceros)
}
const arr = [-2,-58,0,0,0,0,1,2,3,5,6,7,8];
contador(arr);

//4. 
function promedios(numArray){
    var avg = [];
    for (let i = 0; i < numArray.length; i++){
        avg.push(numArray[i].reduce(function(x,y) {return x + y;}, 0)/ numArray[i].length);
    }
    return avg;
}
var items = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
let answer = promedios(items);
document.write("El promedio de cada renglon es: "+ answer);

//5.
function inverso (n){
    n = n + "";
	return n.split("").reverse().join("");
}
let num = 2022;
document.write(" El numero inverso es: "+ inverso(num));


