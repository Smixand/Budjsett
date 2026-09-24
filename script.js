let saldopenger = 0
let inntektpenger = 0
let utgiftpenger = 0

const header = document.getElementById("header")
const navigation = document.querySelector("nav")
const inntekter = document.getElementById("inntekter")
const utgifter = document.getElementById("utgifter")


const inputinntektnavn = document.getElementById("inputinntektnavn")
const inputinntektpenger = document.getElementById("inputinntektpenger")

const inpututgiftnavn = document.getElementById("inpututgiftnavn")
const inpututgiftpenger = document.getElementById("inpututgiftpenger")

const listinntekt = document.getElementById("listinntekt")
const listinntektpenger = document.getElementById("listinntektpenger")

const listutgift = document.getElementById("listutgift")
const listutgiftpenger = document.getElementById("listutgiftpenger")

const saldo = document.getElementById("saldo")

function light(){
    localStorage.setItem("theme", "light");
    header.style.backgroundColor = "rgb(45, 56, 255)";
    navigation.style.backgroundColor = "rgb(45, 56, 255)";
    document.body.style.backgroundColor = "rgb(255, 255, 255)"
    document.body.style.color = "black";
    inntekter.style.border = "1px solid black";
    utgifter.style.border = "1px solid black";
}

function dark(){
    localStorage.setItem("theme", "dark");
    header.style.backgroundColor = "rgb(96, 96, 96)";
    navigation.style.backgroundColor = "rgb(96, 96, 96)";
    document.body.style.backgroundColor = "rgb(46, 46, 46)"
    document.body.style.color = "white";
    inntekter.style.border = "1px solid white";
    utgifter.style.border = "1px solid white";
}

const theme = localStorage.getItem("theme")
if(theme=="light"){
    light()
}

if(theme=="dark"){
    dark()
}

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

