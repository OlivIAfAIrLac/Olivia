const { createContext } = require("react");

export const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
    return (
        <NotificationContext.Provider
        // value={ }
        >
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationProvider;