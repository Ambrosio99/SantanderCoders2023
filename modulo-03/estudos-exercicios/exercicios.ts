// 1. Crie uma classe chamada Person com propriedades name e age. Instancie alguns objetos dessa classe.
// 2. Adicione um método à classe Person que imprime uma saudação com o nome da pessoa.
class Person {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudar(): void {
    console.log(`Olá ${this.nome}, nesse momento você tem ${this.idade} anos!`);
  }
}

const joao = new Person("João", 24);

// 3. Crie uma classe Rectangle com propriedades width e height. Adicione um método que calcula a área do retângulo.
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calc(): void {
    console.log("A área do retângulo é " + this.width * this.height);
  }
}

const retanguloNovo = new Rectangle(30, 15);

// 4. Crie uma classe Circle com propriedade radius e um método que calcula a área do círculo.
class Circulo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }
  calcArea(): number {
    const area = Math.PI * Math.pow(this.raio, 2);
    return area;
  }
}

const circuloNovo = new Circulo(10);

// 5. Crie uma classe Car com propriedades make, model e year. Crie um método que retorna a descrição do carro.
class Carro {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  descricao(): string {
    return `O seu carro é da marca: ${this.marca}, seu modelo é ${this.modelo} e foi fabricado em ${this.ano}`;
  }
}

const peugeot = new Carro("Peugeot", "208GT", 2017);

// 6. Crie uma classe Student com propriedades name e grades (um array). Adicione um método que calcula a média das notas.
class Estudante {
  nome: string;
  notas: number[];

  constructor(nome: string, notas: number[]) {
    this.nome = nome;
    this.notas = notas;
  }

  calcMedia(): string {
    let notatotal = this.notas.reduce((total, nota) => total + nota, 0);
    const media = notatotal / this.notas.length;
    return `A média de suas notas é: ${media}`;
  }
}

const lucas = new Estudante("Lucas", [80, 72, 90, 95, 45]);

// 7. Crie uma classe BankAccount com propriedades balance e owner. Adicione métodos para depositar e sacar dinheiro.
class contaBanco {
  saldo: number;
  dono: string;

  constructor(dono: string, saldo: number) {
    this.saldo = saldo;
    this.dono = dono;
  }
  depositar(valor: number): string {
    this.saldo = this.saldo + valor;
    return `Deposito realizado com sucesso! Seu saldo atual é de R$ ${this.saldo}`;
  }
  sacar(valor: number): string {
    this.saldo = this.saldo - valor;
    return `Operação realizada com sucesso! Seu saldo atual é de R$ ${this.saldo}`;
  }
}

const conta01 = new contaBanco("Lucas", 10);

// 8. Crie uma classe Book com propriedades title, author e year. Crie um método que retorna os detalhes do livro.
class Livro {
  titulo: string;
  autor: string;
  ano: number;

  constructor(titulo: string, autor: string, ano: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  descricao(): string {
    return `Título do livro: ${this.titulo}, seu autor é ${this.autor} e foi publicado em ${this.ano}`;
  }
}

const novoLivro = new Livro("Código sujo", "Ambrosio LTDA", 2024);

// 9. Crie uma classe Product com propriedades name, price e quantity. Adicione métodos para calcular o valor total e exibir os detalhes.
class Produto {
  nome: string;
  preco: number;
  quantia: number;

  constructor(nome: string, preco: number, quantia: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantia = quantia;
  }

  calcTotal(): string {
    let total = this.quantia * this.preco;
    return `O produto: ${this.nome}, custa R$ ${this.preco} e temos ${this.quantia} unidades no estoque. Levando todas as unidades fica por R$ ${total}`;
  }
}

const shampoo = new Produto("shampoo", 12, 5);

// 10. Crie uma classe Employee com propriedades name, role e salary. Adicione um método que calcula um aumento de salário com base em uma porcentagem.
class Empregado {
  nome: string;
  cargo: string;
  salario: number;

  constructor(nome: string, cargo: string, salario: number) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(porcentagem: number): string {
    let valorAumento;
    valorAumento = this.salario * (porcentagem / 100) + this.salario;
    return `O valor do novo salário é de R$ ${valorAumento}`;
  }
}

const empregado01 = new Empregado("Lucas", "Dev Front-end", 1600);

// EXERCÍCIOS INTERMEDIÁRIOS

// 11. Crie uma classe Bank que contém uma coleção de contas bancárias. Adicione métodos para adicionar contas, fazer transferências e calcular o saldo total do banco.

// 12. Crie uma classe Shape com método calculateArea(). Crie subclasses Square, Triangle e Pentagon que implementam esse método.

// 13. Crie uma classe Playlist que contém objetos da classe Song. Adicione métodos para adicionar músicas, remover músicas e calcular a duração total da playlist.

// 14. Crie uma classe Person com propriedade address. Crie uma classe Address separada e associe-a à classe Person.

// 15. Crie uma hierarquia de classes para representar diferentes tipos de veículos. Cada classe deve ter métodos específicos, como startEngine() e stopEngine().

// 16. Crie uma classe Bank que contém uma coleção de contas bancárias (classe BankAccount). Adicione métodos para calcular o saldo médio e encontrar a conta com o saldo mais alto.

// 17. Crie uma classe Animal com métodos eat() e makeSound(). Crie subclasses como Dog, Cat e Bird com implementações específicas.

// 18. Crie uma classe Shape com método draw(). Crie subclasses como Circle, Square e Triangle com implementações de desenho.

// 19. Crie uma classe Company com propriedades name e employees. Adicione métodos para adicionar e remover funcionários, e calcular a folha de pagamento.

// 20. Crie uma classe Game com propriedades name e players. Adicione métodos para adicionar e remover jogadores, e determinar se o jogo está ativo.

// 21. Crie uma classe Bank com um método para simular uma transação bancária que envolve várias contas, garantindo consistência.

//  22. Implemente um sistema de herança múltipla usando interfaces para representar diferentes habilidades que um personagem de jogo pode ter.

//  23. Crie uma classe Database que permite operações de CRUD (criar, ler, atualizar e excluir) em objetos que implementam uma interface específica.

//  24. Implemente um padrão de projeto Singleton para uma classe Logger que registra informações em todo o aplicativo.

//  25. Crie uma classe StateMachine que permite definir estados e transições, útil para modelar comportamentos complexos.

//  26. Crie uma classe EventEmitter que permite registrar ouvintes para eventos e emitir eventos para notificar os ouvintes.

//  27. Implemente uma classe Cache que armazena resultados de funções para entradas específicas, melhorando o desempenho.

//  28. Crie uma classe ShapeFactory que gera objetos Shape com base em parâmetros fornecidos.

//  29. Implemente um mecanismo de observação (Observer Pattern) onde um objeto observável notifica seus observadores sobre mudanças.

//  30. Crie uma classe DependencyInjectionContainer para gerenciar a injeção de dependência em um aplicativo TypeScript.
