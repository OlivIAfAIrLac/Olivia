import ErrorNotification from "@/components/ErrorNotification";
import SuccesNotification from "@/components/SuccesNotification";

const { createContext, useState } = require("react");

export const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
    const [error, setError] = useState()
    const [showErrorNotification, setShowErrorNotification] = useState(false)
    const [showSuccesNotification, setShowSuccesNotification] = useState(false)
    return (
        <NotificationContext.Provider
            value={{
                error,
                showSuccesNotification,
                setShowSuccesNotification,
                showErrorNotification,
                setShowErrorNotification,
                setError,
            }}
        >
            {children}
            <SuccesNotification
                show={showSuccesNotification}
                setShow={setShowSuccesNotification}
            />
            <ErrorNotification
                error={error}
                show={showErrorNotification}
                setShow={setShowErrorNotification}
            />
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;