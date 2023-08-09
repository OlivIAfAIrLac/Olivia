export const boolean = [
    { value: 'true', description: 'Si' },
    { value: 'false', description: 'No' },
]
export const getCatalogoDescription = ({ catalogo = '', value = 'description' }) => {
    const allCatalogos = {
        userRoles: userRoles.filter(item => item.value === value),
        unidadesCatalog: unidadesCatalog.filter(item => item.value === value),
        escolaridad: escolaridad.filter(item => item.value === value),
        estatus_escolaridad: estatus_escolaridad.filter(item => item.value === value),
        tipo_de_relaciones: tipo_de_relaciones.filter(item => item.value === value),
        requerimiento_especifico: requerimiento_especifico.filter(item => item.value === value),
        emergencia: emergencia.filter(item => item.value === value),
        sexo: sexo.filter(item => item.value === value),
        ocupacion: ocupacion.filter(item => item.value === value),
        seguridad_social: seguridad_social.filter(item => item.value === value),
        situacion_conyugal: situacion_conyugal.filter(item => item.value === value),
        regimen_matrimonial: regimen_matrimonial.filter(item => item.value === value),
        tipo_de_vivienda: tipo_de_vivienda.filter(item => item.value === value),
        parentesco: parentesco.filter(item => item.value === value),
        turno: turno.filter(item => item.value === value),
        tipo_de_droga: tipo_de_droga.filter(item => item.value === value),
        complexion: complexion.filter(item => item.value === value),
        tez: tez.filter(item => item.value === value),
        tamanio_de_cabello: tamanio_de_cabello.filter(item => item.value === value),
        forma_cabello: forma_cabello.filter(item => item.value === value),
        nariz: nariz.filter(item => item.value === value),
        ojos: ojos.filter(item => item.value === value),
        tamanio_ojos: tamanio_ojos.filter(item => item.value === value),
        forma_ojos: forma_ojos.filter(item => item.value === value),
        estado_fisico: estado_fisico.filter(item => item.value === value),
        genero: genero.filter(item => item.value === value),
        comparte_vivienda: comparte_vivienda.filter(item => item.value === value),
        frecuencia_violencia: frecuencia_violencia.filter(item => item.value === value),
        area_que_atiende: area_que_atiende.filter(item => item.value === value),
        modalidad_asesora: modalidad_asesora.filter(item => item.value === value),
        discapacidad: discapacidad.filter(item => item.value === value),
        labios: discapacidad.filter(item => item.value === value),
    }
    console.log(catalogo, value);
    return allCatalogos[catalogo][0]?.description;
}
export const getCatalogoIndexSabana = ({ catalogo = '', value = 'indexSabana' }) => {
    const allCatalogos = {
        userRoles: userRoles.filter(item => item.value === value),
        unidadesCatalog: unidadesCatalog.filter(item => item.value === value),
        escolaridad: escolaridad.filter(item => item.value === value),
        estatus_escolaridad: estatus_escolaridad.filter(item => item.value === value),
        tipo_de_relaciones: tipo_de_relaciones.filter(item => item.value === value),
        requerimiento_especifico: requerimiento_especifico.filter(item => item.value === value),
        emergencia: emergencia.filter(item => item.value === value),
        sexo: sexo.filter(item => item.value === value),
        ocupacion: ocupacion.filter(item => item.value === value),
        seguridad_social: seguridad_social.filter(item => item.value === value),
        situacion_conyugal: situacion_conyugal.filter(item => item.value === value),
        regimen_matrimonial: regimen_matrimonial.filter(item => item.value === value),
        tipo_de_vivienda: tipo_de_vivienda.filter(item => item.value === value),
        parentesco: parentesco.filter(item => item.value === value),
        turno: turno.filter(item => item.value === value),
        tipo_de_droga: tipo_de_droga.filter(item => item.value === value),
        complexion: complexion.filter(item => item.value === value),
        tez: tez.filter(item => item.value === value),
        tamanio_de_cabello: tamanio_de_cabello.filter(item => item.value === value),
        forma_cabello: forma_cabello.filter(item => item.value === value),
        nariz: nariz.filter(item => item.value === value),
        ojos: ojos.filter(item => item.value === value),
        tamanio_ojos: tamanio_ojos.filter(item => item.value === value),
        forma_ojos: forma_ojos.filter(item => item.value === value),
        estado_fisico: estado_fisico.filter(item => item.value === value),
        genero: genero.filter(item => item.value === value),
        comparte_vivienda: comparte_vivienda.filter(item => item.value === value),
        frecuencia_violencia: frecuencia_violencia.filter(item => item.value === value),
        area_que_atiende: area_que_atiende.filter(item => item.value === value),
        modalidad_asesora: modalidad_asesora.filter(item => item.value === value),
        discapacidad: discapacidad.filter(item => item.value === value),
        labios: labios.filter(item => item.value === value),
    }
    return allCatalogos[catalogo][0]?.indexSabana;
}
export const userRoles = [
    { description: "--Usuarios--", value: '' },
    { description: "administrador", value: "admin" },
    { description: "usuario", value: "user" },
]
export const profesionesCatalog = [
    { description: "--Profesión--", value: '' },
    { description: "Trabajo social", value: "trabajo_social" },
    { description: "Psicología", value: "psicologia" },
    { description: "Jurídico", value: "juridico" },
    { description: "Otro", value: "otro" },
];
export const getProfesion = (profesion = '') => {
    const prof = profesionesCatalog.filter(item => item.value === profesion)
    return prof[0]?.description
}
export const unidadesCatalog = [
    { description: "--Unidad--", value: '' },
    { description: "UMEA", value: "umea" },
    { description: "El Salto", value: "el_salto" },
    { description: "Tlajomulco", value: "tlajomulco" },
]
export const getUnidad = (unidad = '') => {
    const uni = unidadesCatalog.filter(item => item.value === unidad)
    return uni[0]?.description
}
export const escolaridad = [
    { value: 'kinder_o_preescolar', description: 'Kínder o preescolar', indexSabana: 1 },
    { value: 'primaria', description: 'Primaria', indexSabana: 2 },
    { value: 'secundaria', description: 'Secundaria', indexSabana: 3 },
    { value: 'preparatoria_o_bachillerato', description: 'Preparatoria o bachillerato', indexSabana: 4 },
    { value: 'normal', description: 'Normal', indexSabana: 5 },
    { value: 'carrera_tecnica_o_comercial', description: 'Carrera técnica o comercial', indexSabana: 6 },
    { value: 'licenciatura_o_superior', description: 'Licenciatura o superior', indexSabana: 7 },
    { value: 'posgrado', description: 'Posgrado (maestría o doctorado)', indexSabana: 8 },
    { value: 'ninguno', description: 'Ninguno', indexSabana: 9 },
];
export const estatus_escolaridad = [
    { indexSabana: 1, value: 'en_curso', description: 'en Curso' },
    { indexSabana: 2, value: 'terminada', description: 'Terminada' },
    { indexSabana: 3, value: 'trunca', description: 'Trunca' },
];
export const tipo_de_relaciones = [
    { indexSabana: 1, value: 'madre', description: 'Madre' },
    { indexSabana: 2, value: 'padre', description: 'Padre' },
    { indexSabana: 3, value: 'hija', description: 'Hija' },
    { indexSabana: 4, value: 'hijo', description: 'Hijo' },
    { indexSabana: 5, value: 'pareja', description: 'Pareja' },
    { indexSabana: 6, value: 'expareja', description: 'Expareja' },
    { indexSabana: 7, value: 'conyuge', description: 'Cónyuge' },
    { indexSabana: 8, value: 'suegra', description: 'Suegra' },
    { indexSabana: 9, value: 'suegro', description: 'Suegro' },
    { indexSabana: 10, value: 'cuniada', description: 'Cuñada' },
    { indexSabana: 11, value: 'cuniado', description: 'Cuñado' },
    { indexSabana: 12, value: 'otro', description: 'Otro' }
];
export const requerimiento_especifico = [
    { value: 'lengua_de_senias_mexicana_lsm', description: 'Lengua de Señas Mexicana (LSM)' },
    { value: 'lengua_indigena', description: 'Lengua Indígena' },
    { value: 'lengua_extranjera', description: 'Lengua Extranjera' },
    { value: 'discapacidades', description: 'Discapacidad(es)' },
    { value: 'otra', description: 'Otra' }
];
export const emergencia = [
    { value: 'atencion_medica_de_emergencia_por_lesiones', description: 'Atención médica de emergencia por lesiones' },
    { value: 'crisis_nerviosa', description: 'Crisis nerviosa' },
    { value: 'dictamen_ginecologico_por_agresion_sexual', description: 'Dictamen ginecológico por agresión sexual' },
    { value: 'atencion_medica_por_agresion_sexual', description: 'Atención médica por agresión sexual' },
    { value: 'otras', description: 'Otras' }
];
export const sexo = [
    { value: 'mujer', description: 'Mujer', indexSabana: 1 },
    { value: 'hombre', description: 'Hombre', indexSabana: 2 },
    { value: 'intersexual', description: 'Intersexual', indexSabana: 3 }
];
export const ocupacion = [
    { indexSabana: 1, value: 'jornalera_o_albaniil', description: 'Jornalera(o)/albañil' },
    { indexSabana: 2, value: 'empleada_o_obrera_o', description: 'Empleada(o)/Obrera(o)' },
    { indexSabana: 3, value: 'labores_del_hogar', description: 'Labores del hogar' },
    { indexSabana: 4, value: 'estudios', description: 'Estudios' },
    { indexSabana: 5, value: 'negocio_propio', description: 'Negocio propio' },
    { indexSabana: 6, value: 'deporte', description: 'Deporte' },
    { indexSabana: 7, value: 'jubilado_pensionado', description: 'Jubilada(o)/pensionada(o)' },
    { indexSabana: 8, value: 'ninguna', description: 'Ninguna' },
    { indexSabana: 9, value: 'otra', description: 'Otra' }
];
export const seguridad_social = [
    { value: 'imss', description: 'IMSS ', indexSabana: 1 },
    { value: 'issste', description: 'ISSSTE', indexSabana: 2 },
    { value: 'pemex', description: 'PEMEX', indexSabana: 3 },
    { value: 'sedena', description: 'SEDENA', indexSabana: 4 },
    { value: 'insabi', description: 'INSABI', indexSabana: 5 },
    { value: 'privado', description: 'PRIVADO', indexSabana: 6 }
];
export const situacion_conyugal = [
    { indexSabana: 1, value: 'union_libre', description: 'Unión libre' },
    { indexSabana: 2, value: 'casada_o', description: 'Casada(o)' },
    { indexSabana: 3, value: 'separada_o', description: 'Separada(o)' },
    { indexSabana: 4, value: 'divorciada_o', description: 'Divorciada(o)' },
    { indexSabana: 5, value: 'viuda_o', description: 'Viuda(o)' },
    { indexSabana: 6, value: 'soltera_o', description: 'Soltera(o)' }
];
export const regimen_matrimonial = [
    { indexSabana: 1, value: 'separacion_de_bienes', description: 'Separación de bienes' },
    { indexSabana: 2, value: 'sociedad_legal', description: 'Sociedad legal' },
    { indexSabana: 3, value: 'sociedad_conyugal_o_voluntaria', description: 'Sociedad conyugal o voluntaria' }
];
export const tipo_de_vivienda = [
    { indexSabana: 1, value: 'casa_independiente', description: 'Casa independiente' },
    { indexSabana: 2, value: 'departamento_en_edificio_o_unidad_habitacional', description: 'Departamento en edificio o unidad habitacional' },
    { indexSabana: 3, value: 'departamento_en_vecindad', description: 'Departamento en vecindad' },
    { indexSabana: 4, value: 'cuarto_en_la_azotea', description: 'Cuarto en la azotea' },
    { indexSabana: 5, value: 'local_no_construido_para_habitacion', description: 'Local no construido para habitación' },
    { indexSabana: 6, value: 'casa_o_departamento_en_terreno_familiar', description: 'Casa o departamento en terreno familiar' },
    { indexSabana: 7, value: 'casa_movil_refugio', description: 'Casa móvil Refugio' },
    { indexSabana: 8, value: 'asilo', description: 'Asilo' },
    { indexSabana: 9, value: 'orfanato_o_convento', description: 'orfanato o convento' },
    { indexSabana: 10, value: 'no_tiene_vivienda', description: 'No tiene vivienda' },
    { indexSabana: 11, value: 'otra', description: 'Otra' }
];
export const parentesco = [
    { indexSabana: 1, value: 'madre', description: 'Madre' },
    { indexSabana: 2, value: 'padre', description: 'Padre' },
    { indexSabana: 3, value: 'hija', description: 'Hija' },
    { indexSabana: 4, value: 'hijo', description: 'Hijo' },
    { indexSabana: 5, value: 'pareja', description: 'Pareja' },
    { indexSabana: 6, value: 'expareja', description: 'Expareja' },
    { indexSabana: 7, value: 'conyuge', description: 'Cónyuge' },
    { indexSabana: 8, value: 'suegra', description: 'Suegra' },
    { indexSabana: 9, value: 'suegro', description: 'Suegro' },
    { indexSabana: 10, value: 'cuniada', description: 'Cuñada' },
    { indexSabana: 11, value: 'cuniado', description: 'Cuñado' },
    { indexSabana: 12, value: 'otro', description: 'Otro' }
];
export const turno = [
    { indexSabana: 1, value: 'matutino', description: 'Matutino' },
    { indexSabana: 2, value: 'vespertino', description: 'Vespertino' },
    { indexSabana: 3, value: 'nocturno', description: 'Nocturno' },
    { indexSabana: 4, value: 'mixto', description: 'Mixto' }
];
export const tipo_de_droga = [
    { indexSabana: 1, value: 'alcohol', description: 'Alcohol' },
    { indexSabana: 2, value: 'marihuana', description: 'Marihuana' },
    { indexSabana: 3, value: 'depresores_del_sistema_nervioso_central_benzos', description: 'Depresores del sistema nervioso central(benzos)' },
    { indexSabana: 4, value: 'cocaina_crack_ghb', description: 'Cocaína (crack) 5) GHB' },
    { indexSabana: 5, value: 'alucinogenos', description: 'Alucinógenos' },
    { indexSabana: 6, value: 'heroina', description: 'Heroína' },
    { indexSabana: 7, value: 'inhalantes', description: 'Inhalantes' },
    { indexSabana: 8, value: 'ketamina', description: 'Ketamina' },
    { indexSabana: 9, value: 'lsd_acidos', description: 'LSD (ácidos)' },
    { indexSabana: 10, value: 'tabaco', description: 'Tabaco' },
    { indexSabana: 11, value: 'pcp_angel_dust', description: 'PCP (ángel dust)' },
    { indexSabana: 12, value: 'mdma_extasis', description: 'MDMA (éxtasis)' },
    { indexSabana: 13, value: 'mescalina_peyote', description: 'Mescalina (peyote)' },
    { indexSabana: 14, value: 'metanfetamina_cristal_meth', description: 'Metanfetamina (cristal/meth)' },
    { indexSabana: 15, value: 'dextrometorfano_dxm', description: 'Dextrometorfano (DXM)' },
    { indexSabana: 16, value: 'medicamentos_de_venta_libre', description: 'Medicamentos de venta libre' },
    { indexSabana: 17, value: 'loperamida', description: 'Loperamida' },
    { indexSabana: 18, value: 'opioides_con_receta_medica_oxy_percs', description: 'Opioides con receta médica (oxy/percs) ' },
    { indexSabana: 19, value: 'estimulantes_con_receta_medica', description: 'Estimulantes con receta médica' },
    { indexSabana: 20, value: 'esteroides_anabolicos', description: 'Esteroides (anabólicos)' },
    { indexSabana: 21, value: 'cannabinoides_sinteticos_k_spice', description: 'Cannabinoides sintéticos (K2/spice)' },
    { indexSabana: 22, value: 'catinonas_sinteticas', description: 'Catinonas sintéticas' },
    { indexSabana: 23, value: 'fentanilo', description: 'Fentanilo' }
];
export const complexion = [
    { indexSabana: 1, value: 'delgada', description: 'Delgada' },
    { indexSabana: 2, value: 'mediana', description: 'Mediana' },
    { indexSabana: 3, value: 'atletica', description: 'Atlética' },
    { indexSabana: 4, value: 'robusta', description: 'Robusta' },
    { indexSabana: 5, value: 'obesa', description: 'Obesa' }
];
export const tez = [
    { indexSabana: 1, value: 'blanca', description: 'Blanca' },
    { indexSabana: 2, value: 'morena_clara', description: 'Morena clara' },
    { indexSabana: 3, value: 'morena', description: 'Morena' },
    { indexSabana: 4, value: 'morena_obscura', description: 'Morena obscura' },
    { indexSabana: 5, value: 'otra', description: 'Otra' }
];
export const tamanio_de_cabello = [
    { indexSabana: 1, value: 'largo', description: 'Largo' },
    { indexSabana: 2, value: 'mediano', description: 'Mediano' },
    { indexSabana: 3, value: 'corto', description: 'Corto' }
];
export const forma_cabello = [
    { indexSabana: 1, value: 'ondulado', description: 'Ondulado' },
    { indexSabana: 2, value: 'rizado', description: 'Rizado' },
    { indexSabana: 3, value: 'liso', description: 'Liso' }
];
export const nariz = [
    { indexSabana: 1, value: 'recta', description: 'Recta' },
    { indexSabana: 2, value: 'aplanada', description: 'Aplanada' },
    { indexSabana: 3, value: 'ancho', description: 'Ancho' }
];
export const ojos = [
    { indexSabana: 1, value: 'cafe_claro', description: 'Café claro' },
    { indexSabana: 2, value: 'cafe', description: 'Café' },
    { indexSabana: 3, value: 'verdes', description: 'Verdes' },
    { indexSabana: 4, value: 'azul', description: 'Azul' },
    { indexSabana: 5, value: 'gris', description: 'Gris' }
];
export const tamanio_ojos = [
    { indexSabana: 1, value: 'pequenios', description: 'Pequeños' },
    { indexSabana: 2, value: 'medianos', description: 'Medianos' },
    { indexSabana: 3, value: 'grandes', description: 'Grandes' }
];
export const forma_ojos = [
    { indexSabana: 1, value: 'saltones', description: 'Saltones' },
    { indexSabana: 2, value: 'redondos', description: 'redondos' },
    { indexSabana: 3, value: 'alargados', description: 'Alargados' },
    { indexSabana: 4, value: 'oblicuos', description: 'oblicuos' },
    { indexSabana: 5, value: 'hundidos', description: 'hundidos' }
];
export const estado_fisico = [
    { indexSabana: 1, value: 'bueno', description: 'Bueno' },
    { indexSabana: 2, value: 'malo', description: 'Malo' },
    { indexSabana: 3, value: 'regular', description: 'Regular' }
];
export const genero = [
    { indexSabana: 1, value: 'cisgenero', description: 'Cisgénero', indexSabana: 1 },
    { indexSabana: 2, value: 'transgenero', description: 'Transgénero', indexSabana: 2 },
    { indexSabana: 3, value: 'transexual', description: 'Transexual', indexSabana: 3 },
    { indexSabana: 4, value: 'genero_fluido', description: 'Género fluido', indexSabana: 4 },
    { indexSabana: 5, value: 'agenero', description: 'Ágenero', indexSabana: 5 },
    { indexSabana: 6, value: 'persona_no_binaria', description: 'Persona no binaria', indexSabana: 6 },
    { indexSabana: 7, value: 'prefiero_no_decirlo', description: 'Prefiero no decirlo', indexSabana: 7 },
    { indexSabana: 8, value: 'otro', description: 'Otro', indexSabana: 8 }
]
export const comparte_vivienda = [
    { indexSabana: 1, value: 'amistades', description: 'Amistades' },
    { indexSabana: 2, value: 'familiares', description: 'Familiares' },
    { indexSabana: 3, value: 'otras', description: 'Otra(s)' },
]
export const frecuencia_violencia = [
    { indexSabana: 1, value: 'menos_de_1_mes', description: 'Menos de 1 mes' },
    { indexSabana: 2, value: 'de_1_mes_a_3_meses', description: 'De un 1 mes a 3 meses' },
    { indexSabana: 3, value: 'de_3_meses_a_6_meses', description: 'De 3 meses a 6 meses' },
    { indexSabana: 4, value: 'de_6_meses_a_un_anio', description: 'De 6 meses a un 1 año' },
    { indexSabana: 5, value: 'otra', description: 'Otra (elaborar)' },
]
export const area_que_atiende = [
    { indexSabana: 1, value: 'psicologia', description: 'Psicología' },
    { indexSabana: 2, value: 'psicologia_nna', description: 'Psicología NNA' },
    { indexSabana: 3, value: 'juridica', description: 'Jurídica' },
    { indexSabana: 4, value: 'trabajo_social', description: 'Trabajo Social' },
    { indexSabana: 5, value: 'ministerial', description: 'Ministerial' },
    { indexSabana: 6, value: 'pericial', description: 'Pericial' },
    { indexSabana: 7, value: 'medica', description: 'Médica' },
    { indexSabana: 8, value: 'psiquiatrica', description: 'Psiquiátrica' },
    { indexSabana: 9, value: 'otra', description: 'Otra ' },
]
export const modalidad_asesora = [
    { indexSabana: 1, value: 'presencial', description: 'Presencial' },
    { indexSabana: 2, value: 'telefonica', description: 'Telefónica' },
    { indexSabana: 3, value: 'otra', description: 'Otra' },
];
export const discapacidad = [
    { indexSabana: 1, value: 'motora', description: 'Motora' },
    { indexSabana: 2, value: 'auditiva', description: 'Auditiva' },
    { indexSabana: 3, value: 'visual', description: 'Visual' },
    { indexSabana: 4, value: 'intelectual', description: 'Intelectual' },
    { indexSabana: 5, value: 'psicosocial', description: 'Psicosocial' },
    { indexSabana: 6, value: 'otra ', description: 'Otra' },
]
export const labios = [
    { indexSabana: 1, description: 'Gruesos', value: 'gruesos' },
    { indexSabana: 2, description: 'Regulares', value: 'regulares' },
    { indexSabana: 3, description: 'Delgados', value: 'delgados' }
]