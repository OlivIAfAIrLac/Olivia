const hostname = process.env.NEXT_PUBLIC_API_GATEWAY;
console.log('====================================');
console.log(hostname);
console.log('====================================');
export const apiRoutes = {
    LOGIN: `${hostname}/login`,
    USUARIO: `${hostname}/usuario`,
    EXPEDIENTE: `${hostname}/expediente`,
    DOCUMENTO: `${hostname}/documento`,
}

const restClient = (jwt = null) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorizathion': `Bearer ${jwt}`
    }
}