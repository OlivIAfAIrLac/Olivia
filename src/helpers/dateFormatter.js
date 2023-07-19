export const formatDateTime = (date) => {
    const timestamp = new Date(date)
    const hora = timestamp.toLocaleString('es-MX', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
    })

    const fecha = timestamp.toLocaleString('es-MX', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    return ({ fecha, hora })
}