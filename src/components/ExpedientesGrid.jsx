import { AiOutlinePlus } from "react-icons/ai";
import CardRecord from "./CardRecord";
import IconButton from "./IconButton";
import { FaSearch } from "react-icons/fa";
import Container from "./Container";

const ExpedientesGrid = ({ data, addPagination, nextPage }) => {
    return (<>
        <Container key='search'>
            {/* TODO: SearchButton */}
            <div className='ml-auto'>
                <IconButton>
                    <FaSearch size={30} />
                </IconButton>
            </div>
            <h1 className='primary-color font-bold'>
                Expedientes Recientes
            </h1>
        </Container>
        <Container key='expedientes'>
            <div className="-m-1 flex flex-wrap md:-m-2">
                {
                    data.map((item, index) => <CardRecord key={index + item._id} data={item} />)
                }
            </div>
            <div className='mt-10 flex flex-col justify-center items-center'>
                <IconButton disabled={!nextPage} onClick={addPagination}>
                    <AiOutlinePlus size={40} />
                </IconButton>
            </div>
        </Container>
    </>
    );
}

export default ExpedientesGrid;