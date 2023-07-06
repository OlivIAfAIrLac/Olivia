export const getFecha = date => {
    const fecha = new Date(date);
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`
}