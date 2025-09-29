import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VoyagePage = () => {
  const naviga = useNavigate();

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

  const destinations = [
    {
      id: 1,
      destinazione: "Parigi",
      dataPartenza: "2025-10-10",
      prezzo: 450,
      durata: 5,
      trasporto: "Aereo",
      alloggio: "Hotel 3 stelle",
      accompagnatori: ["Luca Rossi", "Giulia Bianchi"],
      img: "../img/Parigii.jpg"
    },
    {
      id: 2,
      destinazione: "Tokyo",
      dataPartenza: "2025-11-02",
      prezzo: 1500,
      durata: 10,
      trasporto: "Aereo",
      alloggio: "Hotel 4 stelle",
      accompagnatori: ["Marco Verdi", "Sara Neri", "Alessandro Costa"],
      img: "../img/Tokyo.jpg"
    },
    {
      id: 3,
      destinazione: "Barcellona",
      dataPartenza: "2025-09-30",
      prezzo: 300,
      durata: 4,
      trasporto: "Treno",
      alloggio: "Ostello",
      accompagnatori: ["Elena Russo"],
      img: "../img/Barcellona.jpg"
    },
    {
      id: 4,
      destinazione: "New York",
      dataPartenza: "2025-12-15",
      prezzo: 1800,
      durata: 7,
      trasporto: "Aereo",
      alloggio: "Appartamento",
      accompagnatori: ["Francesca Conti", "Davide Gallo"],
      img: "../img/NewYork2.jpg"
    },
    {
      id: 5,
      destinazione: "Roma",
      dataPartenza: "2025-10-22",
      prezzo: 200,
      durata: 3,
      trasporto: "Auto",
      alloggio: "B&B",
      accompagnatori: ["Chiara Fontana", "Giorgio De Luca"],
      img: "../img/Roma.jpg"
    }
  ];

  //RICERCA VIAGGIO SELEZIONATO NELLA HOMEPAGE IN BASE ALL'ID
  const { id } = useParams();
  const viaggio = destinations.find((destination) => destination.id === parseInt(id));

  //SE ENTRIAMO NELLA PAGINA SENZA AVER CLICCATO NESSUNA DESTINAZIONE, MOSTRA QUESTO
  if (!viaggio) {
    return <p>Viaggio non trovato</p>;
  }

  return (
    <>
      <div className="container mt-5">
        {/* scheda del viaggio selezionato */}
        <div className="card mb-4 shadow">
          {/* CARD IMAGE */}
          <img src={viaggio.img} alt={viaggio.destinazione} className="card-img-top" />
          {/* CARD DESCRIPTION */}
          <div className="card-body">
            <h2 className="card-title">{viaggio.destinazione}</h2>
            <p>Data partenza: {viaggio.dataPartenza}</p>
            <p>Prezzo: €{viaggio.prezzo}</p>
            <p>Durata: {viaggio.durata} giorni</p>
            <p>Trasporto: {viaggio.trasporto}</p>
            <p>Alloggio: {viaggio.alloggio}</p>
            <p>Accompagnatori: {viaggio.accompagnatori.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* TRAVELER LIST */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* TRAVEL LIST CYCLE */}
            <div className="card mb-1 shadow">
              <ul className="list-group">
                {persone.map((persona, id) => (
                  <li
                    className="list-group-item text-decoration-none text-reset pt-3"
                    key={id}
                    onClick={() => naviga(`/traveler/${id + 1}/${viaggio.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <p>{persona.nome} {persona.cognome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="to-home-btn mt-3">
          <div className="square-btn text-center">
            <Link to="/"><i className="fas fa-house" /></Link>
          </div>
        </div>
      </div>
    </>
  )

}

export default VoyagePage;