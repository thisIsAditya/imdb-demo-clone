import Button from "react-bootstrap/Button";

const Pagination = ({currentPage, totalPages,changeCurrentPage}) => {
    return (
        <div className="my-4 p-2">
            <h4 className="mb-4"><b>Pagination</b></h4>
            <div className="d-flex justify-content-between">            
                <div>
                    {
                        (currentPage < 2)
                            ? 
                            <Button onClick={()=> changeCurrentPage(-1)} disabled>Previous</Button>
                            :
                            <Button onClick={()=> changeCurrentPage(-1)}>Previous</Button>            
                    }
                </div>
                <div>
                    {
                        currentPage === totalPages
                        ?
                        <Button className="align-end" onClick={() => changeCurrentPage(1)} disabled>Next</Button>            
                        :
                        <Button className="align-end" onClick={() => changeCurrentPage(1)}>Next</Button>       

                    }
                </div>
            </div>
        </div>
     );
}
 
export default Pagination;