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
import { area_que_atiende, complexion, emergencia, escolaridad, estado_fisico, estatus_escolaridad, forma_cabello, forma_ojos, frecuencia_violencia, genero, nariz, ocupacion, ojos, parentesco, requerimiento_especifico, sexo, tamanio_de_cabello, tamanio_ojos, tez, tipo_de_droga } from '@/helpers/catalogos';




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
                _uid: "subheadline-fecha",
                component: "subheadline",
                text: "Fecha"
            },
            {
                _uid: "fecha",
                component: "input",
            },
            {
                _uid: "subheadline-hora-inicio",
                component: "subheadline",
                text: "Hora de inicio"
            },
            {
                _uid: "hora_de_inicio",
                component: "input",
            },
            {
                _uid: "subheadline-numero-expediente",
                component: "subheadline",
                text: "Número de expediente"
            },
            {
                _uid: "no_de_expediente",
                component: "input",
            },
            {
                _uid: "2",
                component: "subheadline",
                text: "Área que atiende."
            },
            {
                _uid: "area_que_atiende",
                component: "multipleoptionsgroup",
                field: "area_que_atiende",
                options: area_que_atiende
            },

            {
                _uid: "subheadline-modalidad-asesoria",
                component: "subheadline",
                text: "Modalidad de asesoría"
            },
            {
                _uid: "modalidad_de_asesoria",
                component: "optionsgroup",
                field: "escolaridad",
                options: escolaridad
            },
            {
                _uid: "otra_falta",
                component: "input",
            },
            {
                _uid: "subheadline-institucion-que-atiende",
                component: "subheadline",
                text: "Institución que atiende"
            },
            {
                _uid: "institucion_que_atiende",
                component: "input",
            },
            {
                _uid: "subheadline-area-de-adscripcion",
                component: "subheadline",
                text: "Área de adscripción"
            },
            {
                _uid: "area_falta",
                component: "input",
            },
            {
                _uid: "subheadline-nombre-persona-atiende",
                component: "subheadline",
                text: "Nombre(s) de la(s) persona(s) que atiende(n)"
            },
            {
                _uid: "nombres_de_las_personas_que_atienden",
                component: "input",
            },
            {
                _uid: "subheadline-cargo-persona-atiende",
                component: "subheadline",
                text: "Cargo de la(s) persona(s) que atiende(n)"
            },
            {
                _uid: "cargo_falta",
                component: "input",
            },
            {
                _uid: "subheadline-expediente-banavim",
                component: "subheadline",
                text: "Expediente BANAVIM"
            },
            {
                _uid: "numero_de_expediente_banavim",
                component: "input",
            },
            {
                _uid: "subheadline-horario-termino-atencion",
                component: "subheadline",
                text: "Horario de término de atención"
            },
            {
                _uid: "horario_de_termino_de_atencion",
                component: "input",
            },
        ]
    },
    {
        section: 1,
        content: [
            {
                _uid: "headline-requerimientos",
                component: "headline",
                text: "Requerimientos Específicos"
            },
            {
                _uid: "subheadline-inmediatez",
                component: "subheadline",
                text: " ¿La persona presenta alguna enfermedad y/o lesión que requiera ser atendida con inmediatez"
            },
            {
                _uid: "I_la_persona_presenta_alguna_enfermedad_y_o_lesion_que_requiera_ser_atendida_con_inmediatez",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "subheadline-inmediatez-cual",
                component: "subheadline",
                text: "Especificar cuál en caso afirmativo:"
            },
            {
                _uid: "falta",
                component: "input",
            },
            {
                _uid: "subheadline-requerimiento-especifico",
                component: "subheadline",
                text: "¿Existe algún requerimiento específico?"
            },
            {
                _uid: "I_existe_algun_requerimiento_especifico",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "I_requerimiento_cual",
                component: "optionsgroup",
                field: "persona_conocida",
                options: requerimiento_especifico
            },
            {
                _uid: "subheadline-requerimiento-especificar",
                component: "subheadline",
                text: "Especificar"
            },
            {
                _uid: "I_especificar",
                component: "input",
            },
            {
                _uid: "subheadline-emergencia",
                component: "subheadline",
                text: "¿Presenta alguna emergencia?"
            },
            {
                _uid: "I_presenta_alguna_emergencia",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "subheadline-atención-lesiones",
                component: "subheadline",
                text: "Atención médica de emergencia por lesiones"
            },
            {
                _uid: "I_emergencia_cual",
                component: "optionsgroup",
                field: "I_emergencia_cual",
                options: emergencia
            },
            {
                _uid: "subheadline-periodo-gestacion",
                component: "subheadline",
                text: "¿Está en periodo de gestación?"
            },
            {
                _uid: "I_esta_en_periodo_de_gestacion",
                component: "optionsgroup",
                field: "persona_conocida",
                options: [
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
                ]
            },
            {
                _uid: "subheadline-cuantos-meses",
                component: "subheadline",
                text: "¿Cuántos meses?"
            },
            {
                _uid: "I_cuantos_meses",
                component: "input",
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
            {
                _uid: "subheadline-curp",
                component: "subheadline",
                text: "CURP:"
            },
            {
                _uid: "II_curp",
                component: "input",
            },
            {
                _uid: "subheadline-pseudonimo",
                component: "subheadline",
                text: "Pseudónimo:"
            },
            {
                _uid: "II_pseudonimo",
                component: "input",
            },
            {
                _uid: "subheadline-nombre",
                component: "subheadline",
                text: "Nombre(s):"
            },
            {
                _uid: "II_nombre",
                component: "input",
            },
            {
                _uid: "subheadline-primer-apellido",
                component: "subheadline",
                text: "Primer apellido:"
            },
            {
                _uid: "II_primer_apellido",
                component: "input",
            },
            {
                _uid: "subheadline-segundo-apellido",
                component: "subheadline",
                text: "Segundo apellido:"
            },
            {
                _uid: "II_segundo_apellido",
                component: "input",
            },
            {
                _uid: "II_genero",
                component: "optionsgroup",
                field: "escolaridad",
                options: genero
            },
            {
                _uid: "subheadline-especificar-genero",
                component: "subheadline",
                text: "Especificar:"
            },
            {
                _uid: "II_genero_especificar",
                component: "input",
            },
            {
                _uid: "subheadline-sexo",
                component: "subheadline",
                text: "Sexo:"
            },
            {
                _uid: "II_sexo",
                component: "input",
                // faltas corroborarr
            },
            {
                _uid: "subheadline-fecha-de-nacimiento",
                component: "subheadline",
                text: "Fecha de nacimiento (DD/MM/AAAA):"
            },
            {
                _uid: "II_fecha_de_nacimiento",
                component: "input",
            },
            {
                _uid: "subheadline-edad",
                component: "subheadline",
                text: "Edad:"
            },
            {
                _uid: "II_edad",
                component: "input",
            },
            {
                _uid: "subheadline-nacionalidad",
                component: "subheadline",
                text: "Nacionalidad:"
            },
            {
                _uid: "II_nacionalidad",
                component: "input",
            },
            {
                _uid: "subheadline-lugar-nacimiento",
                component: "subheadline",
                text: "Lugar de nacimiento:"
            },
            {
                _uid: "II_lugar_de_nacimiento",
                component: "input",
            },
            {
                _uid: "subheadline-entidad-donde-reside",
                component: "subheadline",
                text: "Entidad federativa donde reside actualmente:"
            },
            {
                _uid: "II_entidad_federativa_donde_reside_actualmente",
                component: "input",
            },
            {
                _uid: "subheadline-telefono-fijo",
                component: "subheadline",
                text: "Teléfono fijo/casa:"
            },
            {
                _uid: "II_telefono_fijo_casa",
                component: "input",
            },
            {
                _uid: "subheadline-celular",
                component: "subheadline",
                text: "Celular:"
            },
            {
                _uid: "II_celular",
                component: "input",
            },
            {
                _uid: "subheadline-otro",
                component: "subheadline",
                text: "Otro, especificar:"
            },
            {
                _uid: "II_otro",
                component: "input",
            },
            {
                _uid: "subheadline-autoriza-seguimiento-whatsapp",
                component: "subheadline",
                text: "Autoriza dar seguimiento vía WhatsApp: falta catálogo"
            },
            {
                _uid: "II_motivo_whatsapp",
                component: "input",
            },
            {
                _uid: "subheadline-autoriza-seguimiento-telefonico",
                component: "subheadline",
                text: "Autoriza dar seguimiento vía Telefónica: falta catalogo"
            },
            {
                _uid: "II_motivo_telefonica",
                component: "input",
            },
            {
                _uid: "subheadline-correo-electronico",
                component: "subheadline",
                text: "Correo electrónico"
            },
            {
                _uid: "II_correo_electronico",
                component: "input",
            },
            {
                _uid: "subheadline-direccion-principal",
                component: "subheadline",
                text: "Direccion principal"
            },
            {
                _uid: "subheadline-calle",
                component: "subheadline",
                text: "Calle",
                thin: true
            },
            {
                _uid: "II_direccion_calle",
                component: "input",
            },
            {
                _uid: "numero-exterior",
                component: "subheadline",
                text: "Número exterior",
                thin: true
            },
            {
                _uid: "II_direccion_numero_exterior",
                component: "input",
            },
            {
                _uid: "numero-interior",
                component: "subheadline",
                text: "Número interior",
                thin: true
            },
            {
                _uid: "II_direccion_numero_interior",
                component: "input",
            },
            {
                _uid: "subheadline-letra-exterior",
                component: "subheadline",
                text: "Letra exterior",
                thin: true
            },
            {
                _uid: "II_direccion_letra_exterior",
                component: "input",
            },
            {
                _uid: "subheadline-letra-interior",
                component: "subheadline",
                text: "Letra interior",
                thin: true
            },
            {
                _uid: "II_direccion_letra_interior",
                component: "input",
            },
            {
                _uid: "subheadline-cp",
                component: "subheadline",
                text: "CP",
                thin: true
            },
            {
                _uid: "II_direccion_cp",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-1-v",
                component: "subheadline",
                text: "Cruce 1",
                thin: true
            },
            {
                _uid: "II_direccion_cruce1",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-2-v",
                component: "subheadline",
                text: "Cruce 2",
                thin: true
            },
            {
                _uid: "II_direccion_cruce2",
                component: "input",
            },
            {
                _uid: "subheadline-referencia",
                component: "subheadline",
                text: "Referencias",
                thin: true
            },
            {
                _uid: "II_direccion_referencia",
                component: "input",
            },
            {
                _uid: "subheadline-estado",
                component: "subheadline",
                text: "Estado",
                thin: true
            },
            {
                _uid: "II_direccion_estado",
                component: "input",
            },
            {
                _uid: "subheadline-municipio",
                component: "subheadline",
                text: "Municipio",
                thin: true
            },
            {
                _uid: "II_direccion_municipio",
                component: "input",
            },
            {
                _uid: "subheadline-colonia",
                component: "subheadline",
                text: "Colonia / localidad",
                thin: true
            },
            {
                _uid: "II_direccion_colonia_localidad",
                component: "input",
            },
            {
                _uid: "subheadline-direccion-eventual",
                component: "subheadline",
                text: "Direccion eventual"
            },
            {
                _uid: "subheadline-calle-eventual",
                component: "subheadline",
                text: "Calle",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_calle",
                component: "input",
            },
            {
                _uid: "numero-exterior-eventual",
                component: "subheadline",
                text: "Número exterior",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_numero_exterior",
                component: "input",
            },
            {
                _uid: "numero-interior-eventual",
                component: "subheadline",
                text: "Número interior",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_numero_interior",
                component: "input",
            },
            {
                _uid: "subheadline-letra-exterior_eventual",
                component: "subheadline",
                text: "Letra exterior",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_letra_exterior",
                component: "input",
            },
            {
                _uid: "subheadline-letra-interior-eventual",
                component: "subheadline",
                text: "Letra interior",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_letra_interior",
                component: "input",
            },
            {
                _uid: "subheadline-cp-eventual",
                component: "subheadline",
                text: "CP",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_cp",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-1-eventual",
                component: "subheadline",
                text: "Cruce 1",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_cruce1",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-2-eventual",
                component: "subheadline",
                text: "Cruce 2",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_cruce2",
                component: "input",
            },
            {
                _uid: "subheadline-referencia-eventual",
                component: "subheadline",
                text: "Referencias",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_referencia",
                component: "input",
            },
            {
                _uid: "subheadline-estado-eventual",
                component: "subheadline",
                text: "Estado",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_estado",
                component: "input",
            },
            {
                _uid: "subheadline-municipio-eventual",
                component: "subheadline",
                text: "Municipio",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_municipio",
                component: "input",
            },
            {
                _uid: "subheadline-colonia-eventual",
                component: "subheadline",
                text: "Colonia / localidad",
                thin: true
            },
            {
                _uid: "II_direccion_eventual_colonia_localidad",
                component: "input",
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
                options: escolaridad
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
                options: estatus_escolaridad
            },

            {
                _uid: "subheadline-aporta-mayor-ingreso",
                component: "subheadline",
                text: "¿Quién aporta el mayor ingreso dentro del hogar?",
                thin: true
            },
            {
                _uid: "subheadline-aporta-mayor-porcentaje-ingresos",
                component: "subheadline",
                text: "¿Quién aporta el mayor porcentaje de ingresos  para la víctima?",
                thin: true
            },
            {
                _uid: "subheadline-aporta-mayor-ingreso-hijes",
                component: "subheadline",
                text: "¿Quién aporta el mayor ingreso para sus hijes?",
                thin: true
            },
            {
                _uid: "subheadline-cuánto",
                component: "subheadline",
                text: "¿Cuánto?",
                thin: true
            },
            {
                _uid: "subheadline-empleo-remunerado",
                component: "subheadline",
                text: "En caso de que cuente con un empleo remunerado:",
                thin: true
            },
            {
                _uid: "subheadline-localizacion-empleo",
                component: "subheadline",
                text: "Localización del empleo:",
                thin: true
            },
            {
                _uid: "subheadline-calle-empleo",
                component: "subheadline",
                text: "Calle",
                thin: true
            },
            {
                _uid: "III_calle_empleo",
                component: "input",
            },
            {
                _uid: "numero-exterior-empleo",
                component: "subheadline",
                text: "Número exterior",
                thin: true
            },
            {
                _uid: "III_numero_exterior_empleo",
                component: "input",
            },
            {
                _uid: "numero-interior-empleo",
                component: "subheadline",
                text: "Número interior",
                thin: true
            },
            {
                _uid: "III_numero_interior_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-letra-exterior_empleo",
                component: "subheadline",
                text: "Letra exterior",
                thin: true
            },
            {
                _uid: "III_letra_exterior_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-letra-interior-empleo",
                component: "subheadline",
                text: "Letra interior",
                thin: true
            },
            {
                _uid: "III_letra_interior_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-cp-empleo",
                component: "subheadline",
                text: "CP",
                thin: true
            },
            {
                _uid: "III_cp_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-1-empleo",
                component: "subheadline",
                text: "Cruce 1",
                thin: true
            },
            {
                _uid: "III_cruce1_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-cruce-2-empleo",
                component: "subheadline",
                text: "Cruce 2",
                thin: true
            },
            {
                _uid: "III_cruce2_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-referencia-empleo",
                component: "subheadline",
                text: "Referencias",
                thin: true
            },
            {
                _uid: "III_referencia_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-estado-empleo",
                component: "subheadline",
                text: "Estado",
                thin: true
            },
            {
                _uid: "III_estado_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-municipio-empleo",
                component: "subheadline",
                text: "Municipio",
                thin: true
            },
            {
                _uid: "III_municipio_empleo",
                component: "input",
            },
            {
                _uid: "subheadline-colonia-empleo",
                component: "subheadline",
                text: "Colonia / localidad",
                thin: true
            },
            {
                _uid: "III_colonia_localidad_empleo",
                component: "input",
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
                options: frecuencia_violencia
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
                    { value: true, description: 'Si' },
                    { value: false, description: 'No' },
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
                options: genero
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
                options: sexo
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
                options: parentesco
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
                options: escolaridad
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
                options: estatus_escolaridad
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
                options: ocupacion
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
                options: tipo_de_droga
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
                options: complexion
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
                options: tez
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
                options: tamanio_de_cabello
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
                options: forma_cabello
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
                options: nariz
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
                options: ojos
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
                options: tamanio_ojos
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
                options: forma_ojos
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
                options: estado_fisico
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