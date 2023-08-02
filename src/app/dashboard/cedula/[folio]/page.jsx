'use client'
import { useCallback, useEffect, useState } from 'react'
import Container from "@/components/Container";
import DateTimeDisplayer from "@/components/DateTimeDisplayer";
import PrimaryLinkButton from "@/components/PrimaryLinkButton";
import { routes } from "@/helpers/routes";
import { cedulaData } from "@/mock/apiResponse";

import Components from "@/components/dynamicComponents";
import axios from 'axios';
import { apiRoutes } from '@/helpers/apiRoutes';




const data = [
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
    },
    {
        section: 2,
        content: [
            {
                _uid: "10skk33",
                component: "headline",
                text: "Información general y de contacto"
            },
        ]
    },
    {
        section: 3,
        content: [
            {
                _uid: "10sddkkdd3",
                component: "headline",
                text: "Informacion sociodemográfica"
            },
            {
                _uid: "dskccjf",
                component: "subheadline",
                text: "1. Escolaridad"
            },
            {
                _uid: "1skkk",
                component: "optionsgroup",
                field: "escolaridad",
                options: [
                    { value: 'kinder_o_preescolar', description: 'Kínder o preescolar' },
                    { value: 'primaria', description: 'Primaria' },
                    { value: 'secundaria', description: 'Secundaria' },
                    { value: 'preparatoria_o_bachillerato', description: 'Preparatoria o bachillerato' },
                    { value: 'normal', description: 'Normal' },
                    { value: 'carrera_tecnica_o_comercial', description: 'Carrera técnica o comercial' },
                    { value: 'licenciatura_o_superior', description: 'Licenciatura o superior' },
                    { value: 'posgrado', description: 'Posgrado (maestría o doctorado)' },
                    { value: 'ninguno', description: 'Ninguno' },
                ]
            },
            {
                _uid: "dskjf",
                component: "subheadline",
                text: "Su escolaridad está en:",
                thin: true
            },
            {
                _uid: "1lllkdkkk",
                component: "optionsgroup",
                field: "estatus_escolaridad",
                options: [
                    { value: 'en_curso', description: 'En Curso' },
                    { value: 'terminada', description: 'Terminada' },
                    { value: 'trunca', description: 'Trunca' },
                ]
            },
            {
                _uid: "1skkk",
                component: "optionsgroup",
                field: "escolaridad",
                options: [
                    { value: 'kinder_o_preescolar', description: 'Kínder o preescolar' },
                    { value: 'primaria', description: 'Primaria' },
                    { value: 'secundaria', description: 'Secundaria' },
                    { value: 'preparatoria_o_bachillerato', description: 'Preparatoria o bachillerato' },
                    { value: 'normal', description: 'Normal' },
                    { value: 'carrera_tecnica_o_comercial', description: 'Carrera técnica o comercial' },
                    { value: 'licenciatura_o_superior', description: 'Licenciatura o superior' },
                    { value: 'posgrado', description: 'Posgrado (maestría o doctorado)' },
                    { value: 'ninguno', description: 'Ninguno' },
                ]
            },
            {
                _uid: "dskjf",
                component: "subheadline",
                text: "32. Especificar el tipo de drogas que consume la persona agresora",
            },
            {
                _uid: "1gkk",
                component: "optionsgroup",
                field: "tipo_de_droga",
                options: [
                    { value: 'alcohol', description: 'Alcohol' },
                    { value: 'marihuana', description: 'Marihuana' },
                    { value: 'depresores_del_sistema_nervioso_central_benzos', description: 'Depresores del sistema nervioso central(benzos)' },
                    { value: 'cocaina_crack_ghb', description: 'Cocaína (crack) 5) GHB' },
                    { value: 'alucinogenos', description: 'Alucinógenos' },
                    { value: 'heroina', description: 'Heroína' },
                    { value: 'inhalantes', description: 'Inhalantes' },
                    { value: 'ketamina', description: 'Ketamina' },
                    { value: 'lsd_acidos', description: 'LSD (ácidos)' },
                    { value: 'tabaco', description: 'Tabaco' },
                    { value: 'pcp_angel_dust', description: 'PCP (ángel dust)' },
                    { value: 'mdma_extasis', description: 'MDMA (éxtasis)' },
                    { value: 'mescalina_peyote', description: 'Mescalina (peyote)' },
                    { value: 'metanfetamina_cristal_meth', description: 'Metanfetamina (cristal/meth)' },
                    { value: 'dextrometorfano_dxm', description: 'Dextrometorfano (DXM)' },
                    { value: 'medicamentos_de_venta_libre', description: 'Medicamentos de venta libre' },
                    { value: 'loperamida', description: 'Loperamida' },
                    { value: 'opioides_con_receta_medica_oxy_percs', description: 'Opioides con receta médica (oxy/percs) ' },
                    { value: 'estimulantes_con_receta_medica', description: 'Estimulantes con receta médica' },
                    { value: 'esteroides_anabolicos', description: 'Esteroides (anabólicos)' },
                    { value: 'cannabinoides_sinteticos_k_spice', description: 'Cannabinoides sintéticos (K2/spice)' },
                    { value: 'catinonas_sinteticas_fentanilo', description: 'Catinonas sintéticas' },
                    { value: 'fentanilo', description: 'Fentanilo' }
                ]
            },

        ]
    },
    {
        section: 4,
        content: [
            {
                _uid: "1dkk3",
                component: "headline",
                text: "Datos de empleo"
            },
        ]
    },
    {
        section: 5,
        content: [
            {
                _uid: "1l0sddkk3",
                component: "headline",
                text: "Interseccionalidad"
            },
        ]
    },
    {
        section: 6,
        content: [
            {
                _uid: "1l0sddkk3",
                component: "headline",
                text: "Motivo de la atención"
            },
        ]
    },
    {
        section: 7,
        content: [
            {
                _uid: "1l0sddkk3",
                component: "headline",
                text: "Antecedentes de violencia"
            },
        ]
    },
    {
        section: 8,
        content: [
            {
                _uid: "1llffk3",
                component: "headline",
                text: "Información general de la persona agresora"
            },
            {
                _uid: "subheadline-persona-conocida",
                component: "subheadline",
                text: "1. Persona conocida"
            },
            {
                _uid: "persona-conocida",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [

                    { value: 'si', description: 'Si' },
                    { value: 'no', description: 'No' },
                ]
            },
            {
                _uid: "subheadline-pseudonimo",
                component: "subheadline",
                text: "2. Pseudónimo"
            },
            {
                _uid: "pseudonimo",
                component: "input",
            },
            {
                _uid: "subheadline-nombre-pa",
                component: "subheadline",
                text: "3. Nombre(s)"
            },
            {
                _uid: "nombre",
                component: "input",
            },
            {
                _uid: "subheadline-primer-apellido-pa",
                component: "subheadline",
                text: "4. Primer apellido"
            },
            {
                _uid: "primer_apellido_pa",
                component: "input",
            },
            {
                _uid: "subheadline-segundo-apellido-pa",
                component: "subheadline",
                text: "5. Segundo apellido"
            },
            {
                _uid: "segundo_apellido_pa",
                component: "input",
            },
            {
                _uid: "subheadline-edad-pa",
                component: "subheadline",
                text: "6. Edad"
            },
            {
                _uid: "edad_pa",
                component: "input",
            },
            {
                _uid: "ds``kjf",
                component: "subheadline",
                text: "7. Género ",
            },
            {
                _uid: "1m",
                component: "optionsgroup",
                field: "genero",
                options: [
                    { value: 'cisgenero', description: 'Cisgénero' },
                    { value: 'transgenero', description: 'Transgénero' },
                    { value: 'transexual', description: 'Transexual' },
                    { value: 'genero_fluido', description: 'Género fluido' },
                    { value: 'genero', description: 'Ágenero' },
                    { value: 'persona_no_binaria', description: 'Persona no binaria' },
                    { value: 'prefiero_no_decirlo', description: 'Prefiero no decirlo' },
                    { value: 'otro', description: 'Otro' }
                ]
            },
            {
                _uid: "sexo-pa",
                component: "subheadline",
                text: "8. Sexo ",
            },
            {
                _uid: "sexo_pa",
                component: "optionsgroup",
                field: "sexo_pa",
                options: [
                    { value: 'mujer', description: 'Mujer' },
                    { value: 'hombre', description: 'Hombre' },
                    { value: 'intersexual', description: 'Intersexual' }
                ]
            },
            {
                _uid: "nacionalidad_pa",
                component: "subheadline",
                text: "9. Nacionalidad ",
            },
            {
                _uid: "nacionalidad_pa",
                component: "input",
            },
            {
                _uid: "dskjf",
                component: "subheadline",
                text: "10. Relación de la persona agresora con la víctima: ",
            },
            {
                _uid: "1gkssk",
                component: "optionsgroup",
                field: "tipo_de_relaciones",
                options: [
                    { value: 'madre', description: 'Madre' },
                    { value: 'padre', description: 'Padre' },
                    { value: 'hija', description: 'Hija' },
                    { value: 'hijo', description: 'Hijo' },
                    { value: 'pareja', description: 'Pareja' },
                    { value: 'expareja', description: 'Expareja' },
                    { value: 'c_nyuge', description: 'Cónyuge' },
                    { value: 'suegra', description: 'Suegra' },
                    { value: 'suegro', description: 'Suegro' },
                    { value: 'cuniada', description: 'Cuñada' },
                    { value: 'cuniado', description: 'Cuñado' },
                    { value: 'otro', description: 'Otro' }
                ]
            },
            {
                _uid: "subheadline-tiempo-convivencia_-a",
                component: "subheadline",
                text: "11. Tiempo de convivencia con la persona agresora (años y meses)",
            },
            {
                _uid: "tiempo_convivencia",
                component: "input",
            },
            {
                _uid: "subheadline-direccion-pa",
                component: "subheadline",
                text: "11. Dirección",
            },
            {
                _uid: "subheadline-calle-pa",
                component: "subheadline",
                text: "Calle",
                thin: true
            },
            {
                _uid: "calle_pa",
                component: "input",
            },
            {
                _uid: "numero-exterior-pa",
                component: "subheadline",
                text: "Número exterior",
                thin: true
            },
            {
                _uid: "numero_exterior_pa",
                component: "input",
            },
            {
                _uid: "numero-interior-pa",
                component: "subheadline",
                text: "Número interior",
                thin: true
            },
            {
                _uid: "numero_interior_pa",
                component: "input",
            },
            {
                _uid: "subheadline-letra-exterior-pa",
                component: "subheadline",
                text: "Letra exterior",
                thin: true
            },
            {
                _uid: "letra_exterior_pa",
                component: "input",
            },
            {
                _uid: "subheadline-letra-interior-pa",
                component: "subheadline",
                text: "Letra interior",
                thin: true
            },
            {
                _uid: "letra_interior_pa",
                component: "input",
            },
            {
                _uid: "subheadline-cp-pa",
                component: "subheadline",
                text: "CP",
                thin: true
            },
            {
                _uid: "letra_interior_pa",
                component: "input",
            },
            {
                _uid: "subheadline-referencia-pa",
                component: "subheadline",
                text: "Referencias",
                thin: true
            },
            {
                _uid: "referencias_pa",
                component: "input",
            },
            {
                _uid: "subheadline-estado-pa",
                component: "subheadline",
                text: "Estado",
                thin: true
            },
            {
                _uid: "estado_pa",
                component: "input",
            },
            {
                _uid: "subheadline-municiip-pa",
                component: "subheadline",
                text: "Municipio",
                thin: true
            },
            {
                _uid: "municipio_pa",
                component: "input",
            },
            {
                _uid: "subheadline-colonia-pa",
                component: "subheadline",
                text: "Colonia / localidad",
                thin: true
            },
            {
                _uid: "colonia_pa",
                component: "input",
            },

        ]
    },
    {
        section: 9,
        content: [
            {
                _uid: "1llvvk3",
                component: "headline",
                text: "Infromación sociodemográfica PA"
            },
            {
                _uid: "subheadline-escolaridad-pa",
                component: "subheadline",
                text: "12. Escolaridad"
            },
            {
                _uid: "1skkk",
                component: "optionsgroup",
                field: "escolaridad",
                options: [
                    { value: 'kinder_o_preescolar', description: 'Kínder o preescolar' },
                    { value: 'primaria', description: 'Primaria' },
                    { value: 'secundaria', description: 'Secundaria' },
                    { value: 'preparatoria_o_bachillerato', description: 'Preparatoria o bachillerato' },
                    { value: 'normal', description: 'Normal' },
                    { value: 'carrera_tecnica_o_comercial', description: 'Carrera técnica o comercial' },
                    { value: 'licenciatura_o_superior', description: 'Licenciatura o superior' },
                    { value: 'posgrado', description: 'Posgrado (maestría o doctorado)' },
                    { value: 'ninguno', description: 'Ninguno' },
                ]
            },
            {
                _uid: "d9jf",
                component: "subheadline",
                text: "13. Su escolaridad está en:",

            },
            {
                _uid: "¡kdkkk",
                component: "optionsgroup",
                field: "estatus_escolaridad",
                options: [
                    { value: 'en_curso', description: 'En Curso' },
                    { value: 'terminada', description: 'Terminada' },
                    { value: 'trunca', description: 'Trunca' },
                ]
            },
            {
                _uid: "ds``kjnnbf",
                component: "subheadline",
                text: "14. Ocupación de la persona ",
            },
            {
                _uid: "¡kdkk..k",
                component: "optionsgroup",
                field: "ocupacion",
                options: [
                    { value: 'jornalera_o_albaniil', description: 'Jornalera(o)/albañil' },
                    { value: 'empleada_o_obrera_o', description: 'Empleada(o)/Obrera(o)' },
                    { value: 'labores_del_hogar', description: 'Labores del hogar' },
                    { value: 'estudios', description: 'Estudios' },
                    { value: 'negocio_propio', description: 'Negocio propio' },
                    { value: 'deporte', description: 'Deporte' },
                    { value: 'jubilado_pensionado', description: 'Jubilada(o)/pensionada(o)' },
                    { value: 'ninguna', description: 'Ninguna' },
                    { value: 'otra', description: 'Otra' }
                ]
            },
        ]
    },
    {
        section: 10,
        content: [
            {
                _uid: "1llvvka3",
                component: "headline",
                text: "Rasgos fisicos de la persona agresora"
            },
            {
                _uid: "subheadline-complexion",
                component: "subheadline",
                text: "Complexión",
            },
            {
                _uid: "complexion",
                component: "optionsgroup",
                field: "complexion",
                options: [
                    { value: 'delgada', description: 'Delgada' },
                    { value: 'mediana', description: 'Mediana' },
                    { value: 'atletica', description: 'Atlética' },
                    { value: 'robusta', description: 'Robusta' },
                    { value: 'obesa', description: 'Obesa' }
                ]
            },
            {
                _uid: "subheadline-tez",
                component: "subheadline",
                text: "Tez",
            },
            {
                _uid: "tez",
                component: "optionsgroup",
                field: "tez",
                options: [
                    { value: 'blanca', description: 'Blanca' },
                    { value: 'morena_clara', description: 'Morena clara' },
                    { value: 'morena', description: 'Morena' },
                    { value: 'morena_obscura', description: 'Morena obscura' },
                    { value: 'otra', description: 'Otra' }
                ]
            },
            {
                _uid: "subheadline-color-cabello",
                component: "subheadline",
                text: "Color de cabello",
            },
            {
                _uid: "color-cabello",
                component: "input",
            },
            {
                _uid: "subheadline-tamanio-cabello",
                component: "subheadline",
                text: "Tamaño de cabello",
            },
            {
                _uid: "tamañio_de_cabello",
                component: "optionsgroup",
                field: "tamañio_de_cabello",
                options: [
                    { value: 'largo', description: 'Largo' },
                    { value: 'mediano', description: 'Mediano' },
                    { value: 'corto', description: 'Corto' }
                ]
            },
            {
                _uid: "subheadline-forma-de-cabello",
                component: "subheadline",
                text: "Forma de cabello",
            },
            {
                _uid: "forma_de_cabello",
                component: "optionsgroup",
                field: "forma_de_cabello",
                options: [
                    { value: 'ondulado', description: 'Ondulado' },
                    { value: 'rizado', description: 'Rizado' },
                    { value: 'liso', description: 'Liso' }
                ]
            },
            {
                _uid: "subheadline-nariz",
                component: "subheadline",
                text: "Nariz",
            },
            {
                _uid: "nariz",
                component: "optionsgroup",
                field: "nariz",
                options: [
                    { value: 'recta', description: 'Recta' },
                    { value: 'aplanada', description: 'Aplanada' },
                    { value: 'ancho', description: 'Ancho' }
                ]
            },
            {
                _uid: "subheadline-ojos",
                component: "subheadline",
                text: "Ojos",
            },
            {
                _uid: "ojos",
                component: "optionsgroup",
                field: "ojos",
                options: [
                    { value: 'cafe_claro', description: 'Café claro' },
                    { value: 'cafe', description: 'Café' },
                    { value: 'verdes', description: 'Verdes' },
                    { value: 'azul', description: 'Azul' },
                    { value: 'gris', description: 'Gris' }
                ]
            },
            {
                _uid: "tamanio-de-ojos",
                component: "subheadline",
                text: "Tamaño de ojos",
            },
            {
                _uid: "tamanio_ojos",
                component: "optionsgroup",
                field: "tamanio_ojos",
                options: [
                    { value: 'pequenios', description: 'Pequeños' },
                    { value: 'medianos', description: 'Medianos' },
                    { value: 'grandes', description: 'Grandes' }
                ]
            },
            {
                _uid: "subheadline-forma-ojos",
                component: "subheadline",
                text: "Forma de ojos",
            },
            {
                _uid: "forma_ojos",
                component: "optionsgroup",
                field: "forma_ojos",
                options: [
                    { value: 'saltones', description: 'Saltones' },
                    { value: 'redondos', description: 'redondos' },
                    { value: 'alargados', description: 'Alargados' },
                    { value: 'oblicuos', description: 'oblicuos' },
                    { value: 'hundidos', description: 'hundidos' }
                ]
            },
            {
                _uid: "subheadline-estado-físico",
                component: "subheadline",
                text: "Estado físico de la persona agresora",
            },
            {
                _uid: "estado_fisico",
                component: "optionsgroup",
                field: "estado_fisico",
                options: [
                    { value: 'bueno', description: 'Bueno' },
                    { value: 'malo', description: 'Malo' },
                    { value: 'regular', description: 'Regular' }
                ]
            },
            {
                _uid: "subheadline-estado-físico-descripcion",
                component: "subheadline",
                text: "Especifique",
                thin: true
            },
            {
                _uid: "estado_fisico_descripcion",
                component: "input",
            },
            {
                _uid: "subheadline-forma-cara",
                component: "subheadline",
                text: "Forma de la cara",
            },
            {
                _uid: "forma_cara",
                component: "input",
            },
            {
                _uid: "subheadline-cejas",
                component: "subheadline",
                text: "Tipo de cejas",
            },
            {
                _uid: "cejas",
                component: "input",
            },
            {
                _uid: "subheadline-senias-particulares",
                component: "subheadline",
                text: "Señas particulares",
            },

            {
                _uid: "senias_particulares_false",
                component: "checkbox",
                text: "No"
            },
            {
                _uid: "senias_particulares",
                component: "fullwidthinput",
                checkboxText: "Si",
                inputText: "Especificar"
            },
            {
                _uid: "tatuajes",
                component: "fullwidthinput",
                checkboxText: "Tatuajes",
                inputText: "Especifique lugar y forma"
            },
            {
                _uid: "lunares",
                component: "fullwidthinput",
                checkboxText: "Lunares",
                inputText: "Especifique lugar y forma"
            },
            {
                _uid: "lesiones",
                component: "fullwidthinput",
                checkboxText: "Lesiones",
                inputText: "Especifique lugar y forma"
            },
            {
                _uid: "barba",
                component: "fullwidthinput",
                checkboxText: "Barba",
                inputText: "Especifique forma"
            },
            {
                _uid: "bigote",
                component: "fullwidthinput",
                checkboxText: "Bigote",
                inputText: "Especifique forma"
            },
            {
                _uid: "cicatrices",
                component: "fullwidthinput",
                checkboxText: "Cicatrices",
                inputText: "Especifique lugar"
            },


        ]
    },
    {
        section: 11,
        content: [
            {
                _uid: "1llvvk3",
                component: "headline",
                text: "Rasgos fisicos de la persona agresora"
            },
        ]
    },
    {
        section: 12,
        content: [
            {
                _uid: "1llvvk3",
                component: "headline",
                text: "Trabajo social"
            },
        ]
    },
    {
        section: 13,
        content: [
            {
                _uid: "1llvvk3",
                component: "headline",
                text: "Atención psicológica"
            },
        ]
    },
    {
        section: 14,
        content: [
            {
                _uid: "1l9k3",
                component: "headline",
                text: "Atención jurídica"
            },
        ]
    },
    {
        section: 15,
        content: [
            {
                _uid: "1l9k3dd",
                component: "headline",
                text: "Clasificación de violencia"
            },
        ]
    },
    {
        section: 16,
        content: [
            {
                _uid: "1l9k3aadd",
                component: "headline",
                text: "Acciones realizadas"
            },
        ]
    },
]



