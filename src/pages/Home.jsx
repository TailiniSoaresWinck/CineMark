import { useState, useEffect } from "react";
import MovieCard from "../components/Moviecard";
import './MovieGrid.css';

const movieURL=import.meta.env.VITE_API;
const apiKEY=import.meta.env.VITE_API_KEY;

const Home=()=>{
    const [topMovies, setTopMovies]=useState([]);

    const getTopMovie= async(url)=>{
        const res = await fetch(url)
        const data = await res.json();

        setTopMovies(data.results);
    }
    useEffect(()=>{
        const topMovieUrl= `${movieURL}top_rated?${apiKEY}`;

        console.log(topMovieUrl);

        getTopMovie(topMovieUrl);
    },[]);



    return(
        <div className="container">
            <h2 className="title">Mais Populares</h2>
            <div className="movie-container">
            {topMovies.length===0 && <p>Carregando...</p>}
            {topMovies.length>0 && 
            
            topMovies.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}
export default Home;