import { getUserInfo } from "@/helpers/auth";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "email" },
        nombre: {},
        email: {},
        unidad: {},
        profesion: {},
        token: {},
        telefono: {},
        extension: {},
        rol: {},
      },
      async authorize(credentials, req) {
        const { token } = credentials;
        const {
          nombre,
          email,
          unidad,
          profesion,
          telefono,
          extension,
          rol
        } = await getUserInfo(token)
        const user = {
          nombre,
          email,
          unidad,
          profesion,
          token,
          telefono,
          extension,
          rol
        }

        return user;
      }
    })
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session
    }
  }
})

export { handler as GET, handler as POST }