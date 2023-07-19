const Container = ({ children, className }) => {
    /* Get correct aligment on center */
    return (
        <div className={`flex flex-col py-2 px-32 ${className}`}>
            {children}
        </div>
    );
}

export default Container;