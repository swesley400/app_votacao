
const app = require('./conexao')
const { getFirestore ,collection, getDocs } =  require ("firebase/firestore");
const db = getFirestore(app)



async function lerCandidatosFirebase(){
    try{
        const aguardaDadosDoCanditoDoBanco = await getDocs(collection(db, "canditato"));
        const pegaOArrayComTodasAsInformacoesDoBanco = aguardaDadosDoCanditoDoBanco
        const transformaEmArrayCandidatos = pegaOArrayComTodasAsInformacoesDoBanco .docs.map(element => element.data() )
        return transformaEmArrayCandidatos
    }
    catch{
       (err) => {console.log("Houve um erro", err)}
    }
    
}

module. exports = lerCandidatosFirebase