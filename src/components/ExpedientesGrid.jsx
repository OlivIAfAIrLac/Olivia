import { AiOutlinePlus } from "react-icons/ai";
import CardRecord from "./CardRecord";
import IconButton from "./IconButton";
import { FaSearch } from "react-icons/fa";
import Container from "./Container";

const ExpedientesGrid = ({ data }) => {
    return (<>
        <Container>
            {/* Search button */}
            <div className='ml-auto'>
                <IconButton>
                    <FaSearch size={30} />
                </IconButton>
            </div>
            <h1 className='primary-color font-bold'>
                Expedientes Recientes
            </h1>
        </Container>
        <Container>
            <div className="-m-1 flex flex-wrap md:-m-2">
                {
                    data.map((item, index) => <CardRecord key={index + item.folio} data={item} />)
                }
            </div>
            <div className='mt-10 flex flex-col justify-center items-center'>
                {/* TODO: add on click  */}
                <IconButton>
                    <AiOutlinePlus size={40} />
                </IconButton>
            </div>
        </Container>
    </>
    );
}

export default ExpedientesGrid;