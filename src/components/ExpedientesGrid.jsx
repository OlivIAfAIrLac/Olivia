/* eslint-disable react-hooks/exhaustive-deps */
import { apiRoutes } from "@/helpers/apiRoutes";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CardRecord from "./CardRecord";
import Container from "./Container";
import IconButton from "./IconButton";
import LoaderSkeleton from "./LoaderSkeleton";
import SearchButton from "./SearchButton";

const ExpedientesGrid = () => {
    const [dataExpedientes, setDataExpedientes] = useState([])
    const [expedientesLoading, setExpedientesLoading] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(false)
    const [nextPage, setNextPage] = useState(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [isOnSearching, setIsOnSearching] = useState(false)

    const getExpedientes = useCallback(async () => {
        try {
            const res = await axios.get(`${apiRoutes.EXPEDIENTE}?page=${page}&search=${search}`);
            if (res.status === 200) {
                setExpedientesLoading(false)
                isOnSearching
                    ? setDataExpedientes([...res.data.docs])
                    : setDataExpedientes([...dataExpedientes, ...res.data.docs])
                setNextPage(res.data.nextPage)
                setHasNextPage(res.data.hasNextPage)
            }

        } catch (error) {
            /* TODO: Handle error messages */
            console.error(error);
        }
    },
        [page, search, isOnSearching],
    );
    useEffect(() => {
        getExpedientes()
    }, [getExpedientes, page])
    const addPagination = () => {
        setPage(nextPage);
        setIsOnSearching(false)
    }
    const handleOnSearch = async (ev) => {
        ev.preventDefault()
        setPage(1)
        setSearch(ev.target.value)
        setIsOnSearching(true)
    }

    return expedientesLoading
        ? <LoaderSkeleton />
        : <>
            <Container key='search'>
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
                        dataExpedientes.map((item, index) => <CardRecord key={index + item._id} data={item} />)
                    }
                </div>
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <IconButton disabled={!hasNextPage} onClick={addPagination}>
                        <AiOutlinePlus size={40} />
                    </IconButton>
                </div>
            </Container>
        </>
}

export default ExpedientesGrid;