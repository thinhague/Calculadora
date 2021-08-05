
function numero(num){
    let numero = document.getElementById("resultado").innerHTML;
    if(numero == 0){
        
        document.getElementById("resultado").innerHTML = num;
    }else{
        document.getElementById("resultado").innerHTML = numero + num;
    
     }
   
    
    
}

function clean(){
     document.getElementById("resultado").innerHTML = '';
    
}
function calcular(){
    let numero = document.getElementById("resultado").innerHTML;
    if(numero){
        document.getElementById("resultado").innerHTML = eval(numero)
    } 
}


