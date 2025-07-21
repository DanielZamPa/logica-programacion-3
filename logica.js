const prompt = require("prompt-sync")();

let num = []

num.push(prompt("Ingrese un numero: "));
num.push(prompt("Ingrese otro numero: "));
num.push(prompt("Ingrese un tercer numero: "));

let save = 0;

function mayor(){
    for (let i=0; i<3; i++){
        if (num[i]<num[i+1]){
            save = num[i];
            num[i] = num[i+1];
            num[i+1]=save;
        }
        else if(){
            
        }       
    }
    console.log(num);    
}

mayor();

