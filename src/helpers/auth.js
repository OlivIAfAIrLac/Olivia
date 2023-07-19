import { jwtVerify } from 'jose';

export const getUserInfo = async (token) => {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.NEXTAUTH_SECRET));
    return payload;
};