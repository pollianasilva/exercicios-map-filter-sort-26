/*5) Fazer uma função que retorne o nome da aluna com maior nota*/


function retornarMaiorMedia():string {

    const alunas =[
        { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
        { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
        { nome: "Samantha", prova: { p1: 3, p2: 6.2, p3: 6 } }
    ];

const resultado = alunas.map(aluna => {
  
    const soma = aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3;   
    const media = soma / 3;   
      
    
    return {
      nome: aluna.nome,
      media: Number(media.toFixed(1)), 
      
    };
  });

  resultado.sort((a, b) => b.media - a.media);

  return resultado[0].nome;
  
}


// Teste
console.log(retornarMaiorMedia());