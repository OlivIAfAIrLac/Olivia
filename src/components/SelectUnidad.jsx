import { unidad } from "@/helpers/catalogos";

const userTypes = [
    { description: "administrador", value: "admin" },
    { description: "usuario", value: "user" },
]
const SelectUnidad = ({
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
            {
                unidad.map(item => <option
                    key={item.value}
                    value={item.value}>
                    {item.description}
                </option>)
            }
        </select >
    );
}

export default SelectUnidad;