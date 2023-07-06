const Container = ({ children }) => {
    /* Get correct aligment on center */
    return (
        <div className="flex flex-col py-2 px-32">
            {children}
        </div>
    );
}

export default Container;