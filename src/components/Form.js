import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {

    
    
    
    
    const [sortGoodBad, setSortGoodBad] = useState(null)
    const [moviesData, setMoviesData] = useState([])

    
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ed82f4c18f2964e75117c2dc65e2161d').then((response) => setMoviesData(response.data.results))
    }, [])

    
    const [search, setSearch] = useState("")
    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`).then((response) => setMoviesData(response.data.results))
    }, [search])

    

    return (
        <div className="form-component">
            <div className="form-container">
                <form action="">
                    <input type="text" placeholder='Rechercher un film' id='search-input' onChange={(e) => setSearch(e.target.value)} />
                    <input type="submit" value="Rechercher" />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id='goodToBad' onClick={() => setSortGoodBad("goodToBad")}>Top <span>&#8594;</span></div>
                    <div className="btn-sort" id='badToGood' onClick={() => setSortGoodBad("badToGood")}>Flop <span>&#8594;</span></div>
                </div>
            </div>
            
            <div className="result">
                
                    {moviesData.slice(0,12).sort((a,b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average
                        } else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average
                        }
                    }).map((movie) =>  
                        <Card key={movie.id} movie={movie} ></Card>   
                    )}
                
                
            </div>
        </div>
    );
};

export default Form;