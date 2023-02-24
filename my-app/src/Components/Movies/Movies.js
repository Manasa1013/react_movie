import { MovieDisplay } from "./MovieDisplay";
import "./Movies.css";
export function Movies({ movieResults }){
    //eslint-disable-next-line
    return (
        <div className="movie__list">
            {
                movieResults.map((item) => 
                    // (<img width={item.image.width} height={item.image.height} src={item.image.url} alt={item.title}/>))
                    (<MovieDisplay item={item} />)
                )
            }
            
        </div>
    )
}