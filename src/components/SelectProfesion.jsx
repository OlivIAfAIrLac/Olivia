import { profesiones } from "@/helpers/catalogos";

const SelectProfesion = ({
    className,
    onChange,
    required,
    name
}) => {
    return (
        <select className={`input capitalize pl-2 ${className}`}
            onChange={onChange}
            name={name}
            required={required}
        >
            {profesiones.map(item => <option
                key={item.value}
                value={item.value}>
                {item.description}
            </option>)}
        </select>
    );
}

export default SelectProfesion;