let VotosTotais = 1000

class Voto{
    constructor(id, candidato){
        this.id = id
        this.candidato = candidato
    }

    addVoto(){
        return console.log(this.montaVoto())
    }

    montaVoto(){
    
        return{
            id_voto: this.id,
            candidato_voto: this.candidato,
        }
    }
}

module.exports = Voto