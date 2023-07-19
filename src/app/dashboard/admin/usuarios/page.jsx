'use client'
import Container from "@/components/Container";
import IconButton from "@/components/IconButton";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import SearchButton from "@/components/SearchButton";
import { apiRoutes } from "@/helpers/apiRoutes";
import { getProfesion, getUnidad } from "@/helpers/catalogos";
import { routes } from "@/helpers/routes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useCallback, useEffect, useState } from "react";
import { FaUserEdit, FaUserTimes } from "react-icons/fa";
import { FaRegEye, FaUserPlus } from "react-icons/fa6";

const HomeAdminUsers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getData = useCallback(
        async () => {
            try {
                setLoading(true)
                const res = await axios.get(apiRoutes.USUARIO);
                if (res.status === 200) {
                    setLoading(false)
                    setData(res.data)
                }
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        },
        [],
    )

    useEffect(() => {
        getData()
    }, [getData])


    return (
        <Container>
            {/* New Users button */}
            <div className="flex flex-col justify-center items-center">
                <NewUserButton />
            </div>
            {/* Search Button */}
            <div className="flex flex-col justify-center mx-6 items-center">
                <SearchButton />
            </div>
            {/* Users Grid */}
            <div className="">
                <span className="primary-color capitalize text-2xl ">usuarios</span>
                <div className="grid grid-flow-row">
                    {
                        loading
                            ? <LoaderSkeleton />
                            : data.map(item => <UserCard key={item.nombre} data={item} />)
                    }

                </div>
            </div>
        </Container>
    );
}
export const NewUserButton = () => {
    return <Link href={routes.dashboard.admin.nuevoUsuario} className="flex flex-row mt-6 primary-btn py-6 px-16">
        <FaUserPlus size={40} />
        <span className='ml-5 flex-initial mr-24 mt-2 capitalize'>
            crear nuevo usuario
        </span>
    </Link>
}

const UserCard = ({
    data
}) => {
    const router = useRouter()
    const {
        _id,
        nombre,
        profesion,
        unidad
    } = data;


    return <div className='flex mt-2 p-3 login-bg'>
        <div className="flex flex-col">
            <span className="font-bold capitalize">{nombre}</span>
            <span className="capitalize">{getProfesion(profesion)}</span>
            <span className="capitalize">{getUnidad(unidad)}</span>
        </div>
        <div className="flex flex-row ml-auto">
            <div className="">
                <IconButton onClick={() => router.push(`${routes.dashboard.admin.usuario}/${_id}`)} className="mr-14 mt-4">
                    <FaRegEye size={35} />
                </IconButton>
            </div>
            <div>
                <IconButton className="mr-14 mt-4">
                    <FaUserEdit size={35} />
                </IconButton>
            </div>
            <div>
                <IconButton className="mt-4">
                    <FaUserTimes size={35} />
                </IconButton>
            </div>
        </div>
    </div>
}

export default HomeAdminUsers;