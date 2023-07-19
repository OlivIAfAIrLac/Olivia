
const IconButton = ({
    onClick,
    className,
    children,
    disabled = false
}) => {
    return (
        <button disabled={disabled} className={`rounded-full primary-btn p-2 ${className} disabled:opacity-20`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconButton;