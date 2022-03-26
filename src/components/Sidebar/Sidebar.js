import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
const SidebarComponent = ({search, sortByDate, sortByPopularity, sortByRatings}) => {
    const [SearchQuery, setSearchQuery] = useState("");
    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    }
    const handleSortChange = (e) => {
        const sorter = e.target.value;
        console.log(sorter, "THis is event");
        switch(sorter){
            case "sortByDate" : sortByDate();break;
            case "sortByPopularity" : sortByPopularity();break;
            case "sortByRatings" : sortByRatings();break;
            default : break;
        }
    }
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
                            onChange={handleOnChange}
                        />
                        <Button variant="outline-success" onClick={()=>(search(1,SearchQuery))}>
                            Search
                        </Button>
                    </InputGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="sort">
                <Accordion.Header>Sort</Accordion.Header>
                <Accordion.Body>
                    <Form.Select aria-label="Sort By -" onChange={handleSortChange}>
                        <option>--Sort By--</option>
                        <option value="sortByDate">Latest First</option>
                        <option value="sortByPopularity">Most Popular</option>
                        <option value="sortByRatings">Most Ratings</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
     );
}
 
export default SidebarComponent;