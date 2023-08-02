const hostname = process.env.NEXT_PUBLIC_API_GATEWAY;
export const apiRoutes = {
    LOGIN: `${hostname}/login`,
    USUARIO: `${hostname}/usuario`,
    EXPEDIENTE: `${hostname}/expediente`,
    CEDULA: `${hostname}/cedula`,
    SABANA: `${hostname}/sabana`,
    DOCUMENTO: `${hostname}/documento`,
    AUDIO: `${hostname}/audio`,
}