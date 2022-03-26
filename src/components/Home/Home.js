import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Scroll from "../Utils/Scroll.js";
import ThumbnailGridComponent from "../ThumbnailGrid/ThumbnailGrid.js";
import SidebarComponent from "../Sidebar/Sidebar.js";
import {getAllMovies, getSearchByNameResults} from "../../api";

const Home = () => {
    const [IsPending, setIsPending]=useState(true);
    const [movies, setmovies]=useState(null);
    const [Err, setErr]=useState(null);
    useState(()=>{
        const getMovies= async()=>{
            try{
                const moviesResponse = await getAllMovies(1)
                if(moviesResponse.status >= 400){
                    setErr(`Error Code : ${moviesResponse.status} | Message : ${moviesResponse.message}`)
                    setIsPending(false);
                }else{
                    console.log(moviesResponse.data.data.results, "THis is state");
                    setmovies(moviesResponse.data.data.results)
                    setIsPending(false);
                }
            }catch(err){
                setIsPending(false);
                setErr(err.message);
            }
        }
        getMovies();
    },[]);

    const searchByName = async(page, query)=>{
        try{
            setmovies(null);
            setIsPending(true);
            const response = await getSearchByNameResults(page, query);
            if(response.status >= 400){
                setErr(`Error Code : ${response.status} | Message : ${response.message}`)
                setIsPending(false);
            }else{
                console.log(response.data.data.results, "THis is state after search");
                setmovies(response.data.data.results)
                setIsPending(false);
            }
        }catch(err){
            setIsPending(false);
            setErr(err.message);
        }
    }
    return ( 
        <Container className="p-4">
            <Scroll>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <SidebarComponent search={searchByName} />
                        </Col>
                        <Col lg={9}>
                            <ThumbnailGridComponent IsPending={IsPending} Err={Err} movies={movies} />
                        </Col>
                    </Row>
                </Container>
            </Scroll> 
        </Container>
     );
}
 
export default Home;