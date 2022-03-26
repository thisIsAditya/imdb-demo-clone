import { Col, Container, Row } from "react-bootstrap";
import Scroll from "../Utils/Scroll.js";
import ThumbnailGridComponent from "../ThumbnailGrid/ThumbnailGrid.js";

const Home = () => {
    

    return ( 
        <Container className="p-4">
            <Scroll>
                <Container>
                    <Row>
                        <Col lg={3}>
                            SideBar
                        </Col>
                        <Col lg={9}>
                            <ThumbnailGridComponent />
                        </Col>
                    </Row>
                </Container>
            </Scroll> 
        </Container>
     );
}
 
export default Home;