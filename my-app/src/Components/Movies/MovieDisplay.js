import { Link } from "react-router-dom";
import "./Movies.css";
export function MovieDisplay({item}){
   
    return (
       
            <Link to={item.id} key={item.id} className="movie__wrapper" >
                {/* <img src={item.image.url && item.image.url} alt={item.title}  className="movie__image"
                /> */}
                <img src="https://m.media-amazon.com/images/M/MV5BODg0YTM4NzEtZDQyNi00M2MzLWE3MDQtNjcxNTkxNWM0NzNhXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_FMjpg_UX1000_.jpg" 
                alt={item.title} 
                className="movie__image"
                />
                <p className="movie__title">{
                (item.title.length > 10) ? item.title.substring(0,13) : item.title}</p>
                <span className="movie__options">Play Now</span>
            </Link>
        
    )
}