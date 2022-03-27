import { Navbar, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import {getAllMovies} from "../../api";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
    let navigate = useNavigate();
    const randomSelectMovie = async()=>{
        try{
            const totalPageCount = 500;
            const page = Math.floor(Math.random() * (totalPageCount+1));
            const movieNumber = Math.floor(Math.random() * 21);
            const response = await getAllMovies(page);
            const movies = response.data?.data?.results;
            const movie = movies[movieNumber];
            navigate(`/movie/${movie.id}`);        
        }catch(err){
            console.log(err, "This is error in Random select Function");
        }
    }
    return ( 
        <Navbar variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="/">BiP Movies</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link to="/" style={{textDecoration:"none",padding:"8px"}}>Home</Link>
                    <Button variant="light" onClick={randomSelectMovie} style={{textDecoration:"none",padding:"8px"}}>Random Pick</Button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;