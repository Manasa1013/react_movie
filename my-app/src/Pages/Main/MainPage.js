import { useEffect, useState } from "react";
import { Movies } from "../../Components/Movies/Movies";
import { Navbar } from "../../Components/Navbar/Navbar";
export function MainPage(){
    const [movieResults, setMovieResults ] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '224efdbef4msh95a8f529411f6c8p113ddcjsnac52c6d737cf',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
        const fetchData = () => {
            fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=20&paginationKey=1', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        setMovieResults(() => response.results);
    }
        )
	.catch(err => console.error(err));
        } ;
        fetchData();
        // eslint-disable-next-line
    },[])
    return(
        <>
            <Navbar /> 
           {movieResults && <Movies movieResults={movieResults} /> }
        </>
    )
}