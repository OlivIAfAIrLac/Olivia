const Input = (props) => {
    const {
        name,
        placeholder,
        type,
    } = props;
    return (
        <input
            className="input mb-4 py-2 px-3"
            name={name}
            placeholder={placeholder}
            type={type}
        />
    );
}

export default Input;