'use client'
import Container from "@/components/Container";
import ExpedientesGrid from "@/components/ExpedientesGrid";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import { userRole } from "@/helpers/usersRole";
import { dataExpedientes, dataEstadisticasPerfil } from "@/mock/apiResponse";
import { useSession } from "next-auth/react";


const HomeProfile = () => {
    const { data, status } = useSession()

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
                        : <>
                            <span className="font-bold mb-2">{data?.user.nombre}</span>
                            <span className="capitalize">{data?.user.profesion}</span>
                            <span>{data?.user.unidad}</span>
                            <span>{data?.user.email}</span>
                            <span>{data?.user.telefono} Ext.{data?.user.extension}</span>
                            <span className="capitalize">{userRole[data?.user.rol]}</span>
                        </>
                    }
                </div>

                <div className="container login-bg mt-4 flex flex-col p-8">
                    <span className="font-bold">
                        Estadisticas</span>
                    <span>
                        Total de Personas Atendidas:  {totalPersonasAtendidas}
                    </span>
                    <div className="grid grid-flow-col justify-center gap-28 mt-6">
                        <StadisticPod
                            risk="eventual"
                            data={eventual}
                        />
                        <StadisticPod
                            risk="acrecentado"
                            data={acrecentado}
                        />
                        <StadisticPod
                            risk="severo"
                            data={severo}
                        />
                        <StadisticPod
                            risk="extremo"
                            data={extremo}
                        />
                    </div>
                </div>
            </Container>
            {/* cards */}
            <ExpedientesGrid data={dataExpedientes} />
        </section >
    );
}

const StadisticPod = ({ risk, data }) => {
    const riesgo = {
        eventual: "bg-riesgo-eventual",
        acrecentado: "bg-riesgo-acrecentado",
        severo: "bg-riesgo-severo",
        extremo: "bg-riesgo-extremo",
    };
    return <div className="flex flex-col justify-center items-center text-center" >
        <span className={`${riesgo[risk]} rounded-full p-4`}>
            {data}
        </span>
        <span className="capitalize">
            Riesgo {risk}
        </span>
    </div>
}

export default HomeProfile;