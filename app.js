function Carro(marca, preco, ano, cor, motor, portas, airbag) {
    this.marca = marca;
    this.preco = preco;
    this.ano = ano;
    this.cor = cor;
    this.motor = motor;
    this.portas = portas;
    this.airbag = airbag;
}

const honda = new Carro();
honda.marca = 'Honda';

console.log(honda);