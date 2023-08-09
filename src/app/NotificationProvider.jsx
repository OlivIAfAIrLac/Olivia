import ErrorNotification from "@/components/ErrorNotification";

const { createContext, useState } = require("react");

export const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
    const [error, setError] = useState()
    const [showErrorNotification, setShowErrorNotification] = useState(false)
    return (
        <NotificationContext.Provider
            value={{
                error,
                showErrorNotification,
                setShowErrorNotification,
                setError,
            }}
        >
            {children}
            <ErrorNotification
                error={error}
                show={showErrorNotification}
                setShow={setShowErrorNotification}
            />
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;