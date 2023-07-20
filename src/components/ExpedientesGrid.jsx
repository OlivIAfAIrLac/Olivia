import { AiOutlinePlus } from "react-icons/ai";
import CardRecord from "./CardRecord";
import IconButton from "./IconButton";
import Container from "./Container";
import SearchButton from "./SearchButton";

const ExpedientesGrid = ({ data, addPagination, nextPage }) => {
    const handleOnSearch = (ev) => {
        ev.preventDefault();
        const searchWord = ev.target.value;
        console.log(searchWord);
    }
    return (<>
        <Container key='search'>
            {/* TODO: SearchButton */}
            <SearchButton
                placeholder="Buscar Folio o Nombre"
                onChange={handleOnSearch}
            />
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