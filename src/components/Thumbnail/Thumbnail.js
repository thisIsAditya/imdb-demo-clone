import { useState } from "react";
import { Link } from "react-router-dom";
import { baseImageURL } from "../../api";
import Card from "react-bootstrap/Card";
const ThumbnailComponent = ({movie}) => {
    const [Movie] = useState({
        id : movie.id,
        poster_path : movie.poster_path,
        title : movie.title,
        overview : movie.overview,
        release_date : movie.release_date
    });
    return ( 
        <Link to={`/movie/${Movie.id}`}>
            <Card className="bg-dark text-white m-2" style={{width:"100%"}} >
                <Card.Img src={`${baseImageURL}${Movie.poster_path}`} alt="Card image" style={{opacity:0.4,maxHeight:"15rem", objectFit:"cover"}} />
                <Card.ImgOverlay className="center">
                    <Card.Title className="display-7"><b>{Movie.title}</b></Card.Title>
                    <Card.Text>                                                    
                        {`${Movie.overview.substring(0, 200)}...`}<b>Read more</b>
                        Release Date : <b>{Movie.release_date}</b>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
     );
}
 
export default ThumbnailComponent;