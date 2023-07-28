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
    { value: 'kinder_o_preescolar', description: 'Kínder o preescolar' },
    { value: 'primaria', description: 'Primaria' },
    { value: 'secundaria', description: 'Secundaria' },
    { value: 'preparatoria_o_bachillerato', description: 'Preparatoria o bachillerato' },
    { value: 'normal', description: 'Normal' },
    { value: 'carrera_tecnica_o_comercial', description: 'Carrera técnica o comercial' },
    { value: 'licenciatura_o_superior', description: 'Licenciatura o superior' },
    { value: 'posgrado', description: 'Posgrado (maestría o doctorado)' },
    { value: 'ninguno', description: 'Ninguno' },
];
export const estatus_escolaridad = [
    { value: 'en_curso', description: 'en Curso' },
    { value: 'terminada', description: 'Terminada' },
    { value: 'trunca', description: 'Trunca' },
];
const tipo_de_relaciones = [
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
    { value: 'mujer', description: 'Mujer' },
    { value: 'hombre', description: 'Hombre' },
    { value: 'intersexual', description: 'Intersexual' }
];
export const ocupacion = [
    { value: 'jornalera_o_albaniil', description: 'Jornalera(o)/albañil' },
    { value: 'empleada_o_obrera_o', description: 'Empleada(o)/Obrera(o)' },
    { value: 'labores_del_hogar', description: 'Labores del hogar' },
    { value: 'estudios', description: 'Estudios' },
    { value: 'negocio_propio', description: 'Negocio propio' },
    { value: 'deporte', description: 'Deporte' },
    { value: 'jubilado_pensionado', description: 'Jubilada(o)/pensionada(o)' },
    { value: 'ninguna', description: 'Ninguna' },
    { value: 'otra', description: 'Otra' }
];
export const seguridad_social = [
    { value: 'imss', description: 'IMSS ' },
    { value: 'issste', description: 'ISSSTE' },
    { value: 'pemex', description: 'PEMEX' },
    { value: 'sedena', description: 'SEDENA' },
    { value: 'insabi', description: 'INSABI' },
    { value: 'privado', description: 'PRIVADO' }
];
export const situacion_conyugal = [
    { value: 'union_libre', description: 'Unión libre' },
    { value: 'casada_o', description: 'Casada(o)' },
    { value: 'separada_o', description: 'Separada(o)' },
    { value: 'divorciada_o', description: 'Divorciada(o)' },
    { value: 'viuda_o', description: 'Viuda(o)' },
    { value: 'soltera_o', description: 'Soltera(o)' }
];
export const regimen_matrimonial = [
    { value: 'separacion_de_bienes', description: 'Separación de bienes' },
    { value: 'sociedad_legal', description: 'Sociedad legal' },
    { value: 'sociedad_conyugal_o_voluntaria', description: 'Sociedad conyugal o voluntaria' }
];
export const tipo_de_vivienda = [
    { value: 'casa_independiente', description: 'Casa independiente' },
    { value: 'departamento_en_edificio_o_unidad_habitacional', description: 'Departamento en edificio o unidad habitacional' },
    { value: 'departamento_en_vecindad', description: 'Departamento en vecindad' },
    { value: 'cuarto_en_la_azotea', description: 'Cuarto en la azotea' },
    { value: 'local_no_construido_para_habitacion', description: 'Local no construido para habitación' },
    { value: 'casa_o_departamento_en_terreno_familiar', description: 'Casa o departamento en terreno familiar' },
    { value: 'casa_movil_refugio', description: 'Casa móvil Refugio' },
    { value: 'asilo', description: 'Asilo' },
    { value: 'orfanato_o_convento', description: 'orfanato o convento' },
    { value: 'no_tiene_vivienda', description: 'No tiene vivienda' },
    { value: 'otra', description: 'Otra' }
];
export const parentesco = [
    { value: 'madre', description: 'Madre' },
    { value: 'padre', description: 'Padre' },
    { value: 'hija', description: 'Hija' },
    { value: 'hijo', description: 'Hijo' },
    { value: 'pareja', description: 'Pareja' },
    { value: 'expareja', description: 'Expareja' },
    { value: 'conyuge', description: 'Cónyuge' },
    { value: 'suegra', description: 'Suegra' },
    { value: 'suegro', description: 'Suegro' },
    { value: 'cuniada', description: 'Cuñada' },
    { value: 'cuniado', description: 'Cuñado' },
    { value: 'otro', description: 'Otro' }
];
export const turno = [
    { value: 'matutino', description: 'Matutino' },
    { value: 'vespertino', description: 'Vespertino' },
    { value: 'nocturno', description: 'Nocturno' },
    { value: 'mixto', description: 'Mixto' }
];
export const tipo_de_droga = [
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
];
export const complexion = [
    { value: 'delgada', description: 'Delgada' },
    { value: 'mediana', description: 'Mediana' },
    { value: 'atletica', description: 'Atlética' },
    { value: 'robusta', description: 'Robusta' },
    { value: 'obesa', description: 'Obesa' }
];
export const tez = [
    { value: 'blanca', description: 'Blanca' },
    { value: 'morena_clara', description: 'Morena clara' },
    { value: 'morena', description: 'Morena' },
    { value: 'morena_obscura', description: 'Morena obscura' },
    { value: 'otra', description: 'Otra' }
];
export const tamanio_de_cabello = [
    { value: 'largo', description: 'Largo' },
    { value: 'mediano', description: 'Mediano' },
    { value: 'corto', description: 'Corto' }
];
export const forma_cabello = [
    { value: 'ondulado', description: 'Ondulado' },
    { value: 'rizado', description: 'Rizado' },
    { value: 'liso', description: 'Liso' }
];
export const nariz = [
    { value: 'recta', description: 'Recta' },
    { value: 'aplanada', description: 'Aplanada' },
    { value: 'ancho', description: 'Ancho' }
];
export const ojos = [
    { value: 'cafe_claro', description: 'Café claro' },
    { value: 'cafe', description: 'Café' },
    { value: 'verdes', description: 'Verdes' },
    { value: 'azul', description: 'Azul' },
    { value: 'gris', description: 'Gris' }
];
export const tamanio_ojos = [
    { value: 'pequenios', description: 'Pequeños' },
    { value: 'medianos', description: 'Medianos' },
    { value: 'grandes', description: 'Grandes' }
];
export const forma_ojos = [
    { value: 'saltones', description: 'Saltones' },
    { value: 'redondos', description: 'redondos' },
    { value: 'alargados', description: 'Alargados' },
    { value: 'oblicuos', description: 'oblicuos' },
    { value: 'hundidos', description: 'hundidos' }
];
export const estado_fisico = [
    { value: 'bueno', description: 'Bueno' },
    { value: 'malo', description: 'Malo' },
    { value: 'regular', description: 'Regular' }
];