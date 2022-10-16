
const app = require('./conexao')
const { getFirestore ,collection, getDocs, doc } =  require ("firebase/firestore");
const db = getFirestore(app)
const padronizaJsonDeCandidatos = require("../config/padronizaObjetoCandidatosVindoDoBanco")


async function lerCandidatosFirebase(){
    try{
        const aguardaDadosDoCanditoDoBanco = await getDocs(collection(db, "canditato"));
        const pegaOArrayComTodasAsInformacoesDoBanco = aguardaDadosDoCanditoDoBanco
        
        const candidatos = pegaOArrayComTodasAsInformacoesDoBanco.docs.map(
            (element) =>  new padronizaJsonDeCandidatos(
                element.id,
                element.data().id,
                element.data().nome,
                element.data().partido,
                element.data().numero,
                element.data().quantida_de_votos,
                element.data().urlImg
            ))
        
       
        return candidatos
        
    }
    catch(erro){
        console.log("Houve um erro", erro)
    }
    
}

module. exports = lerCandidatosFirebase