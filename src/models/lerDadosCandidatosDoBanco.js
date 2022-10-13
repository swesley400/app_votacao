
const app = require('./conexao')
const { getFirestore ,collection, getDocs, doc } =  require ("firebase/firestore");
const db = getFirestore(app)



async function lerCandidatosFirebase(){
    try{
        const aguardaDadosDoCanditoDoBanco = await getDocs(collection(db, "canditato"));
        const pegaOArrayComTodasAsInformacoesDoBanco = aguardaDadosDoCanditoDoBanco
        const docsCandidatos = pegaOArrayComTodasAsInformacoesDoBanco.docs.map( 
                docs => docs.id
            )
        const candidatos = pegaOArrayComTodasAsInformacoesDoBanco.docs.map(
            element =>  element.data()
            )
        return {
            docsCandidatos,
            candidatos
        }
    }
    catch{
       (err) => {console.log("Houve um erro", err)}
    }
    
}

module. exports = lerCandidatosFirebase