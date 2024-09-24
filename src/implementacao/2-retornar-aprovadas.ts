/* 2) Fazer uma função que retorne um array de nomes das aprovadas */


function retornarAprovadas(): string [] {
    const alunos =[
        {nome: 'Chico Bento', media: 5},
        {nome: 'Rosinha', media: 9},
        {nome: 'Cascão', media: 10},
        {nome: 'Cebolinha', media: 6},
        {nome: 'Magali', media: 8},
        {nome: 'Mônica', media: 7}

    ];

    const aprovadas = alunos.filter(aluno => aluno.media >= 7)
        .map(aluno => aluno.nome); 


    return aprovadas;
}

//teste

console.log(retornarAprovadas());

