'use client'
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import Input from "@/components/Input";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { apiRoutes } from "@/helpers/apiRoutes";
import { routes } from "@/helpers/routes";
import { dataExpedientes } from "@/mock/apiResponse";
import axios from "axios";
import { useState } from 'react';
const newExpediente = {
    nombre: '',
    curp: ''
}

const HomeNuevoExpediente = () => {
    const [expedienteData, setExpedienteData] = useState(newExpediente)
    const [expedienteIsCreated, setExpedienteIsCreated] = useState(false)
    const [expedienteCreated, setExpedienteCreated] = useState()

    const handleCrearExpediente = async (e) => {
        e.preventDefault(); try {
            const res = await axios.post(apiRoutes.EXPEDIENTE, { ...expedienteData })
            if (res.status === 200) {
                setExpedienteCreated(res.data)
                setExpedienteIsCreated(true)
            }
        } catch (error) {
            /* TODO: Handle error messages */
            console.error(error);
        }
    }

    const handleNuevoExpediente = () => {
        setExpedienteIsCreated(false)
        setExpedienteData(newExpediente)
    }

    const handleChange = (e) => {
        e.preventDefault()
        setExpedienteData({
            ...expedienteData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="h-screen h-81vh ">
            <div className="container max-w-2xl relative flex flex-col top-14">
                <span className="left-0 mb-4">
                    {
                        !expedienteIsCreated
                            ? "Ingresa CURP o nombre"
                            : "Has creado un nuevo expediente"
                    }
                </span>
                <div className="px-4 py-3 login-bg ">
                    <div className="flex flex-col items-center justify-center">
                        {
                            !expedienteIsCreated
                                ? <form className="mt-4 mb-2 w-full">
                                    <div className="mb-4 flex flex-col">
                                        <h1>
                                            CURP
                                        </h1>
                                        <Input
                                            className='uppercase'
                                            name='curp'
                                            value={dataExpedientes.curp}
                                            onChange={handleChange}
                                            placeholder="CURP..."
                                        />
                                        <h1 className="mt-3">
                                            Nombre
                                        </h1>
                                        <Input
                                            className='capitalize'
                                            name='nombre'
                                            value={dataExpedientes.nombre}
                                            onChange={handleChange}
                                            placeholder="Nombre..."
                                        />
                                    </div>
                                </form>

                                : <div className="mt-4 mb-2 w-full">
                                    <div className="mb-4 flex flex-col">
                                        <DateTimeDisplayer
                                            timeStamp={expedienteCreated.expediente.createdAt}
                                        />
                                        <h1 className="mt-0 font-bold">
                                            Folio {expedienteCreated.expediente.folio}
                                        </h1>
                                        <h1 className="mt-3 capitalize">
                                            {expedienteCreated.expediente.nombre}
                                        </h1>
                                    </div>
                                    <div className="grid grid-flow-col gap-3 text-center">
                                        {/* TODO: add folio after created */}
                                        <PrimaryLinkButton
                                            href={`${routes.dashboard.expediente}/${expedienteCreated.expediente._id}`}
                                        >
                                            ver expediente
                                        </PrimaryLinkButton>
                                        <PrimaryLinkButton
                                            href={routes.dashboard.main}
                                        >
                                            más expedientes
                                        </PrimaryLinkButton>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-4">
                    {!expedienteIsCreated
                        ? <button className="primary-btn capitalize py-3 w-1/2 mt-5"
                            onClick={handleCrearExpediente}
                        >
                            crear expediente
                        </button>
                        : <button className="primary-btn capitalize py-3 w-1/2 mt-5"
                            onClick={handleNuevoExpediente}
                        >
                            nuevo expediente
                        </button>
                    }
                </div>
            </div>
        </section>


    );
}

export default HomeNuevoExpediente;