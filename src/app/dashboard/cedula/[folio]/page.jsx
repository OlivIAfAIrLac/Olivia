'use client'
import { useCallback, useContext, useEffect, useState } from 'react'
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { routes } from "@/helpers/routes";

import Components, { DynamicComponent } from "@/components/dynamicComponents";
import axios from 'axios';
import { apiRoutes } from '@/helpers/apiRoutes';
import LoaderSkeleton from '@/components/LoaderSkeleton';

import formFields from '@/helpers/formFields';
import CedulaProvider, { CedulaContext } from '@/app/CedulaProvider';


const data = formFields;


const menuOptions = {
    0: { label: "información del expediente", active: true },
    1: { label: "requerimientos especificos", active: false },
    2: { label: "información general del contacto", active: false },
    3: { label: "informacion sociodemográfica", active: false },
    4: { label: "motivo de la atención", active: false },
    5: { label: "antecedentes de violencia", active: false },
    6: { label: "información general de la persona agresora", active: false },
}


const HomeCedula = ({ params, searchParams }) => {
    /* FOLIO => EXPEDIENTE_ID */
    const [dataCedula, setDataCedula] = useState()
    const [loading, setLoading] = useState(true)
    const { folio } = params;


    const [sidebarOptions, setSidebarOptions] = useState(menuOptions)
    const [activeData, setActiveData] = useState(searchParams.activeSection ?? 0)

    const renderingButtonOption = (item, index) => {
        const { active, label } = sidebarOptions[item];
        return <button
            key={item + index}
            className={`${active && 'main-bg'} border-x-2 border-t-2 last:border-b-2 border-color-primary px-4 py-2 text-left font-bold capitalize h-16`}
            onClick={() => setActiveOption(item)}
        >
            {`${item}. ${label}`}
        </button>
    }
    const setActiveOption = (item) => {
        const newOptions = { ...sidebarOptions }
        Object.keys(newOptions).forEach((option) => {
            newOptions[option].active = false;
        })
        newOptions[item].active = true;
        setSidebarOptions(newOptions);
        setActiveData(item)

    }


    const getDataCedula = useCallback(
        async () => {
            try {
                const res = await axios.get(`${apiRoutes.CEDULA}/${folio}`);
                if (res.status === 200) {
                    /* TODO: add to some DATA State */
                    setLoading(false)
                    setDataCedula(res.data)
                    localStorage.setItem("cedula", JSON.stringify(res.data));
                }

            } catch (error) {
                /* TODO: Hanlde error message */
                console.error(error);
            }
        },
        [folio],
    )

    const sendDataCedula = () => {
        console.log(JSON.parse(localStorage.getItem("cedula")))
    }

    useEffect(() => {
        getDataCedula()
    }, [getDataCedula])


    return (
        <div className="login-bg pb-10">
            <Container>
                <span className="mt-10 mb-4">Cédula</span>
                <div className="p-6 main-bg flex flex-col">
                    {
                        loading
                            ? <LoaderSkeleton />
                            : <>
                                <DateTimeDisplayer
                                    fecha={dataCedula.expediente.fecha}
                                    hora={dataCedula.expediente.hora}
                                />
                                <span className="font-bold">Folio {dataCedula.expediente.folio}</span>
                                <span className="mb-5">{dataCedula.expediente.nombre}</span>
                                {/* Button GRID container */}
                                <div className="grid grid-flow-col gap-5 text-center">
                                    <PrimaryLinkButton
                                        href={`${routes.dashboard.expediente}/${folio}`}
                                    >
                                        Expediente
                                    </PrimaryLinkButton>
                                    <PrimaryLinkButton
                                        href={routes.dashboard.sabana}
                                    >
                                        Sábana
                                    </PrimaryLinkButton>
                                </div>
                            </>}
                </div>

                {/* Expediente Section */}

                <div className="mt-5 flex flex-row">
                    {
                        loading
                            ? <LoaderSkeleton />
                            : <CedulaProvider>
                                <div className="flex flex-col primary-btn w-1/4">
                                    {Object.keys(sidebarOptions).map(renderingButtonOption)}
                                </div>
                                {/* Forms */}
                                <section className="main-bg w-3/4 p-3">
                                    {data[activeData].content.map(block => DynamicComponent(block))}
                                </section>
                            </CedulaProvider>
                    }
                    {/* SIDEBAR */}

                </div>
            </Container>
            <button className="mt-3 m-auto block primary-btn px-3 py-1" onClick={sendDataCedula}>SUBMIT</button>
        </div>
    );

}


export default HomeCedula;