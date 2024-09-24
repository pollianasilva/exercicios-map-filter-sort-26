/* 1) Fazer uma função que retorne um array de todas as médias */


function retornarMedias(): number[] {

    const media = [10, 9, 7, 6, 5, 8];
    const mediaAprovados = media.filter(num => num >= 7)

    return mediaAprovados
}


//teste

console.log(retornarMedias());

