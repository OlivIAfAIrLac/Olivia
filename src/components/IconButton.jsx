
const IconButton = ({
    onClick,
    className,
    children,
    disabled = false,
    onFocus,
    onBlur
}) => {
    return (
        <button
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
            className={`rounded-full primary-btn p-2 ${className} disabled:opacity-20`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default IconButton;