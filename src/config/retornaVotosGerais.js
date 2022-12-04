const app = require('../models/conexao')
const { getFirestore ,collection, getDocs, doc } =  require ("firebase/firestore");
const db = getFirestore(app)

const padronizaJsonDeCandidatos = require('./padronizaObjetoCandidatosVindoDoBanco')


async function lerVotos(){
    try{
        let votos = 0
        const aguardaDadosDoCanditoDoBanco = await getDocs(collection(db, "canditato"));
        const pegaOArrayComTodasAsInformacoesDoBanco = aguardaDadosDoCanditoDoBanco
       
        const candidatos = pegaOArrayComTodasAsInformacoesDoBanco.docs.map(
            (element) => new padronizaJsonDeCandidatos(
                element.id,
                element.data().id,
                element.data().nome,
                element.data().partido,
                element.data().numero,
                element.data().quantida_de_votos,
                element.data().urlImg,
                0
            ))

        for await (candi of candidatos){
            votos = votos + await candi.quantidade_de_votos
        }
        return votos
       
    }
    catch(erro){
        console.log("Houve um erro", erro)
    }
    
}



module.exports = lerVotos