import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

const App = () => {
    const url = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});

    const getCharacterAPI = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results);
        setInfo(data.info);
        console.log(data);
    };

    const onPrevious = () => {
        getCharacterAPI(info.prev);
    };

    const onNext = () => {
        getCharacterAPI(info.next);
    };

    useEffect(() => {
        getCharacterAPI(url);
    }, []);

    return (
        <>
            <Navbar brand="Rick and Morty App!" />
            <div className="container mt-5">
                <Pagination
                    prev={info.prev}
                    next={info.next}
                    onPrevious={onPrevious}
                    onNext={onNext}
                />
                <Characters characters={characters} />
                <Pagination
                    prev={info.prev}
                    next={info.next}
                    onPrevious={onPrevious}
                    onNext={onNext}
                />
            </div>
        </>
    );
};

export default App;
