//cambiar modo oscuro
function cambiarModo() { 
    const noche = document.getElementById("calcmarco");
    
    if (noche.className == "marco") {
        noche.classList.toggle("oscuro");
        noche.classList.remove("marco")
    }
    else{
        (noche.className == "oscuro") 
        noche.classList.toggle("marco");
        noche.classList.remove("oscuro")
    }
}
//calculadora
function numeros(valor) {
    document.getElementById("result").value += valor;
}
function operacion() {
    let opera = document.getElementById("result").value;
    if (opera == 0) {
        document.getElementById("result").value = "sin operacion";
    }
    else {
        document.getElementById("result").value = eval(opera);
    }
}

function resetear() {
    document.getElementById("result").value = " ";
}



