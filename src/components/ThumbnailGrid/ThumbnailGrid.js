import Loading from "../Utils/Loading.js";
import ErrorComponent from "../Utils/Error.js";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { baseImageURL } from "../../api";
const ThumbnailGridComponent = ({IsPending, Err, movies}) => {
    return (
        <>
            {IsPending && <Loading />}
            {
                movies &&
                <Container>
                    <Row>
                        {
                            movies.map((movie)=>(
                                <Col lg={6} style={{minHeight:"15rem"}} key={movie.id}>
                                    <Link to={`/movie/${movie.id}`}>
                                        <Card className="bg-dark text-white m-2" style={{width:"100%"}} >
                                            <Card.Img src={`${baseImageURL}${movie.poster_path}`} alt="Card image" style={{opacity:0.4,maxHeight:"15rem", objectFit:"cover"}} />
                                            <Card.ImgOverlay className="center">
                                                <Card.Title className="display-7"><b>{movie.title}</b></Card.Title>
                                                <Card.Text>                                                    
                                                    {`${movie.overview.substring(0, 200)}...`}<b>Read more</b>
                                                    Release Date : <b>{movie.release_date}</b>
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
                
            }
            {Err && <ErrorComponent err={Err} />}
        </>
     );
}
 
export default ThumbnailGridComponent;