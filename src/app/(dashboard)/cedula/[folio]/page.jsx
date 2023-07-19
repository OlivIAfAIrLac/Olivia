'use client'
import { useState } from 'react'
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { routes } from "@/helpers/routes";
import { cedulaData } from "@/mock/apiResponse";

import Components from "@/components/components";


const data =  [
        {
            section: 0,
            content: [
                {
                    _uid: "1",
                    component: "headline",
                    text: "Información del Expediente"
                },
                {
                    _uid: "2",
                    component: "subheadline",
                    text: "1. Área que atiende."
                },
                {
                    _uid: "3",
                    component: "checkbox",
                    text: "Psicología"
                }, 
                {
                    _uid: "4",
                    component: "checkbox",
                    text: "Juridíco"
                }, 
                {
                    _uid: "5",
                    component: "checkbox",
                    text: "Trabajo Social"
                }, 
                {
                    _uid: "6",
                    component: "checkbox",
                    text: "Ministerial"
                }, 
                {
                    _uid: "7",
                    component: "checkbox",
                    text: "Pericial"
                },
                {
                    _uid: "8",
                    component: "checkbox",
                    text: "Consejería"
                },
                {
                    _uid: "124",
                    component: "fullwidthinput",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?"
                },
                {
                    _uid: "10",
                    component: "subheadline",
                    text: "2. Tipo de Asesoría."
                },
                {
                    _uid: "11",
                    component: "checkbox",
                    text: "Presencial"
                },
                {
                    _uid: "12",
                    component: "checkbox",
                    text: "Telefónica"
                },
                {
                    _uid: "123",
                    component: "fullwidthinput",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?"
                },
                {
                    _uid: "1033",
                    component: "subheadline",
                    text: "3. ¿Quién atiende?"
                },
                {
                    _uid: "2553",
                    component: "select",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?",
                    options: ["Parentesco"]
                },
                {
                    _uid: "23",
                    component: "fullwidthinput",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?"
                },
                {
                    _uid: "10s33",
                    component: "subheadline",
                    text: "4. Expediente BANAVIM"
                },
            ]
        }, 
        {
            section: 1,
            content: [
                {
                    _uid: "1",
                    component: "headline",
                    text: "Requerimientos Específicos"
                },
                {
                    _uid: "2",
                    component: "subheadline",
                    text: "1. Segunda sección."
                },
                {
                    _uid: "3",
                    component: "checkbox",
                    text: "Psicología"
                }, 
                {
                    _uid: "4",
                    component: "checkbox",
                    text: "Juridíco"
                }, 
                {
                    _uid: "5",
                    component: "checkbox",
                    text: "Trabajo Social"
                }, 
                {
                    _uid: "6",
                    component: "checkbox",
                    text: "Ministerial"
                }, 
                {
                    _uid: "7",
                    component: "checkbox",
                    text: "Pericial"
                },
                {
                    _uid: "8",
                    component: "checkbox",
                    text: "Consejería"
                },
                {
                    _uid: "124",
                    component: "fullwidthinput",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?"
                },
                {
                    _uid: "10",
                    component: "subheadline",
                    text: "2. Tipo de Asesoría."
                },
                {
                    _uid: "11",
                    component: "checkbox",
                    text: "Presencial"
                },
                {
                    _uid: "12",
                    component: "checkbox",
                    text: "Telefónica"
                },
                {
                    _uid: "123",
                    component: "fullwidthinput",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?"
                },
                {
                    _uid: "1033",
                    component: "subheadline",
                    text: "3. ¿Quién atiende?"
                },
                {
                    _uid: "2553",
                    component: "select",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?",
                    options: ["Parentesco"]
                },
                {
                    _uid: "23",
                    component: "fullwidthinput",
                    checkboxText: "Otra",
                    inputText: "¿Cuál?"
                },
                {
                    _uid: "10s33",
                    component: "subheadline",
                    text: "4. Expediente BANAVIM"
                },
            ]
        }
    ]
        


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
    const [activeData, setActiveData] = useState(0)

    const renderingButtonOption = (item) => {
        const { active, label } = sidebarOptions[item];
        return <button
            key={item}
            className={`${active && 'main-bg'} border-2 border-color-primary px-4 py-2 text-left font-bold capitalize h-16`}
            onClick={()=>setActiveOption(item)}
        >
            {`${item}. ${label}`}
        </button>
    }

    const setActiveOption = (item)=>{
        const newOptions = {...sidebarOptions}
        Object.keys(newOptions).forEach((option) => {
            newOptions[option].active = false;
        })
        newOptions[item].active = true;
        setSidebarOptions(newOptions);
        setActiveData(item)
        
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
                        
                        {data[activeData].content.map(block => Components(block))}


                    </section>
                </div>
            </Container>
        </div>
    );

}


export default HomeCedula;