const carro = {
    marca: 'Ford',
    preco: 50000,
    ano: 2020,
    cor: "branco",
    motor: 1.0,
    portas: 4,
    airbag: true,
};

let car = document.getElementById('carro');
car.innerHTML = `<p>Marca: ${carro.marca}</p>
                 <p>Preço: ${carro.preco}</p>
                 <p>Ano: ${carro.ano}</p>
                 <p>Cor: ${carro.cor}</p>
                 <p>Motor: ${carro.motor}</p>
                 <p>Portas: ${carro.portas}</p>
                 <p>Marca: ${carro.marca}</p>`;
