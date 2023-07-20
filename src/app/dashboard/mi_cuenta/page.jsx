'use client'
import Container from "@/components/Container";
import ExpedientesGrid from "@/components/ExpedientesGrid";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import UserProfile from "@/components/UserProfile";
import UserStadistics, { StadisticPod } from "@/components/UserStadistics";
import { apiRoutes } from "@/helpers/apiRoutes";
import { userRole } from "@/helpers/usersRole";
import { dataExpedientes, dataEstadisticasPerfil } from "@/mock/apiResponse";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";


const HomeProfile = () => {
    const { data, status } = useSession()
    const [dataExpedientes, setDataExpedientes] = useState([])
    const [expedientesLoading, setExpedientesLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null)
    const [page, setPage] = useState(1)
    const token = data?.user.token

    const getExpedientes = useCallback(async () => {
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const res = await axios.get(`${apiRoutes.EXPEDIENTE}?page=${page}`, config);
            if (res.status === 200) {
                setExpedientesLoading(false)
                setDataExpedientes([...dataExpedientes, ...res.data.docs])
                setNextPage(res.data.nextPage)
              }

        } catch (error) {
            console.error(error);
        }
    },
        [token, page],
    );
    useEffect(() => {
        status !== 'loading' && getExpedientes()
    }, [getExpedientes, status, page])

    const addPagination = () => {
        setPage(nextPage);
    }

    const handleOnSearch = async (ev) => {
        ev.preventDefault()
        const search = ev.target.value
        try {
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const res = await axios.get(`${apiRoutes.EXPEDIENTE}?page=${page}&search=${search}`, config);
            if (res.status === 200) {
                setDataExpedientes([...res.data.docs])
                setNextPage(res.data.nextPage)
            }
        } catch (error) {
            console.error(error);
        }
    }

    /* TODO: get this data from fetch*/
    const {
        totalPersonasAtendidas,
        riesgo,
    } = dataEstadisticasPerfil;
    const {
        eventual,
        acrecentado,
        severo,
        extremo
    } = riesgo;
    return (
        <section className="mt-4">
            <Container>
                <div className="container flex flex-col login-bg p-8">
                    {status === 'loading'
                        ? <LoaderSkeleton />
                        : <UserProfile data={data} />
                    }
                </div>
                <UserStadistics
                    totalPersonasAtendidas={totalPersonasAtendidas}
                    eventual={eventual}
                    acrecentado={acrecentado}
                    severo={severo}
                    extremo={extremo}
                />
            </Container>
            {/* cards */}
            {expedientesLoading
                ? <LoaderSkeleton />
                : <ExpedientesGrid
                    handleOnSearch={handleOnSearch}
                    nextPage={nextPage}
                    addPagination={addPagination}
                    data={dataExpedientes}
                />
            }
        </section>
    );
}



export default HomeProfile;