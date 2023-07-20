import Link from "next/link";
import AdminUsersButton from "./AdminUsersButton";
import { getProfesion, getUnidad } from "@/helpers/catalogos";
import { routes } from "@/helpers/routes";

export const UserCreatedScreen = ({ userData }) => {
    const { nombre, profesion, unidad, _id } = userData;
    return <div className="mt-8 h-75vh h-screen">
        <span className="capitalize font-semibold mb-4 ">
            Has creado correctamente a este usuario
        </span>
        <div className="primary-bg p-5 mt-6">
            <div className="flex flex-row ">
                <span className="font-bold">
                    {nombre}
                </span>
                <div className="ml-auto flex flex-col">
                    <span>{getProfesion(profesion)}</span>
                    <span>{getUnidad(unidad)}</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <a className="navbar-bg capitalize py-3 px-20 mt-5"
                    href={`${routes.dashboard.admin.usuario}/${_id}`}
                >
                    ver usuario
                </a>
            </div>
        </div>
        <AdminUsersButton />
    </div>
}