import { Col, Container, Row } from "react-bootstrap";
import Scroll from "../Utils/Scroll.js";
import ThumbnailGridComponent from "../ThumbnailGrid/ThumbnailGrid.js";
import SidebarComponent from "../Sidebar/Sidebar.js";

const Home = () => {
    

    return ( 
        <Container className="p-4">
            <Scroll>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <SidebarComponent/>
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