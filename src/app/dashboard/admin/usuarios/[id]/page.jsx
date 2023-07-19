'use client'
import AdminUsersButton from '@/components/AdminUsersButton'
import Container from '@/components/Container'
import { FormCreateUser } from '@/components/FormCreateUser'
import IconButton from '@/components/IconButton'
import LoaderSkeleton from '@/components/LoaderSkeleton'
import { UserCreatedScreen } from '@/components/UserCreatedScreen'
import UserProfile from '@/components/UserProfile'
import UserStadistics from '@/components/UserStadistics'
import { apiRoutes } from '@/helpers/apiRoutes'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { FaUserEdit, FaUserTimes } from 'react-icons/fa'

const UserByID = ({ params, searchParams }) => {
    const { id } = params;
    const { edit } = searchParams;
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(true)
    const [editMode, setEditMode] = useState(edit)
    const [userEdited, setUserEdited] = useState(false)

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
            _id: id,
            nombre: nombre.value,
            profesion: profesion.value,
            unidad: unidad.value,
            email: email.value,
            telefono: telefono.value,
            extension: extension.value,
            rol: rol.value,
        };
        try {
            setLoading(true)
            const res = await axios.put(`${apiRoutes.USUARIO}/${id}`, body)
            if (res.status === 200) {
                setEditMode(false)
                setUserEdited(true)
                setLoading(false)
                setUserData({ ...body })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getUserData = useCallback(
        async () => {
            try {
                const res = await axios.get(`${apiRoutes.USUARIO}/${id}`)
                if (res.status === 200) {
                    setLoading(false)
                    setUserData({ user: res.data })
                }
            } catch (error) {

            }
        },
        [id],
    )

    useEffect(() => {
        getUserData()
    }, [getUserData]);



    const UserInfoDisplay = () => {
        return (
            <div className='h-screen h-81vh'>
                <div className="flex login-bg p-8 mt-10">
                    <div className='flex flex-col'>
                        {
                            !loading ?
                                <UserProfile data={userData} />
                                : <LoaderSkeleton />
                        }
                    </div>
                    {/* Button Group */}
                    <div className='flex flex-row ml-auto'>
                        <div>
                            <IconButton className="mr-14"
                                onClick={() => setEditMode(true)}
                            >
                                <FaUserEdit size={35} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton className="">
                                <FaUserTimes size={35} />
                            </IconButton>
                        </div>
                    </div>
                </div>
                {
                    !loading ?
                        <UserStadistics />
                        : <LoaderSkeleton />
                }
                <AdminUsersButton />
            </div>);
    }

    return (
        <Container>
            {(userEdited && !editMode) && <UserCreatedScreen userData={userData} />}
            {(editMode && !loading)
                ? <FormCreateUser
                    editMode={editMode}
                    handleSubmit={handleSubmit}
                    defaultValues={userData.user}
                />
                : (!userEdited) && <UserInfoDisplay />
            }
        </Container>
    );

}

export default UserByID;