/* 6) Fazer uma função que retorne o nome da aluna com menor nota */ 


function retornarMenorMedia():string {

    const alunas =[
        { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
        { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
        { nome: "Samantha", prova: { p1: 3, p2: 6.2, p3: 6 } }
    ];   

    let alunaMenorMedia = alunas[0];
    let menorMedia = (alunaMenorMedia.prova.p1 + alunaMenorMedia.prova.p2 + alunaMenorMedia.prova.p3) / 3;
   
    for (let i = 1; i < alunas.length; i++) {
        const soma = alunas[i].prova.p1 + alunas[i].prova.p2 + alunas[i].prova.p3;
        const mediaAtual = soma / 3;
        
        if (mediaAtual < menorMedia) {
            alunaMenorMedia = alunas[i];
            menorMedia = mediaAtual; 
        }
    }
    
    return alunaMenorMedia.nome;
}

// Teste
console.log(retornarMenorMedia());