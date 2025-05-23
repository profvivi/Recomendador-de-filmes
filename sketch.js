let campoIdade;
let campoFantasia;
let campoAventura;
let img;

function preload(){
  img= loadImage("img.png");
  
}

function setup() {
createCanvas(900, 600);
createElement('h2', "Recomendador de filmes");
createSpan("Sua idade:");
campoIdade = createInput("6");
campoFantasia = createCheckbox("Gosta de fantasia?");
campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
background("rgb(#fff)");
image(img, 150, 20, 620,520);
let idade = campoIdade.value();
let gostaDeFantasia = campoFantasia.checked();
let gostaDeAventura = campoAventura.checked();
let recomendacao = geraRecomendacao(idade, gostaDeFantasia,gostaDeAventura);
fill(color("#000"));
textAlign(CENTER, CENTER);
textSize(44);
text(recomendacao, width / 2, height / 1.05);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
if (idade >= 12) {
if (idade >= 16) {
return "Deadpool e wolverine";
} else {
if (idade >= 14) {
if(gostaDeFantasia || gostaDeAventura) {
return "Homem aranha: no aranhaverso";
} else{
return "Ladrões de bicicleta";
}
} else {
if (gostaDeFantasia) {
return "As aventuras de pi";
} else {
return "Depois da chuva";
}
}
}
} else {
if (gostaDeFantasia) {
return "A viagem de chihiro";
} else {
return "O feitiço do tempo";
}
}
}