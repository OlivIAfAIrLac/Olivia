const hostname = process.env.NEXT_PUBLIC_API_GATEWAY;
export const apiRoutes = {
    LOGIN: `${hostname}/login`,
    USUARIO: `${hostname}/usuario`,
    EXPEDIENTE: `${hostname}/expediente`,
    DOCUMENTO: `${hostname}/documento`,
    AUDIO: `${hostname}/audio`,
}