'use client'

import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import Input from "@/components/Input";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { routes } from "@/helpers/routes";
import Link from "next/link";
import { useState } from 'react';

const HomeNuevoExpediente = () => {
    /* TODO: remover comportamiento mocked */
    const [expedienteCreated, setExpedienteCreated] = useState(false)
    return (
        <section className="h-screen h-81vh ">
            <div className="container max-w-2xl relative flex flex-col top-14">
                <span className="left-0 mb-4">
                    {
                        !expedienteCreated
                            ? "Ingresa CURP o nombre"
                            : "Has creado un nuevo expediente"
                    }
                </span>
                <div className="px-4 py-3 login-bg ">
                    <div className="flex flex-col items-center justify-center">
                        {
                            !expedienteCreated
                                ? <form className="mt-4 mb-2 w-full">
                                    <div className="mb-4 flex flex-col">
                                        <h1 >
                                            CURP
                                        </h1>
                                        <Input placeholder="CURP..." />
                                        <h1 className="mt-3">
                                            Nombre
                                        </h1>
                                        <Input placeholder="Nombre..." />
                                    </div>
                                </form>

                                : <div className="mt-4 mb-2 w-full">
                                    <div className="mb-4 flex flex-col">
                                        <DateTimeDisplayer
                                            fecha="12/09/2023"
                                            hora="13:00"
                                        />
                                        <h1 className="mt-0 font-bold">
                                            Folio 321
                                        </h1>
                                        <h1 className="mt-3 capitalize">
                                            maria fernanda lopez chavez
                                        </h1>
                                    </div>
                                    <div className="grid grid-flow-col gap-3 text-center">
                                        {/* TODO: add folio after created */}
                                        <PrimaryLinkButton
                                            href={`${routes.dashboard.expediente}/1111427`}
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
                    <button className="primary-btn capitalize py-3 w-1/2 mt-5"
                        onClick={() => setExpedienteCreated(!expedienteCreated)}
                    >
                        {
                            !expedienteCreated
                                ? "crear expediente"
                                : "nuevo expediente"

                        }
                    </button>
                </div>
            </div>
        </section>


    );
}

export default HomeNuevoExpediente;