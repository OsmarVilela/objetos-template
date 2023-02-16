/* const estudante = {
    nome: "Osmar",
    sobrenome: "Vilela",
    numeroMatricula: 5173,
    notasSemestre: [8, 6, 9, 10, 5, 8.5]
}

console.log(estudante)
estudante.modulo = 3 // adicionando uma nova chave dentro da propriedade
console.log(estudante)

/* imprima no console a propriedade nome
imprima no console a segunda nota da pessoa no semestre
imprima o módulo em que a pessoa está */

/* console.log(estudante.nome)
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)
 */
// segunda parte copia do primeiro objeto
/* const copiaEstudante = {
    ...estudante */

/* alterar o nome para Astrodev;
adicionar a nota 9 às notas do semestre;
alterar o módulo para o próximo módulo;
imprimir o objeto com as atualizações. */
/* copiaEstudante.nome = "Astrodev"
copiaEstudante.notasSemestre.push(9)
copiaEstudante.modulo = 4

console.log(copiaEstudante) */ 

// fixação

const carrinho = {
    nome: "Osmar",
    formaPagamento: "Cartão",
    endereco: "Av. Ouro Fino",
}

carrinho.compras = [
    {
        nomeDoProduto: "Pão de Forma",
        preco: 11.70,
        unidades: 2
    },
    {
        nomeDoProduto: "Mussarela",
        preco: 9.50,
        unidades: 1 
    },
    {
        nomeDoProduto: "Mortadela",
        preco: 3.99,
        unidades: 3
    }
]

console.log(carrinho.compras.length) // quantidade de compras

const carrinhoPresente = {
    ...carrinho,
    nome: "Vilela",
    formaPagamento: "Pix"
}

console.log(carrinho)
console.log(carrinhoPresente)