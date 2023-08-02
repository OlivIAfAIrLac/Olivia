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
                _uid: "area_que_atiende",
                component: "optionsgroup",
                field: "area_que_atiende",
                options: [
                    { description: "Trabajo social", value: "trabajo_social" },
                    { description: "Psicología", value: "psicologia" },
                    { description: "Jurídico", value: "juridico" },
                    { description: "Otro", value: "otro" },
                ]
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
            {
                _uid: "banavim",
                component: "input",
            },
            {
                _uid: "dddfff",
                component: "subheadline",
                text: "Horario del término de atención"
            },
            {
                _uid: "horario",
                component: "input",
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
                _uid: "headline-informacion-sociodemografica",
                component: "headline",
                text: "Informacion sociodemográfica"
            },
            {
                _uid: "escolaridad-v",
                component: "subheadline",
                text: "1. Escolaridad"
            },
            {
                _uid: "III_escolaridad",
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
                _uid: "subheadline-status-escolaridad-v",
                component: "subheadline",
                text: "Su escolaridad está en:",
                thin: true
            },
            {
                _uid: "III_su_escolaridad_esta_en",
                component: "optionsgroup",
                field: "estatus_escolaridad",
                options: [
                    { value: 'en_curso', description: 'En Curso' },
                    { value: 'terminada', description: 'Terminada' },
                    { value: 'trunca', description: 'Trunca' },
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
                text: "Motivo de la atención"
            },
            {
                _uid: "subheadline-contexto",
                component: "subheadline",
                text: "Contexto (causa y evolución)"
            },
            {
                _uid: "IV_contexto_causa_y_evolucion",
                component: "textarea",
            },
            {
                _uid: "subheadline-ha-sido-atendida",
                component: "subheadline",
                text: "¿Ha tenido que ser atendida en una institución médica o por personal médico como consecuencia de un evento de violencia con la persona agresora?"
            },
            {
                _uid: "IV_ha_tenido_que_ser_atendida_en_una_institucion_medica_o_por_personal_medico_como_consecuencia_de_un_evento_de_violencia_con_la_persona_agresora",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "subheadline-ultimo-episodio",
                component: "subheadline",
                text: "Último episodio de violencia"
            },
            {
                _uid: "subheadline-reciente",
                component: "subheadline",
                text: "Reciente"
            },
            {
                _uid: "IV_ultimo_episodio_de_violencia_reciente",
                component: "optionsgroup",
                field: "IV_ultimo_episodio_de_violencia_reciente",
                options: [
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "subheadline-cuando-episodio",
                component: "subheadline",
                text: "¿Cuándo?"
            },
            {
                _uid: "IV_ultimo_episodio_de_violencia",
                component: "optionsgroup",
                field: "IV_ultimo_episodio_de_violencia",
                options: [
                    { value: 'menos_de_1_mes', description: 'Menos de 1 mes' },
                    { value: 'de_1_mes_a_3_meses', description: 'De 1 mes a 3 meses' },
                    { value: 'de_3_meses_a_6_meses', description: 'De 3 meses a 6 meses' },
                    { value: 'de_6_meses_a_un_anio', description: 'De 6 meses a un año' },
                    { value: 'otra', description: 'Otra' },
                ]
            },
            {
                _uid: "subheadline-acciones-intentos-solucion",
                component: "subheadline",
                text: "Acciones o intentos de solución realizados"
            },
            {
                _uid: "IV_acciones_o_intentos_de_solucion_realizados",
                component: "textarea",
            },
            {
                _uid: "subheadline-personas-involucradas",
                component: "subheadline",
                text: "Personas involucradas en la situación:"
            },
            {
                _uid: "IV_personas_involucradas_en_la_situacion",
                component: "textarea",
            },
        ]
    },
    {
        section: 5,
        content: [
            {
                _uid: "1l0sddkk3",
                component: "headline",
                text: "Antecedentes de violencia"
            },
            {
                _uid: "subheadline-contexto-5",
                component: "subheadline",
                text: "Contexto (causa y evolución)"
            },
            {
                _uid: "V_contexto_causa_y_evolucion",
                component: "textarea",
            },
            {
                _uid: "subheadline-acciones-intentos-solucion-5",
                component: "subheadline",
                text: "Acciones o intentos de solución realizados"
            },
            {
                _uid: "V_acciones_o_intentos_de_solucion_realizados",
                component: "textarea",
            },
            {
                _uid: "subheadline-personas-involucradas-5",
                component: "subheadline",
                text: "Personas involucradas en la situación:"
            },
            {
                _uid: "V_personas_involucradas_en_la_situacion",
                component: "textarea",
            },
            {
                _uid: "subheadline-redes-de-apoyo",
                component: "subheadline",
                text: "Redes de apoyo y tipo de apoyo que se proporcionó"
            },
            {
                _uid: "V_redes_de_apoyo_y_tipo_de_apoyo_que_se_proporciono",
                component: "textarea",
            },
            {
                _uid: "subheadline-recurrio-institucion",
                component: "subheadline",
                text: "Recurrió a alguna institución para pedir apoyo:"
            },
            {
                _uid: "V_recurrio_a_alguna_institucion_para_pedir_apoyo",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [

                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "subheadline-recurrio-institucion-especificar",
                component: "subheadline",
                text: "Especificar"
            },
            {
                _uid: "V_recurrio_a_alguna_institucion_especificar",
                component: "input",
            },
            {
                _uid: "subheadline-cuenta-expediente",
                component: "subheadline",
                text: "Cuenta con expediente de atención:"
            },
            {
                _uid: "V_cuenta_con_expediente_de_atencion",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [

                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "V_cuenta_con_expediente_de_atencion_especificar",
                component: "input",
            },
        ]
    },
    {
        section: 6,
        content: [
            {
                _uid: "headline-persona-agresora",
                component: "headline",
                text: "Información general de la persona agresora"
            },
            {
                _uid: "subheadline-persona-conocida",
                component: "subheadline",
                text: "1. Persona conocida"
            },
            {
                _uid: "VI_persona_conocida_o_desconocida",
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
                _uid: "VI_pseudonimo",
                component: "input",
            },
            {
                _uid: "subheadline-nombre-pa",
                component: "subheadline",
                text: "3. Nombre(s)"
            },
            {
                _uid: "VI_nombre",
                component: "input",
            },
            {
                _uid: "subheadline-primer-apellido-pa",
                component: "subheadline",
                text: "4. Primer apellido"
            },
            {
                _uid: "VI_primer_apellido",
                component: "input",
            },
            {
                _uid: "subheadline-segundo-apellido-pa",
                component: "subheadline",
                text: "5. Segundo apellido"
            },
            {
                _uid: "VI_segundo_apellido",
                component: "input",
            },
            {
                _uid: "subheadline-edad-pa",
                component: "subheadline",
                text: "6. Edad"
            },
            {
                _uid: "VI_edad",
                component: "input",
            },
            {
                _uid: "ds``kjf",
                component: "subheadline",
                text: "7. Género ",
            },
            {
                _uid: "VI_genero",
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
                _uid: "VI_sexo",
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
                _uid: "VI_nacionalidad",
                component: "input",
            },
            {
                _uid: "dskhhhjf",
                component: "subheadline",
                text: "10. Relación de la persona agresora con la víctima: ",
            },
            {
                _uid: "VI_relacion_con_la_persona_agresora",
                component: "optionsgroup",
                field: "VI_relacion_con_la_persona_agresora",
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
                _uid: "VI_tiempo_de_convivencia_con_la_persona_agresora_anios_y_meses",
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
                _uid: "VI_calle",
                component: "input",
            },
            {
                _uid: "numero-exterior-pa",
                component: "subheadline",
                text: "Número exterior",
                thin: true
            },
            {
                _uid: "VI_numero_exterior",
                component: "input",
            },
            {
                _uid: "numero-interior-pa",
                component: "subheadline",
                text: "Número interior",
                thin: true
            },
            {
                _uid: "VI_numero_interior",
                component: "input",
            },
            {
                _uid: "subheadline-letra-exterior-pa",
                component: "subheadline",
                text: "Letra exterior",
                thin: true
            },
            {
                _uid: "VI_letra_exterior",
                component: "input",
            },
            {
                _uid: "subheadline-letra-interior-pa",
                component: "subheadline",
                text: "Letra interior",
                thin: true
            },
            {
                _uid: "VI_letra_interior",
                component: "input",
            },
            {
                _uid: "subheadline-cp-pa",
                component: "subheadline",
                text: "CP",
                thin: true
            },
            {
                _uid: "VI_cp",
                component: "input",
            },
            {
                _uid: "subheadline-letra-interior",
                component: "subheadline",
                text: "Letra interior",
                thin: true
            },
            {
                _uid: "VI_letra_",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-1",
                component: "subheadline",
                text: "Cruce 1",
                thin: true
            },
            {
                _uid: "VI_cruce1",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-2",
                component: "subheadline",
                text: "Cruce 2",
                thin: true
            },
            {
                _uid: "VI_cruce2",
                component: "input",
            },
            {
                _uid: "subheadline-referencia-pa",
                component: "subheadline",
                text: "Referencias",
                thin: true
            },
            {
                _uid: "VI_referencia",
                component: "input",
            },
            {
                _uid: "subheadline-estado-pa",
                component: "subheadline",
                text: "Estado",
                thin: true
            },
            {
                _uid: "VI_estado",
                component: "input",
            },
            {
                _uid: "subheadline-municiip-pa",
                component: "subheadline",
                text: "Municipio",
                thin: true
            },
            {
                _uid: "VI_municipio",
                component: "input",
            },
            {
                _uid: "subheadline-colonia-pa",
                component: "subheadline",
                text: "Colonia / localidad",
                thin: true
            },
            {
                _uid: "VI_colonia_localidad",
                component: "input",
            },
            {
                _uid: "subheadline-escolaridad-pa",
                component: "subheadline",
                text: "12. Escolaridad"
            },
            {
                _uid: "VI_escolaridad",
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
                _uid: "VI_estatus_escolaridad",
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
                _uid: "VI_especificar_ocupacion",
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
            {
                _uid: "subheadline-teléfono",
                component: "subheadline",
                text: "Teléfono fijo / casa",
            },
            {
                _uid: "VI_telefono_fijo_casa",
                component: "input",
            },
            {
                _uid: "subheadline-celular",
                component: "subheadline",
                text: "Teléfono fijo / casa",
            },
            {
                _uid: "VI_celular",
                component: "input",
            },
            {
                _uid: "subheadline-otro",
                component: "subheadline",
                text: "Otro, especificar",
            },
            {
                _uid: "VI_otro",
                component: "input",
                // falta completar
            },
            {
                _uid: "subheadline-posesion-armas",
                component: "subheadline",
                text: "Posesión de armas",
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




            {
                _uid: "subheadline-complexion",
                component: "subheadline",
                text: "Complexión",
            },
            {
                _uid: "VI_complexion",
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
                _uid: "VI_tez",
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
                _uid: "VI_color_cabello",
                component: "input",
            },
            {
                _uid: "subheadline-tamanio-cabello",
                component: "subheadline",
                text: "Tamaño de cabello",
            },
            {
                _uid: "VI_tamanio_cabello",
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
                _uid: "VI_forma_cabello",
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
                _uid: "VI_nariz",
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
                _uid: "VI_color_ojos",
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
                _uid: "VI_tamanio_ojos",
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
                _uid: "VI_forma_ojos",
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
                _uid: "VI_estado_fisico_aparente",
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
                _uid: "VI_especifique_estado_fisico",
                component: "input",
            },
            {
                _uid: "subheadline-forma-cara",
                component: "subheadline",
                text: "Forma de la cara",
            },
            {
                _uid: "VI_forma_de_la_cara",
                component: "input",
            },
            {
                _uid: "subheadline-cejas",
                component: "subheadline",
                text: "Tipo de cejas",
            },
            {
                _uid: "VI_tipo_de_cejas",
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
                _uid: "VI_especificar_senias",
                component: "fullwidthinput",
                checkboxText: "Si",
                inputText: "Especificar"
            },
            {
                _uid: "VI_especifique_tatuajes",
                component: "fullwidthinput",
                checkboxText: "Tatuajes",
                inputText: "Especifique lugar y forma"
            },
            {
                _uid: "VI_especifique_lunares",
                component: "fullwidthinput",
                checkboxText: "Lunares",
                inputText: "Especifique lugar y forma"
            },
            {
                _uid: "VI_especifique_lesiones",
                component: "fullwidthinput",
                checkboxText: "Lesiones",
                inputText: "Especifique lugar y forma"
            },
            {
                _uid: "VI_barba",
                component: "fullwidthinput",
                checkboxText: "Barba",
                inputText: "Especifique forma"
            },
            {
                _uid: "VI_bigote",
                component: "fullwidthinput",
                checkboxText: "Bigote",
                inputText: "Especifique forma"
            },
            {
                _uid: "VI_cicatrices",
                component: "fullwidthinput",
                checkboxText: "Cicatrices",
                inputText: "Especifique lugar"
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
    5: { label: "antecedentes de violencia", active: false },
    6: { label: "información general de la persona agresora", active: false },
}


const HomeCedula = ({ params }) => {
    /* FOLIO => EXPEDIENTE_ID */
    const { folio } = params;
    /* TODO:REOMVE MOCKUP AFTER MAP */
    const {
        expediente,
        cedula
    } = cedulaData;

    const [sidebarOptions, setSidebarOptions] = useState(menuOptions)
    const [activeData, setActiveData] = useState(0)

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