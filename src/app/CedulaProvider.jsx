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


    const changed = (e, id) => {
        setBody({
            ...body,
            [id]: e.target.value
        })
    }

    const changedGroup = (e, id) => {
        const newValue = updateCedula(id, e.target.value)
        console.log("changedGroup", newValue)

    }

    const multipleChangedGroup = (e, id) => {
        const newValue = updateCedula(id, e.target.value)
        console.log("multipleChangedGroup", newValue)
    }


    const handleOnChange = ({ name, value }) => {
        console.log(name, value);
    }

    const handleOnSubmit = async () => {
        const {
            expediente,
            cedula
        } = dataCedula
        try {
            console.log(`${apiRoutes.CEDULA}/${cedula._id}?expediente=${expediente._id}`, body);
            // const resp = await axios.patch(`${apiRoutes.CEDULA}/${dataCedula.cedula._id}`);
        } catch (error) {
            notificationCtx.setError(error)
            notificationCtx.setShowErrorNotification(true)
        }
    }



    return (
        <CedulaContext.Provider value={{
            handleOnChange,
            dataCedula,
            setDataCedula,
            dataExpediente,
            setDataExpediente,
            loading,
            setLoading,
            changed,
            changedGroup,
            multipleChangedGroup,
        }}>
            {children}
        </CedulaContext.Provider>
    );
}

export default CedulaProvider;