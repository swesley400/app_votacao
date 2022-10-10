const Candidato = require("../controllers/criarCantidato")

const bolsonaro = new Candidato(1,22, "Jair Bolsonaro", "PL", 0, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbjWWTVJObQFdA5FRpf7x2bcLowuGPzCS1g&usqp=CAU")
const lula = new Candidato(2,13, "Luis Inacio Lula", "PT", 0,'https://classic.exame.com/wp-content/uploads/2021/05/LULA-RICARDO-STUCKERT.jpg?quality=70&strip=info&w=1024')

// bolsonaro.fazUpNoBanco()
// lula.fazUpNoBanco()

module.exports = {
    lula,
    bolsonaro,
}