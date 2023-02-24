import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";

export function MovieSpecific(){
    let {ttId }= useParams();
    let hardCodeId = `/title/tt0354595/`
    console.log(ttId,"id at movie specific page");
    const [movieDetails, setMovieDetails] = useState({});


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '224efdbef4msh95a8f529411f6c8p113ddcjsnac52c6d737cf',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const fetchSynopses = (ttId) => {
        
        let id = ttId.split('/')[2];
    fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response,"response of details of movie");
            setMovieDetails(response);
        })
        .catch(err => console.error(err));
    };
    // fetchSynopses(ttId);
    fetchSynopses(hardCodeId);
    return (
        <>
            <Navbar />
            {
                <div className="flex-row">
                    <div className="flex-column">
                        <img src="https://m.media-amazon.com/images/M/MV5BODg0YTM4NzEtZDQyNi00M2MzLWE3MDQtNjcxNTkxNWM0NzNhXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_FMjpg_UX1000_.jpg" 
                        alt={movieDetails.id}
                        className="movie__image"
                        />
                        <p className="movie__title">{movieDetails.title.image.title}</p>
                        <span className="movie__options">{movieDetails.title.image.titleType}</span>
                        <button className="movie__button primary">Watch  Now</button>
                        <button className="movie__button secondary">Watch Later</button>
                    </div>
                    <article className="movie-description">
                        {movieDetails.plotSummary.text}
                    </article>
                </div>
            }
        </>
    )
}