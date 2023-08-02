'use client'
import Container from "@/components/Container";
import ExpedientesGrid from "@/components/ExpedientesGrid";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import UserProfile from "@/components/UserProfile";
import UserStadistics, { StadisticPod } from "@/components/UserStadistics";
import { dataEstadisticasPerfil } from "@/mock/apiResponse";
import { useSession } from "next-auth/react";


const HomeProfile = () => {
    const { data, status } = useSession()
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
                {/* <UserStadistics
                    totalPersonasAtendidas={totalPersonasAtendidas}
                    eventual={eventual}
                    acrecentado={acrecentado}
                    severo={severo}
                    extremo={extremo}
                /> */}
            </Container>
            {/* cards */}
            <ExpedientesGrid />
        </section>
    );
}



export default HomeProfile;