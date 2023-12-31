'use client'
import { NotificationContext } from "@/app/NotificationProvider";
import Container from "@/components/Container";
import { FormCreateUser } from "@/components/FormCreateUser";
import { UserCreatedScreen } from "@/components/UserCreatedScreen";
import { apiRoutes } from "@/helpers/apiRoutes";

import axios from "axios";

import { useContext, useState } from "react";



const NewUserHome = () => {
    const notificationCtx = useContext(NotificationContext)
    const [userCreated, setUserCreated] = useState(false)
    const [userData, setUserData] = useState({})

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const {
            nombre,
            profesion,
            unidad,
            email,
            telefono,
            extension,
            password,
            rol,
        } = ev.target;

        const body = {
            nombre: nombre.value,
            profesion: profesion.value,
            unidad: unidad.value,
            email: email.value,
            telefono: telefono.value,
            password: password.value,
            extension: extension.value,
            rol: rol.value,
        };

        try {
            const res = await axios.post(apiRoutes.USUARIO, body)
            if (res.status === 200) {
                setUserCreated(true)
                setUserData({ ...res.data })
            }
        } catch (error) {
            notificationCtx.setError(error)
            notificationCtx.setShowErrorNotification(true)
            console.error(error);
        }


    }

    return (
        <Container>
            {!userCreated
                ? <FormCreateUser handleSubmit={handleSubmit} />
                : <UserCreatedScreen userData={userData} />
            }
        </Container>
    );
}


export default NewUserHome;