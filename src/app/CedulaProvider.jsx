import { updateCedula } from "@/helpers/updateCedula";
import { createContext } from "react";

export const CedulaContext = createContext();

const CedulaProvider = ({ children }) => {

    const changed = (e, id) => {
        // alert("changed")
        const newValue = updateCedula(id, e.target.value)
        const cedula = JSON.parse(localStorage.getItem("cedula"))
        const newCedula = { ...cedula.cedula, ...newValue }
        cedula.cedula = newCedula
        console.log(newValue)
        // localStorage.setItem("cedula", JSON.stringify(cedula))
    }

    const changedGroup = (e, id) => {
        const newValue = updateCedula(id, e.target.value)
        console.log(newValue)
        // console.log(JSON.parse(localStorage.getItem("cedula")))

    }

    const multipleChangedGroup = (e, id) => {
        const newValue = updateCedula(id, e.target.value)
        console.log(newValue)
        // console.log(JSON.parse(localStorage.getItem("cedula")))


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
            changed,
            changedGroup,
            multipleChangedGroup,
        }}>
            {children}
        </CedulaContext.Provider>
    );
}

export default CedulaProvider;