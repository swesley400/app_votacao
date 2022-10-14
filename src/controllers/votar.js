const votosTotais = require("../models/lerQuantidadeDeVotosFirebasePorCandidato")
const { getFirestore,doc, updateDoc } = require('firebase/firestore/lite');
const app = require('../models/conexao.js');
const db = getFirestore(app)

class Voto{
    constructor(id, candidato){
        this.id = id
        this.candidato = candidato
    }

    addVoto(){
        const novoVoto = doc(db, "canditato", this.montaVoto().id_voto)

        async function addVotoAoFirebase(id){
            try{
                await updateDoc(novoVoto,{
                    quantida_de_votos: (await votosTotais(id) + 1)
                })
                return console.log("Voto computado")
            }
            catch(erro){
                console.log("Houve um erro ao tentar votar", erro)
            }
        }
        addVotoAoFirebase(this.montaVoto().id_voto)
        return console.log(this.montaVoto().id_voto)
    }

    montaVoto(){
    
        return{
            id_voto: this.id,
            candidato_voto: this.candidato,
        }
    }
}

module.exports = Voto