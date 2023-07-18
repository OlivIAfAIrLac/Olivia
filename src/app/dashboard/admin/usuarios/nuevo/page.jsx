'use client'
import Container from "@/components/Container";
import SelectProfesion from "@/components/SelectProfesion";
import SelectUnidad from "@/components/SelectUnidad";
import SelectUserRole from "@/components/SelectUserRole";
import { apiRoutes } from "@/helpers/apiRoutes";
import { routes } from "@/helpers/routes";
import axios from "axios";
import Link from "next/link";


const NewUserHome = () => {

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const {
            nombre,
            profesion,
            unidad,
            email,
            telefono,
            extension,
            rol,
        } = ev.target;

        const body = {
            nombre: nombre.value,
            profesion: profesion.value,
            unidad: unidad.value,
            email: email.value,
            telefono: telefono.value,
            extension: extension.value,
            rol: rol.value,
        };

        try {
            const res = await axios.post(apiRoutes.USUARIO, body)
        } catch (error) {
            console.error(error);
        }


    }

    return (
        <Container>
            <span className="mt-10 capitalize font-semibold ">
                crear usuario
            </span>
            <form className="flex flex-col login-bg p-5" onSubmit={handleSubmit}>
                {/* nombre */}
                <span className="capitalize mt-2">nombre completo</span>
                <input className="input p-2 capitalize"
                    name='nombre'
                    required
                />
                {/* profesion */}
                <span className="capitalize mt-2">profesión</span>
                <SelectProfesion
                    name='profesion'
                    required
                    className="input w-1/5"
                />
                {/* unidad */}
                <span className="capitalize mt-2">unidad</span>
                <SelectUnidad
                    name='unidad'
                    required
                    className='w-1/5'
                />
                {/* correo institucional */}
                <span className="capitalize mt-2">correo institucional</span>
                <input
                    name='email'
                    required
                    className="input p-2"
                    type="email"
                />
                {/* Telefono */}
                <span className="capitalize mt-2">Telefono</span>
                <input className="input p-2"
                    name='telefono'
                    required
                />
                <span className="capitalize mt-2">extensión</span>
                <input
                    className="input w-1/5 p-2"
                    name='extension'
                />
                {/* tipo usuario */}
                <span className="capitalize mt-2">tipo de usuario</span>
                <SelectUserRole
                    name='rol'
                    required
                    className='w-1/5'
                />
                <div className="grid grid-flow-col gap-6 mt-5">
                    <button className="primary-bg p-3">Guardar</button>
                    <Link href={routes.dashboard.admin.adminUsuarios} className="primary-bg p-3 text-center">Cancelar</Link>
                </div>
            </form>
        </Container>
    );
}

export default NewUserHome;