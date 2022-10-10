function calculaPorcetagem (quantidadeDeVotosPorCanditado, votosTotais ){
    let porcetagem = quantidadeDeVotosPorCanditado*100/votosTotais
    return porcetagem
}

module.exports = calculaPorcetagem