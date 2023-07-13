const hostname = process.env.apiGateway;
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