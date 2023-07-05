
const IconButton = ({
    onClick,
    children
}) => {
    return (
        <button className="rounded-full primary-btn p-3"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconButton;