import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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


const Homepage = () => {

    //destinazioni
    const [searchDestination, setSearchDestination] = useState("");
    // filtro viaggi
    const [filteredDestination, setFilteredDestination] = useState([])
    // Dummy data per le card
    const naviga = useNavigate();

    useEffect(() => {
        const filtered = destinations.filter((destination) =>{
            return destination.destinazione.toLowerCase().includes(searchDestination.toLowerCase())
        })

        setFilteredDestination(filtered)
    }, [searchDestination])

    return (
        <div className="min-h-screen flex flex-col">

            {/* HEADER */}
            <header className="relative bg-gradient-to-r from-sky-400 to-blue-700 flex flex-col items-center justify-center text-center p-6">

                {/* Decorazioni */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-8 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                Nomade Viaggi
                </h1>

                {/* Barra di ricerca */}
                <form
                className="flex w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-white/30"
                >
                    <div className="d-flex justify-content-around">
                        <input
                        type="text"
                        value={searchDestination}
                        onChange={(e) => setSearchDestination(e.target.value)}
                        placeholder="Cerca destinazione..."
                        className="form-control me-1"
                        />
                    </div>
                </form>
            </header>

            {/* CARD GRID */}
            <main className="homepage">
                <div className="homepage-container">
                    <h2 className="homepage-title mt-3">Le tue destinazioni</h2>

                    <div className="card-grid">
                        {filteredDestination.map((dest) => (
                            <div key={dest.id} className="destination-card" onClick={() => naviga(`/voyage/${dest.id}`)}>
                                {/* BACKGROUND IMAGE CARD */}
                                <div 
                                    className="card-bg"
                                    style={{ backgroundImage: `url(${dest.img})`}}>
                                </div>
                                {/* OVERLAY CARD */}
                                <div className="card-overlay"></div>
                                {/* CONTENUTO CARD CARD */}
                                <div className="card-content">
                                {/* TITOLO DESTINAzIONE CARD */}
                                <h3 className="card-title">{dest.destinazione}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homepage

