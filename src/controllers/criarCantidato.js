const { getFirestore, collection, addDoc } = require( 'firebase/firestore/lite');
const app = require('../models/conexao')
const db = getFirestore(app)

class Candidato {
    constructor(id,numero, nome, partido, quantidadeDeVotos, urlImg){
        this.id = id,
        this.numero= numero;
        this.nome = nome;
        this.partido = partido;
        this.quantidadeDeVotos = quantidadeDeVotos;
        this.urlImg = urlImg
    }
    async fazUpNoBanco(){
        try{
            const docRef= await addDoc(collection(db,'canditato'),
                this.pegaCandidato()
            )
            console.log("id: ", docRef.id)
            return console.log("Candidato criado no banco com sucesso")
        }
        catch(erro){
            console.log("Houve um erro", erro)
        }
    }
    pegaCandidato(){
        const candidato = {
            id: this.id,
            numero: this.numero,
            nome: this.nome,
            partido:this.partido,
            quantida_de_votos: this.quantidadeDeVotos,
            urlImg: this.urlImg, 
        }
        return candidato
    }
}

module.exports = Candidato