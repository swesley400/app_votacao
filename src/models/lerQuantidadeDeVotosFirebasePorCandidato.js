
const app = require('./conexao')
const { getFirestore ,collection, getDoc, doc } =  require ("firebase/firestore");
const db = getFirestore(app)



async function lerQuantidadeDeVotosFirebasePorCandidato(id){
    try{
       
        const montaQueryParaPegarDoc = doc(db,"canditato", id)
        const pegaDocDoBanco = await getDoc(montaQueryParaPegarDoc)
        return  pegaDocDoBanco.data().quantida_de_votos
        
       
        
    }
    catch(erro){
        
         console.log("Houve um erro", erro)
    }
    return
}

module.exports = lerQuantidadeDeVotosFirebasePorCandidato