const UserStadistics = ({
    eventual,
    acrecentado,
    severo,
    extremo,
    totalPersonasAtendidas
}) => {
    return (

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
    );
}

export default UserStadistics;

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