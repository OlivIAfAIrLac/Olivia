'use client'
import { useState } from 'react'
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { routes } from "@/helpers/routes";
import { cedulaData } from "@/mock/apiResponse";

const menuOptions = {
    0: { label: "información del expediente", active: true },
    1: { label: "requerimientos especificos", active: false },
    2: { label: "información general del contacto", active: false },
    3: { label: "informacion sociodemográfica", active: false },
    4: { label: "datos de empleo", active: false },
    5: { label: "innterseccionalidad", active: false },
    6: { label: "motivo de la atención", active: false },
    7: { label: "antecedentes de violencia", active: false },
    8: { label: "información general de la persona agresora", active: false },
    9: { label: "infromación sociodemográfica PA", active: false },
    10: { label: "rasgos fisicos de la persona agresora", active: false },
    11: { label: "red de apoyo", active: false },
    12: { label: "trabajo social", active: false },
    13: { label: "atención psicológica", active: false },
    14: { label: "atención jurídica", active: false },
    15: { label: "clasificación de violencia", active: false },
    16: { label: "acciones realizadas", active: false },
}


const HomeCedula = ({ params }) => {
    const { folio } = params;
    const {
        nombre,
        fecha,
        hora,
    } = cedulaData;

    const [sidebarOptions, setSidebarOptions] = useState(menuOptions)

    const renderingButtonOption = (item) => {
        const { active, label } = sidebarOptions[item];
        return <button
            key={item}
            className={`${active && 'main-bg'} border-2 border-color-primary px-4 py-2 text-left font-bold capitalize h-16`}
            onClick={()=>setActiveOption()}
        >
            {`${item}. ${label}`}
        </button>
    }

    const setActiveOption=()=>{

    }

    return (
        <div className="login-bg pb-10">
            <Container>
                <span className="mt-10 mb-4">Cédula</span>
                <div className="p-6 main-bg flex flex-col">
                    <DateTimeDisplayer
                        fecha={fecha}
                        hora={hora}
                    />
                    <span className="font-bold">Folio {folio}</span>
                    <span className="mb-5">{nombre}</span>
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
                </div>
                {/* Expediente Section */}
                <div className="mt-5 flex flex-row">
                    {/* SIDEBAR */}
                    <div className="flex flex-col primary-btn w-1/4">
                        {Object.keys(sidebarOptions).map(renderingButtonOption)}
                    </div>
                    {/* Forms */}
                    <section className="main-bg w-3/4 p-3">
                        lorem
                    </section>
                </div>
            </Container>
        </div>
    );

}


export default HomeCedula;