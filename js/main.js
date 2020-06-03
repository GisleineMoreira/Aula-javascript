
/*var nome = "Gisleine Moreira";
var idade = 29;
var idade2 = 10;
var frase = "japão é o melhor time!";
alert(nome + "tem" + idade + "anos");

alert(idade + idade2);
console.log("oie");
console.log(name);
console.log(idade + idade2);

console.log(frase.replace("japão", "Brasil"));
alert(frase.replace("japão", "brasil"));
console.log(frase.toUpperCase()) */


/*var fruta ={nome: "maça", cor:"vermelha" }
console.log(fruta.nome);
alert(fruta.cor);*/

/*var lista =["maça","pera","goiaba"];
lista.push("uva")

lista.pop(); ---retira elementos da lista

console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - ")); */


/*var frutas = [{nome: "maça", cor:"vermelha" },{nome: "pera", cor:"azul"}]
console.log(frutas);
alert(frutas[1].nome);*/ 



//var idade = 18;
/*var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de iade");
}else{
    alert("menor de idade");
};*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};*/



/*var count;
for(count=0; count<= 5; count++){
    alert(count);
};*/

/*var d = new Date();
alert(d.getMinutes());
alert(d.getDay());*/

//var idade = 18;
//if(idade>= 18)

/*function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("vai Japão", "Japão","Brasil"));*/

//function soma(n1,n2){
  //  return n1 + n2;}

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

function load(){
    alert("Página carregada")
}



function clicou(){
  document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
}
function redirecionar(){
    window.open("file:///C:/NLW/create-point.html");  //--abre em outra janela
 // window.location.href = "file:///C:/NLW/create-point.html";   --abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML ="obrigado por voltar"
}
function voltar(elemento){
    elemento.innerHTML = "valeu volte sempre"
   // document.getElementById("mousemove").innerHTML = "passe o mouse";

}

function funcaoChange(elemento){
    console.log(elemento.value);
}