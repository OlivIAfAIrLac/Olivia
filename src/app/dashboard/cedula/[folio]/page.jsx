'use client'
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { routes } from "@/helpers/routes";
import { useCallback, useContext, useEffect, useState } from 'react';


import LoaderSkeleton from '@/components/LoaderSkeleton';
import { apiRoutes } from '@/helpers/apiRoutes';
import axios from 'axios';

import { CedulaContext } from '@/app/CedulaProvider';
import { NotificationContext } from '@/app/NotificationProvider';
import { DynamicComponent } from '@/components/dynamicComponents';
import formFields from '@/helpers/formFields';


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
    const { folio } = params;
    const {
        loading,
        dataExpediente,
        setDataExpediente,
        dataCedula,
        setLoading,
        setDataCedula
    } = useContext(CedulaContext)

    const notificationCtx = useContext(NotificationContext)

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
                    setDataCedula(res.data.cedula)
                    setDataExpediente(res.data.expediente)
                    setLoading(false)
                }

            } catch (error) {
                notificationCtx.setError(error)
                notificationCtx.setShowErrorNotification(true)
                console.error(error);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [folio],
    )

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
                                    fecha={dataExpediente.createdAt}
                                    hora={dataExpediente.createdAt}
                                />
                                <span className="font-bold">Folio {dataExpediente.folio}</span>
                                <span className="mb-5">{dataExpediente.nombre}</span>
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
                            : <>
                                <div className="flex flex-col primary-btn w-1/4">
                                    {Object.keys(sidebarOptions).map(renderingButtonOption)}
                                </div>
                                {/* Forms */}
                                <section className="main-bg w-3/4 p-3">
                                    {data[activeData].content.map(block => DynamicComponent(block))}
                                </section>
                            </>
                    }
                    {/* SIDEBAR */}

                </div>
            </Container>
        </div>
    );

}


export default HomeCedula;