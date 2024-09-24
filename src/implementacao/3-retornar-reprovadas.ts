/* 3) Fazer uma função que retorne um array de nome das reprovadas*/


function retornarReprovadas(): string [] {
    const alunos =[
        {nome: 'Chico Bento', media: 4},
        {nome: 'Rosinha', media: 9},
        {nome: 'Cascão', media: 3},
        {nome: 'Cebolinha', media: 6},
        {nome: 'Magali', media: 8},
        {nome: 'Mônica', media: 7}

    ];

    const reprovadas = alunos
    .filter(aluno => aluno.media <= 4)
    .map(aluno => aluno.nome); 


    return reprovadas;
}


//teste

console.log(retornarReprovadas());

