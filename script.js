let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = documment.querySelector('.blue');
const red = documment.querySelector('.red');
const yellow = documment.querySelector('.yellow');
const green = documment.querySelector('.green');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // Gera um número aleatorio entre 0 e 3
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}