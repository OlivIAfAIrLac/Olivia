const Input = (props) => {
    const {
        className,
        onChange,
        name,
        placeholder,
        type,
    } = props;
    return (
        <input
            onChange={onChange}
            className={`input py-2 px-3 ${className}`}
            name={name}
            placeholder={placeholder}
            type={type}
        />
    );
}

export default Input;