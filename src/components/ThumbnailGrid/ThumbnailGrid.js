import Loading from "../Utils/Loading.js";
import ErrorComponent from "../Utils/Error.js";
import { Container, Row, Col } from "react-bootstrap";
import ThumbnailComponent from "../Thumbnail/Thumbnail.js";

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
                                    <ThumbnailComponent movie={movie}/>
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