const menuOptions = {
    0: { label: "información del expediente", active: true },
    1: { label: "requerimientos especificos", active: false },
    2: { label: "información general del contacto", active: false },
    3: { label: "informacion sociodemográfica", active: false },
    4: { label: "motivo de la atención", active: false },
    // 4: { label: "datos de empleo", active: false },
    // 5: { label: "interseccionalidad", active: false },
    5: { label: "antecedentes de violencia", active: false },
    6: { label: "información general de la persona agresora", active: false },
    // 9: { label: "infromación sociodemográfica PA", active: false },
    // 10: { label: "rasgos fisicos de la persona agresora", active: false },
    // 11: { label: "red de apoyo", active: false },
    // 12: { label: "trabajo social", active: false },
    // 13: { label: "atención psicológica", active: false },
    // 14: { label: "atención jurídica", active: false },
    // 15: { label: "clasificación de violencia", active: false },
    // 16: { label: "acciones realizadas", active: false },
}


const HomeCedula = ({ params, searchParams }) => {
    /* FOLIO => EXPEDIENTE_ID */

    const { folio } = params;
    /* TODO:REOMVE MOCKUP AFTER MAP */
    const {
        expediente,
        cedula
    } = cedulaData;

    const [sidebarOptions, setSidebarOptions] = useState(menuOptions)
    const [activeData, setActiveData] = useState(searchParams.activeSection ?? 0)

    const renderingButtonOption = (item) => {
        const { active, label } = sidebarOptions[item];
        return <button
            key={item}
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
                    console.log(res.data);
                }

            } catch (error) {
                /* TODO: Hanlde error message */
                console.error(error);
            }
        },
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
                    <DateTimeDisplayer
                        fecha={expediente.fecha}
                        hora={expediente.hora}
                    />
                    <span className="font-bold">Folio {expediente.folio}</span>
                    <span className="mb-5">{expediente.nombre}</span>
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