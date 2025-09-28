import { useParams, useNavigate } from "react-router-dom"


const persone = [
    {
      nome: "Luca",
      cognome: "Rossi",
      cellulare: "345 1234567",
      email: "luca.rossi@email.com",
      codiceFiscale: "RSSLCU85M01H501X"
    },
    {
      nome: "Giulia",
      cognome: "Bianchi",
      cellulare: "348 7654321",
      email: "giulia.bianchi@email.com",
      codiceFiscale: "BNCGLI90F45D612Z"
    },
    {
      nome: "Marco",
      cognome: "Verdi",
      cellulare: "346 9876543",
      email: "marco.verdi@email.com",
      codiceFiscale: "VRDMRC88C20F205Y"
    },
    {
      nome: "Sara",
      cognome: "Neri",
      cellulare: "347 1122334",
      email: "sara.neri@email.com",
      codiceFiscale: "NRISRA92H50G273W"
    },
    {
      nome: "Alessandro",
      cognome: "Costa",
      cellulare: "349 9988776",
      email: "alessandro.costa@email.com",
      codiceFiscale: "CSTLSN87T11E815U"
    },
    {
      nome: "Francesca",
      cognome: "Conti",
      cellulare: "320 5566778",
      email: "francesca.conti@email.com",
      codiceFiscale: "CNTFNC91T41H501B"
    },
    {
      nome: "Davide",
      cognome: "Gallo",
      cellulare: "331 4455667",
      email: "davide.gallo@email.com",
      codiceFiscale: "GLLDVD89R15C351F"
    },
    {
      nome: "Chiara",
      cognome: "Fontana",
      cellulare: "389 9988776",
      email: "chiara.fontana@email.com",
      codiceFiscale: "FNTCHR93S60D612V"
    },
    {
      nome: "Giorgio",
      cognome: "De Luca",
      cellulare: "334 2233445",
      email: "giorgio.deluca@email.com",
      codiceFiscale: "DLCGGR86M12F839Q"
    },
    {
      nome: "Elena",
      cognome: "Russo",
      cellulare: "336 7788990",
      email: "elena.russo@email.com",
      codiceFiscale: "RSSLNE95P22G273D"
    }
  ];


const Traveler = () => {

  const naviga = useNavigate();
  const { personaId, viaggioId } = useParams(); 
  const persona = persone[parseInt(personaId) - 1]; 

  if (!persona) {
    return <p>Utente non trovato</p>
  }

  return (
    <div className="container">
      <div className="row">
        <div className='col-12'>
          <div className="card mt-5 bg-primary-subtle">
            <div className="text-user">
              <h2>{persona.nome} {persona.cognome}</h2>
              <p>email: {persona.email}</p>
              <p>numero di telefono: {persona.cellulare}</p>
              <p>codice fiscale: {persona.codiceFiscale}</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button 
          type="button" 
          className="btn-width" 
          onClick={() => naviga(`/voyage/${viaggioId}`)}>
              Torna alla pagina dei viaggi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Traveler