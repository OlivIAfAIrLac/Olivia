'use client'
import AdminUsersModal from "@/components/AdminUsersModal";
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
    const [refresh, setRefresh] = useState(false)

    const getData = useCallback(
        async () => {
            try {
                setLoading(true)
                const res = await axios.get(apiRoutes.USUARIO);
                if (res.status === 200) {
                    setLoading(false)
                    setData(res.data)
                    setRefresh(false)
                }
            } catch (error) {
                console.error(error);
                /* TODO: Handle error messages */
                setLoading(false)
            }
        },
        [],
    )

    useEffect(() => {
        getData()
    }, [getData, refresh])

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
        const [openRemoveModal, setOpenRemoveModal] = useState(false)

        const handleOpenRemoveModal = () => setOpenRemoveModal(true);

        const handleRemove = async () => {
            try {
                const res = await axios.delete(`${apiRoutes.USUARIO}/${_id}`)
                if (res.status === 200) {
                    setOpenRemoveModal(false)
                    setRefresh(true)
                }
            } catch (error) {
                /* TODO: Handle error messages */
                console.error(error);
            }
            setOpenRemoveModal(false)
        }

        const handleUsuariosEditView = (type) => router.push(`${routes.dashboard.admin.usuario}/${_id}${type === 'view' ? '' : '?edit=true'}`);


        return <div className='flex mt-2 p-3 login-bg'>
            <AdminUsersModal
                handleRemove={handleRemove}
                nombre={nombre}
                open={openRemoveModal}
                setOpen={setOpenRemoveModal}
            />
            <div className="flex flex-col">
                <span className="font-bold capitalize">{nombre}</span>
                <span className="capitalize">{getProfesion(profesion)}</span>
                <span className="capitalize">{getUnidad(unidad)}</span>
            </div>
            <div className="flex flex-row ml-auto">
                <div className="">
                    <IconButton onClick={() => handleUsuariosEditView('view')} className="mr-14 mt-4">
                        <FaRegEye size={35} />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={() => handleUsuariosEditView('edit')} className="mr-14 mt-4">
                        <FaUserEdit size={35} />
                    </IconButton>
                </div>
                <div>
                    <IconButton className="mt-4" onClick={handleOpenRemoveModal}>
                        <FaUserTimes size={35} />
                    </IconButton>
                </div>
            </div>
        </div>
    }

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



export default HomeAdminUsers;