
const app = require('./conexao')
const { getFirestore ,collection, getDocs } =  require ("firebase/firestore");
const db = getFirestore(app)



async function lerCandidatosFirebase(){
    const canditato = await getDocs(collection(db, "canditato"));
    const candidatoABC = await canditato
    candidatoABC.forEach((doc) => {
       var dados = doc.data()
       return  dados
       
    });
    
}

module. exports = lerCandidatosFirebase