import { useState } from "react";
import Loading from "../Utils/Loading.js";
import ErrorComponent from "../Utils/Error.js";
import {getAllMovies} from "../../api";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const ThumbnailGridComponent = () => {
    const [IsPending, setIsPending]=useState(true);
    const [movies, setmovies]=useState(null);
    const [Err, setErr]=useState(null);

    useState(()=>{
        const getMovies= async()=>{
            const moviesResponse = await getAllMovies(1)
            if(moviesResponse.status >= 400){
                setErr(`Error Code : ${moviesResponse.status} | Message : ${moviesResponse.message}`)
                setIsPending(false);
            }else{
                console.log(moviesResponse.data.data.results, "THis is state");
                setmovies(moviesResponse.data.data.results)
                setIsPending(false);
            }
        }
        getMovies();
    },[]);
    return (
        <>
            {IsPending && <Loading />}
            {
                movies &&
                movies.map((movie)=>(
                    <Link to={`/movie/${movie.id}`}>
                        <Card className="bg-dark text-white m-2" style={{width:"18rem"}} >
                            {/* <Card.Img src={thumbnailSrc} alt="Card image" style={{opacity:0.4,maxHeight:"9rem", objectFit:"cover"}} /> */}
                            <Card.ImgOverlay className="center">
                                <Card.Title className="display-7"><b>{movie.title}</b></Card.Title>
                                <Card.Text>
                                    <div>
                                        <p>{movie.overview}</p>
                                    </div>
                                    <div>
                                        Year : {movie.release_date}
                                    </div>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                ))
            }
            {Err && <ErrorComponent err={Err} />}
        </>
     );
}
 
export default ThumbnailGridComponent;