export const routes = {
    dashboard: {
        admin: {
            adminUsuarios: "/dashboard/admin/usuarios",
            nuevoUsuario: "/dashboard/admin/usuarios/nuevo",
            usuario: "/dashboard/admin/usuarios/",
            expedientes: "/dashboard/admin/expedientes/",
        },
        main: "/dashboard",
        miCuenta: "/dashboard/mi_cuenta",
        nuevoExpediente: "/dashboard/nuevo_expediente",
        expediente: "/dashboard/expediente",
        cedula: "/dashboard/cedula",
        sabana: "/dashboard/sabana",
    },
    login: {
        signIn: "/login",
        recuperarPass: "/login/recuperar_password"
    }
}