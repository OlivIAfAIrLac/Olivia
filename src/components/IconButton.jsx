
const IconButton = ({
    onClick,
    className,
    children
}) => {
    return (
        <button className={`rounded-full primary-btn p-2 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconButton;