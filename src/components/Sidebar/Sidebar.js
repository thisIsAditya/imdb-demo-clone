import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
const SidebarComponent = () => {
    return ( 
        <Accordion defaultActiveKey="search">
            <Accordion.Item eventKey="search">
                <Accordion.Header>Search</Accordion.Header>
                <Accordion.Body>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter Movie Name"
                            aria-label="Search"
                            aria-describedby="Search by movie name"
                        />
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                    </InputGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="sort">
                <Accordion.Header>Sort</Accordion.Header>
                <Accordion.Body>
                    <Form.Select aria-label="Sort By -">
                        <option>--Sort By--</option>
                        <option value="1">Release Date</option>
                        <option value="2">Popularity</option>
                        <option value="3">Ratings</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
     );
}
 
export default SidebarComponent;