import { updateCedula } from "@/helpers/updateCedula";
import { createContext, useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { apiRoutes } from '@/helpers/apiRoutes';

export const CedulaContext = createContext();

const CedulaProvider = ({ children }) => {
    const [dataCedula, setDataCedula] = useState()
    const [loading, setLoading] = useState(true)


    const changed = (e, id) => {
        // alert("changed")
        const newValue = updateCedula(id, e.target.value)
        const cedula = JSON.parse(localStorage.getItem("cedula"))
        const newCedula = { ...cedula.cedula, ...newValue }
        cedula.cedula = newCedula
        console.log(newValue)
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

    const handleOnSubmit = () => {
        try {

        } catch (error) {
            /* TODO:  */
        }
    }



    return (
        <CedulaContext.Provider value={{
            handleOnChange,
            dataCedula,
            setDataCedula,
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