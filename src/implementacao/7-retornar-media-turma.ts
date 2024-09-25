/* 7) Fazer uma função que retorne a media de toda a turma*/


function retornarMediaTurma(): number {

    const alunas =[
        { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
        { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
        { nome: "Samantha", prova: { p1: 3, p2: 6.2, p3: 6 } }
    ];   

    let somaTotal = 0;

    for (let aluna of alunas) {
        const somaNotas = aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3;
        const media = somaNotas / 3;
        somaTotal += media;
    }
    const mediaTurma = somaTotal / alunas.length;

    return Number(mediaTurma.toFixed(1));
}


// Teste
console.log(retornarMediaTurma());

