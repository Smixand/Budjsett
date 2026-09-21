let inntekt = []
let inntektpenger = []
let utgift = []
let utgiftpenger = []

const inputinntektnavn = document.getElementById("inputinntektnavn")
const inputinntektpenger = document.getElementById("inputinntektpenger")

const inpututgiftnavn = document.getElementById("inpututgiftnavn")
const inpututgiftpenger = document.getElementById("inpututgiftpenger")

const listinntekt = document.getElementById("listinntekt")
const listinntektpenger = document.getElementById("listinntektpenger")

function leggtilinntekt(){
    inntekt.push(inputinntektnavn.value)
    inntektpenger.push(inputinntektpenger.value)   
     
    const li = document.createElement("li");
    li.textContent = inputinntektnavn.value
    listinntekt.appendChild(li);

    const lito = document.createElement("lito");
    lito.textContent = inputinntektpenger.value
    listinntektpenger.appendChild(lito);
}

function leggtilutgift(){
    utgift.push(inpututgiftnavn.value)
    utgiftpenger.push(inpututgiftpenger.value)
    
}

