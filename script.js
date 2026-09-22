let saldopenger = 0
let inntektpenger = 0
let utgiftpenger = 0

const inputinntektnavn = document.getElementById("inputinntektnavn")
const inputinntektpenger = document.getElementById("inputinntektpenger")

const inpututgiftnavn = document.getElementById("inpututgiftnavn")
const inpututgiftpenger = document.getElementById("inpututgiftpenger")

const listinntekt = document.getElementById("listinntekt")
const listinntektpenger = document.getElementById("listinntektpenger")

const listutgift = document.getElementById("listutgift")
const listutgiftpenger = document.getElementById("listutgiftpenger")

const saldo = document.getElementById("saldo")

function leggtilinntekt(){
    inntektpenger = inntektpenger + Number(inputinntektpenger.value);   

    const li = document.createElement("li");
    li.textContent = inputinntektnavn.value
    listinntekt.appendChild(li);

    const lito = document.createElement("li");
    lito.textContent = inputinntektpenger.value
    listinntektpenger.appendChild(lito);

    saldopenger = inntektpenger - utgiftpenger;
    saldo.textContent = saldopenger;

    if(saldopenger<0){
        saldo.style.color = "red";
    }

    inputinntektpenger.value = "";
    inputinntektnavn.value = "";

    if(saldopenger<0){
        saldo.style.color = "red";
    }
    else{
        saldo.style.color = "#08d13e"
    }
}

function leggtilutgift(){
    utgiftpenger = utgiftpenger + Number(inpututgiftpenger.value);
    
    const litre = document.createElement("li");
    litre.textContent = inpututgiftnavn.value
    listutgift.appendChild(litre);

    const lifire = document.createElement("li");
    lifire.textContent = inpututgiftpenger.value
    listutgiftpenger.appendChild(lifire);

    saldopenger = inntektpenger - utgiftpenger;
    saldo.textContent = saldopenger;

    if(saldopenger<0){
        saldo.style.color = "red";
    }
    else{
        saldo.style.color = "#08d13e"
    }

    inpututgiftnavn.value = "";
    inpututgiftpenger.value = "";
}

