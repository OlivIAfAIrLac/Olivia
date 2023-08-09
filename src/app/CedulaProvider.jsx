import { updateCedula } from "@/helpers/updateCedula";
import { createContext, useContext, useState } from "react";
import { NotificationContext } from "./NotificationProvider";
import axios from "axios";
import { apiRoutes } from "@/helpers/apiRoutes";

export const CedulaContext = createContext();

const CedulaProvider = ({ children }) => {
    const notificationCtx = useContext(NotificationContext)

    const [dataCedula, setDataCedula] = useState()
    const [dataExpediente, setDataExpediente] = useState()
    const [body, setBody] = useState({})
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)


    const changed = (e, id) => {
        setBody({
            ...body,
            [id]: e.target.value
        })
    }

    const multipleChangedGroup = (name, value) => {
        setBody({
            ...body,
            [name]: value
        })
    }

    const handleOnSubmit = async () => {
        try {
            /* IF body has not kyes, not patch */
            if (Object.keys(body).length !== 0) {
                console.log(`${apiRoutes.CEDULA}/${dataCedula._id}?expediente=${dataExpediente._id}`, body);
                const res = await axios.patch(`${apiRoutes.CEDULA}/${dataCedula._id}?expediente=${dataExpediente._id}`, body);
                if (res.status === 200) {
                    setDataCedula({
                        ...dataCedula,
                        body
                    })
                    setRefresh(true)
                    notificationCtx.setShowSuccesNotification(true)
                    setTimeout(() => {
                        notificationCtx.setShowSuccesNotification(false)
                    }, 1_000);
                }
            }
        } catch (error) {
            console.error(error);
            notificationCtx.setError(error)
            notificationCtx.setShowErrorNotification(true)
        }
    }



    return (
        <CedulaContext.Provider value={{
            refresh,
            setRefresh,
            dataCedula,
            setDataCedula,
            dataExpediente,
            setDataExpediente,
            loading,
            setLoading,
            changed,
            multipleChangedGroup,
            handleOnSubmit,
        }}>
            {children}
        </CedulaContext.Provider>
    );
}

export default CedulaProvider;