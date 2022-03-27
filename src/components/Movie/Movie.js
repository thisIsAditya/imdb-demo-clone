import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../Utils/Loading.js";
import ErrorComponent from "../Utils/Error.js";
import {baseImageURL, getMovie} from "../../api";
import Badge from 'react-bootstrap/Badge'
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack'
import Scroll from "../Utils/Scroll.js"
const Movie = () => {
    const {id} = useParams();

    const [IsPending, setIsPending]=useState(true);
    const [movie, setmovie]=useState({
        poster_path : "",
        title : "",
        vote_average : "",
        tagline : "",
        runtime : "",
        overview : "",
        release_date : "",
        original_language : "",
        production_companies : []
    });
    const [Err, setErr]=useState(null);
    useEffect(()=>{
        const getData= async()=>{
            const movieResponse = await getMovie(id)
            if(movieResponse.status >= 400){
                setErr(`Error Code : ${movieResponse.status} | Message : ${movieResponse.message}`)
                setIsPending(false);
            }else{
                console.log(movieResponse.data.data, "THis is state");
                setmovie(movieResponse.data.data)
                setIsPending(false);
            }
        }
        getData();
    },[id]);
    return ( 
        <Scroll>
            <Container className=" py-4 rounded">
                {IsPending && <Loading />}
                {Err && <ErrorComponent err={Err} />}
                {
                    !IsPending && !Err && movie &&
                    <>
                    <Row className="justify-content-center">
                        <Col md={3} className="d-flex justify-content-center align-items-center border rounded border-2 mb-2 me-sm-2 border-light bg-light">
                            <img src={`${baseImageURL}${movie.poster_path}`} alt={`Poster for ${movie.title}`} style={{maxWidth:"100%"}}/>
                        </Col>
                        <Col md={6} className="d-flex align-items-center p-4  border rounded border-2 mt-2 ms-sm-2 border-light bg-light">
                            <div>                             
                                <h2><b>{movie.title}</b>  <Badge bg="primary">{movie.vote_average}</Badge></h2>
                                <p><i>{movie.tagline}</i></p>
                                <p><b>Runtime : </b>{movie.runtime} mins</p>
                                <p>
                                    {movie.overview}
                                </p>
                                <p><b>Year</b> : {movie.release_date}  |  <b>Language</b> : <Badge bg="dark">{movie.original_language}</Badge></p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="px-4 border mt-4">
                        <Stack direction="horizontal" gap={3}>
                            <div className="display-6">Production Houses</div>
                            <div className="vr" />
                            <div className=" ms-auto">
                                <Stack direction="horizontal" gap={3}>
                                    {
                                        movie &&
                                        movie.production_companies?.map((company)=>(
                                            <Card key={company.id} className="bg-light text-dark m-2" style={{maxWidth:"200px", maxHeight : "80px"}} >
                                                <Card.Img src={`${baseImageURL}${company.logo_path}`} alt={`${company.name}'s Logo`} className="thumbnail" style={{maxWidth:"200px", maxHeight : "80px",objectFit:"scale-down"}} />
                                                <Card.ImgOverlay className="center"> 
                                                </Card.ImgOverlay>
                                            </Card>
                                        ))
                                    }
                                </Stack>
                            </div>                        
                        </Stack>               
                                
                        </Col>
                    </Row>
                    </>
                }
                    
            </Container>
        </Scroll>
     );
}
 
export default Movie;