class padronizaJsonDeCandidatos {

    constructor(doc, id, nome, partido, numero,quantida_de_votos, urlImg ){
        this.doc = doc,
        this.id = id,
        this.nome = nome,
        this.partido = partido,
        this.numero = numero,
        this.quantidade_de_votos = quantida_de_votos
        this.urlImg = urlImg

    }

    get pegaObj(){
        return this.montaObjt()   
    }


    montaObjt(){
        this.doc,
        this.id,
        this.nome,
        this.partido,
        this.numero,
        this.quantidade_de_votos,
        this.urlImg
    }





}
module.exports = padronizaJsonDeCandidatos