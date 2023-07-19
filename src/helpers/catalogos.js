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